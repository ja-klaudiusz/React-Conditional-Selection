import Query from './query';

export const validateRule = (selection, rule) => {
  return Boolean(Query.query([selection], rule).length);
};

export const formCallback = (e) => {
  if (e.keyCode === 13) {
    var form = e.target.form;
    var index = Array.prototype.indexOf.call(form, e.target);
    if (form.elements[index + 2]) {
      if (form.elements[index + 2].disabled) {
        let i = index + 2;
        do {
          i++;
          if (form.elements[i] && !form.elements[i].disabled) {
            form.elements[i].focus();
          }
        } while (i < form.elements.length && form.elements[i].disabled);
      } else {
        form.elements[index + 2].focus();
      }
    }
  }
};

export const checkStats = async (selectionStatsIds, selection) => {
  let isReady = false;
  let notSelected = 0;
  let notSelectedMandatory = 0;
  const options = selectionStatsIds.toSelectIds;
  const mandatoryOptions = selectionStatsIds.requiredIds;
  const totalOptions = options.length;
  const totalMandatoryOptions = mandatoryOptions.length;
  for (let item of options) {
    if (!selection[item]) {
      notSelected++;
    }
  }
  for (let item of mandatoryOptions) {
    if (!selection[item]) {
      notSelectedMandatory++;
    }
  }

  if (notSelectedMandatory === 0 && notSelected === 0) isReady = true;

  const progressPercent = Math.round(
    (1 - notSelected / totalOptions) * 100
  ).toFixed(0);
  return {
    isReady,
    notSelected,
    notSelectedMandatory,
    totalOptions,
    totalMandatoryOptions,
    progressPercent,
  };
};
