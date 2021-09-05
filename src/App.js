import React from 'react';
import './App.css';
import data from './data';
import ConditionalSelection from './Components/ConditionalSelection';
import Loading from './Components/Loading';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {data ? (
          <div className="w-3/4 px-2 py-2 mx-auto md:py-6 w-md">
            <div className="flex flex-col items-start justify-center space-y-6">
              <h1 className="text-6xl">React Conditional Selection</h1>
              <h2 className="text-4xl">Basic example</h2>
              <ConditionalSelection data={data} showRequired={true} />
              <h2 className="text-4xl">Example with default selection</h2>
              <ConditionalSelection
                data={data}
                showRequired={true}
                defaultValues={{
                  EQUIPMENTLINE: 'AMGPLUS',
                  EQUIPMENTPACKAGE: '6',
                  AIRBAGS: 'MORE',
                  ENGINEVERSIONS: 'GASOLINE',
                  FUELTYPE: 'PETROL',
                  UPHLOSTERYGROUP: 'CUMA',
                  UPHLOSTERYINTERIOR: 'CUMA49261',
                  UPHLOSTERYSEAT: 'CUMA76061',
                }}
              />
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </header>
    </div>
  );
}

export default App;
