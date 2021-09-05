import React, { useEffect, useState } from 'react';
import ReactSelect from './ReactSelect';

const Dropdown = ({
  name,
  code,
  children,
  updateSelection,
  isRequired,
  isValid,
  selection,
  showRequired,
}) => {
  const [value, setValue] = useState(null);
  const childrenNotExist = children.length === 0;
  const disabled = !isValid || childrenNotExist;

  useEffect(() => {
    disabled && setValue(null);
  }, [disabled]);

  useEffect(() => {
    const value = selection[code] ? selection[code] : null;
    value && setValue(value);
  }, [selection[code]]);

  return (
    <ReactSelect
      value={children.filter(({ code }) => code === value)}
      placeholder={name}
      isDisabled={children.length === 1 || disabled}
      isRequired={isRequired}
      onChange={(option) => {
        const newSelection = {
          ...selection,
          [code]: option.code,
        };
        updateSelection(newSelection);
      }}
      name={code}
      options={children}
      showRequired={showRequired}
    />
  );
};

export default Dropdown;
