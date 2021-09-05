import React from 'react';
import Select, { components } from 'react-select';

const colourStyles = {
  valueContainer: (styles) => {
    return {
      ...styles,
      padding: '5px 8px 5px 0px',
      width: '100%',
      minHeight: 36,
    };
  },
  control: (styles) => {
    return {
      ...styles,
      marginBottom: 10,
      width: '100%',
      paddingLeft: 5,
      boxShadow: 'none',
      borderRadius: 50,
      minHeight: 36,
      borderStyle: 'solid',
      borderWidth: '1px',
      '&:hover': {
        borderColor: '#c5d4e0',
      },
      cursor: 'pointer',
    };
  },
  placeholder: (base) => {
    return {
      ...base,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    };
  },
  singleValue: (base) => ({
    ...base,
    minHeight: 36,
    display: 'flex',
    fontSize: '14px',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100% ',
    marginLeft: 5,
  }),
  menu: (base) => ({
    ...base,
    width: '96%',
    marginLeft: '3%',
    marginRight: '3%',
    top: 58,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: '1px',
    padding: 10,
  }),
  option: (styles, { isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isSelected ? '#eaeff5' : isFocused ? '#f1f1f1' : 'white',
      color: '#333333',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      width: '100% ',
      padding: '5px',
      borderBottom: '1px solid #f1f1f1',
      fontSize: '16px',
    };
  },
};

const singleOption = ({ children, ...props }) => {
  return (
    <components.Option {...props}>
      <div className="flex flex-col justify-center pl-2">{children}</div>
    </components.Option>
  );
};

const singleValue = ({ children, ...props }) => {
  return (
    <components.SingleValue {...props}>
      <div className="flex flex-row justify-center items-center text-lg">
        <span
          className="check-mark w-8 ml-6"
          style={{
            color: '#7bc32c',
          }}></span>
        <div className="flex flex-col justify-center pl-2">
          <strong>
            <small>{props.selectProps.placeholder}</small>
          </strong>
          {children}
        </div>
      </div>
    </components.SingleValue>
  );
};

const Placeholder = (props) => {
  const { isDisabled, showRequired, selectProps } = props;
  const { isRequired } = selectProps;
  return (
    <components.Placeholder {...props}>
      <div className="flex flex-row justify-center items-center text-lg">
        <span
          className="question-mark w-8 ml-6"
          style={{
            opacity: isDisabled ? 0.5 : 1,
            color: showRequired
              ? isRequired
                ? ' #e44562'
                : '#7bc32c'
              : '#7bc32c',
          }}></span>
        {props.children}
      </div>
    </components.Placeholder>
  );
};

const ReactSelect = ({
  value,
  name,
  placeholder,
  isDisabled,
  isRequired,
  onChange,
  options,
  showRequired,
}) => {
  return (
    <Select
      openMenuOnFocus={true}
      styles={colourStyles}
      value={value}
      placeholder={placeholder}
      isDisabled={isDisabled}
      isRequired={isRequired}
      onChange={onChange}
      name={name}
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option.code}
      options={options}
      components={{
        Option: singleOption,
        SingleValue: singleValue,
        Placeholder: (props) => (
          <Placeholder showRequired={showRequired} {...props} />
        ),
      }}
    />
  );
};

export default ReactSelect;
