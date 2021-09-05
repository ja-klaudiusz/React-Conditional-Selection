/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import CategorySection from './CategorySection';
import { formCallback } from '../utils';
import { useValidate } from '../utils/validation';
import Loading from './Loading';
const Configurator = ({ data, showRequired, defaultValues = {} }) => {
  const { selection, validData, stats, validate } = useValidate();

  const handleUpdateSelection = (newSelection) => {
    validate(data, newSelection);
  };

  useEffect(() => {
    if (data) {
      validate(data, defaultValues);
    }
  }, [data]);

  return validData ? (
    <div className="w-full flex flex-row items-center justify-center space-y-6">
      <div className="w-1/2 md:w-3/5 text-sm text-left">
        <pre>
          <code>{JSON.stringify({ selection, stats }, null, 4)}</code>
        </pre>
      </div>
      <div className="w-1/2 md:w-3/5 text-md text-left">
        <form
          onKeyUp={formCallback}
          className={stats.isReady ? 'ready' : 'not-ready'}>
          {Object.keys(validData).map((key) => {
            const category = validData[key];
            return (
              <CategorySection
                key={key}
                selection={selection}
                showRequired={showRequired}
                categoryName={category.name}
                children={category.children}
                updateSelection={handleUpdateSelection}
              />
            );
          })}
        </form>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Configurator;
