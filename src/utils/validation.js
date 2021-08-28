import clonedeep from 'lodash.clonedeep';
import { checkStats, validateRule } from './index';

// ----------------------------------------------------------------------
// React Conditional Selection validation
// Copyright © Klaudiusz Marszałek
// License: MITNFA
// ----------------------------------------------------------------------

export const validate = (data, selection) => {
  return new Promise(async (resolve, reject) => {
    let forceUpdate = false;

    let newSelection = { ...selection };
    let flatData = {};
    let validData = {};
    let toSelectIds = [];
    let requiredIds = [];
    for (let key in data) {
      let record = clonedeep(data[key]);
      const code = record.code;
      const categoryCode = record.category.code;

      record.isValid = validateRule(newSelection, record.rules);
      record.validValues = [];

      for (let option in record.options) {
        if (record.isValid) {
          let value = record.options[option];
          value.isValid = validateRule(newSelection, value.rules);
          if (value.isValid) record.validValues.push(value);
        } else {
          record.options[option].isValid = false;
        }
      }

      if (record.validValues.length === 1) {
        newSelection[code] = record.validValues[0].code;
      } else if (record.validValues.length === 0) {
        delete newSelection[code];
      }

      if (record.options.length === 1) {
        record.isVisible = false;
      }

      record.isRequired &&
        record.isVisible &&
        record.isValid &&
        requiredIds.push(code);
      record.isVisible && record.isValid && toSelectIds.push(code);

      flatData[key] = record;

      if (!validData[categoryCode]) {
        validData[categoryCode] = {
          children: [record],
          name: record.category.name,
        };
      } else {
        validData[categoryCode].children.push(record);
      }
    }

    for (let key in newSelection) {
      let record = flatData[key];
      if (record) {
        let isOK = false;

        for (let value in record.validValues) {
          if (newSelection[key] == record.validValues[value].code) {
            isOK = true;
            break;
          }
        }

        if (!isOK) {
          delete newSelection[key];
          forceUpdate = true;
        }
      } else if (!selection[key]) {
        delete newSelection[key];
      }
    }

    const stats = await checkStats({ toSelectIds, requiredIds }, newSelection);

    if (forceUpdate) {
      validate(data, newSelection).then((data) => {
        resolve({ ...data, stats });
      });
    } else {
      resolve({
        newSelection,
        stats,
        validData,
      });
    }
  });
};
