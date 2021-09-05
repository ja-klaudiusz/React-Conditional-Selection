# [React Conditional Selection](https://react-conditional-select.vercel.app)

React Conditional Selection is a useful way to build cascading select with large amount of options, categories and business rules aimed at controlling the dependencies between them.

# How it works

Business rules are defined on almost every row of data. Each time when object of selection changes, there is starting validation process. Rule decide about when option or select should render. Validation relies on comparing rules with selection object. Categories, selects or options are rendered only when its rules are matching to current object of selection.

#### Sample data object

```javascript
{
    "ENGINEVERSIONS": {
        "code": "ENGINEVERSIONS",
        "name": "Engine type",
        "options": [
            {
                "code": "GASOLINE",
                "name": "Gasoline",
                "default": null,
                "rules": null
            },
            {
                "code": "ELECTRIC",
                "name": "Electric",
                "default": null,
                "rules": null
            },
            {
                "code": "HYDROGEN",
                "name": "Hydrogen",
                "default": null,
                "rules": null
            }
        ],
        "category": {
            "name": "Technical Data",
            "code": "TECHNICAL"
        },
        "isVisible": true,
        "isRequired": true,
        "rules": null
    },
    "FUELTYPE": {
        "code": "FUELTYPE",
        "name": "Fuel type",
        "options": [
            {
                "code": "NONE",
                "name": "none",
                "default": null,
                "rules": {
                    "ENGINEVERSIONS": {
                        "$in": [
                            "ELECTRIC",
                            "HYDROGEN"
                        ]
                    }
                }
            },
            {
                "code": "PETROL",
                "name": "Petrol",
                "default": null,
                "rules": {
                    "ENGINEVERSIONS": "GASOLINE"
                }
            },
            {
                "code": "DIESEL",
                "name": "Diesel",
                "default": null,
                "rules": {
                    "ENGINEVERSIONS": "GASOLINE"
                }
            }
        ],
        "category": {
            "name": "Technical Data",
            "code": "TECHNICAL"
        },
        "isVisible": true,
        "isRequired": true,
        "rules": null
    }
}
```

Full example [data.js](https://github.com/ja-klaudiusz/React-Conditional-Selection/blob/main/src/data.js)

#### Sample selection object

```javascript
 "selection": {
        "EQUIPMENTLINE": "AMGPLUS",
        "EQUIPMENTPACKAGE": "5",
        "AIRBAGS": "MORE",
        "ENGINEVERSIONS": "GASOLINE",
        "FUELTYPE": "PETROL",
        "UPHLOSTERYGROUP": "RAX",
        "UPHLOSTERYINTERIOR": "RAX123"
 }
```

Validation is fast and performance. It relies on comparing rules defined on every option with current selection object.

## How to use

Install package

```bash
npm i react-conditional-selection
```

and apply code like this

```javascript
import ConditionalSelection from 'react-conditional-selection';

function App() {
  const data = {
    FUELTYPE: {
      code: 'FUELTYPE',
      name: 'Fuel type',
      options: [
        {
          code: 'NONE',
          name: 'none',
          default: null,
          rules: { ENGINEVERSIONS: { $in: ['ELECTRIC', 'HYDROGEN'] } },
        },
        {
          code: 'PETROL',
          name: 'Petrol',
          default: null,
          rules: { ENGINEVERSIONS: 'GASOLINE' },
        },
        {
          code: 'DIESEL',
          name: 'Diesel',
          default: null,
          rules: { ENGINEVERSIONS: 'GASOLINE' },
        },
      ],
      category: { name: 'Technical Data', code: 'TECHNICAL' },
      isVisible: true,
      isRequired: true,
      rules: null,
    },
  };
  return (
    <ConditionalSelection
      data={data}
      showRequired={true}
      callback={(data) => {
        console.log(data);
      }}
    />
  );
}

export default App;
```

Or try it on CodeSandbox [React Conditional Selection](https://codesandbox.io/s/react-conditional-selection-75e7s?file=/src/App.js)

## Demo

[React Conditional Selection](https://react-conditional-select.vercel.app/)

## License

MIT

## Thanks to

To comparing this stuff I've been used [great library](https://github.com/protobi/query) written by Pieter Sheth-Voss.

Also thanks to Jad Watson for great [React Select](https://github.com/jedwatson/react-select).

And of course thaks to [React Team](https://reactjs.org/community/team.html) for React.
