# React Conditional Selection

===================

React Conditional Selection - useful way to build cascading selection with large amount of options and business rules.

# How it works

===================

Business rules are defined on almost every row of data and each time when selection object will change there is starting validation process.
Rules are defined using MongoDB syntax.

####Sample data object

```javascript
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
  }
```

Validation is fast and performance. It relies on comparing each option rule with current selection object.

####Sample selection object

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

===================
Copyright © Klaudiusz Marszałek
License: MITNFA
