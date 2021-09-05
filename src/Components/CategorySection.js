import React from 'react';
import Dropdown from './Dropdown';
const CategoryItem = ({
  categoryName,
  children,
  updateSelection,
  selection,
  showRequired,
}) => {
  const showCategoryName = () => {
    let show = false;
    for (let child of children) {
      if (child.isValid) {
        show = true;
        break;
      }
    }
    return show;
  };
  return (
    <>
      {showCategoryName() && (
        <h3 className="mb-2 text-neutral-300">{categoryName}</h3>
      )}

      {children.map((option, i) => {
        return (
          option.isVisible &&
          option.isValid && (
            <Dropdown
              key={option.code}
              selection={selection}
              showRequired={showRequired}
              name={option.name}
              code={option.code}
              isRequired={option.isRequired}
              isValid={option.isValid}
              children={option.validValues}
              updateSelection={updateSelection}
            />
          )
        );
      })}
    </>
  );
};

export default CategoryItem;
