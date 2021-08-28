/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import CategoryItem from './CategoryItem';
import { formCallback } from '../utils';
import { validate } from '../utils/validation';
import Loading from './Loading';
const Configurator = ({ data, showRequired, defaultValues = {} }) => {
  const [stats, setStats] = useState({ isReady: false });
  const [selection, setSelection] = useState({});
  const [validData, setValidData] = useState(null);

  const handleValidate = async ({ data, selection }) => {
    const { newSelection, validData, stats } = await validate(data, selection);

    setSelection(newSelection);
    setValidData(validData);
    setStats(stats);
  };

  const handleUpdateSelection = (newSelection) => {
    handleValidate({
      data,
      selection: newSelection,
    });
  };

  useEffect(() => {
    if (data) {
      handleValidate({
        data,
        selection: defaultValues,
      });
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
              <CategoryItem
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
