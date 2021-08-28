const data = {
  ENGINEVERSIONS: {
    code: 'ENGINEVERSIONS',
    name: 'Engine type',
    options: [
      { code: 'GASOLINE', name: 'Gasoline', default: null, rules: null },
      { code: 'ELECTRIC', name: 'Electric', default: null, rules: null },
      { code: 'HYDROGEN', name: 'Hydrogen', default: null, rules: null },
    ],
    category: { name: 'Technical Data', code: 'TECHNICAL' },
    isVisible: true,
    isRequired: true,
    rules: null,
  },
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
  EQUIPMENTLINE: {
    code: 'EQUIPMENTLINE',
    name: 'Equipment line',
    options: [
      { code: 'AMG', name: 'AMG', default: null, rules: null },
      { code: 'AMGPLUS', name: 'AMG Plus', default: null, rules: null },
    ],
    category: { name: 'Interior', code: 'INTERIOR' },
    isVisible: true,
    isRequired: true,
    rules: null,
  },
  EQUIPMENTPACKAGE: {
    code: 'EQUIPMENTPACKAGE',
    name: 'Equipment package',
    options: [
      {
        code: '1',
        name: 'Basic',
        default: null,
        rules: { EQUIPMENTLINE: 'AMG' },
      },
      {
        code: '2',
        name: 'Basic Plus',
        default: null,
        rules: { EQUIPMENTLINE: 'AMG' },
      },
      {
        code: '3',
        name: 'Advantage',
        default: null,
        rules: { EQUIPMENTLINE: 'AMGPLUS' },
      },
      {
        code: '4',
        name: 'Advantage Premium',
        default: null,
        rules: { EQUIPMENTLINE: 'AMGPLUS' },
      },
      {
        code: '5',
        name: 'Advantage Plus',
        default: null,
        rules: { EQUIPMENTLINE: 'AMGPLUS' },
      },
      {
        code: '6',
        name: 'Advantage Pro',
        default: null,
        rules: { EQUIPMENTLINE: 'AMGPLUS' },
      },
    ],
    category: { name: 'Interior', code: 'INTERIOR' },
    isVisible: true,
    isRequired: true,
    rules: null,
  },
  UPHLOSTERYGROUP: {
    code: 'UPHLOSTERYGROUP',
    name: 'Upholstery group',
    options: [
      {
        code: 'BON',
        name: 'Bonder',
        default: null,
        rules: { EQUIPMENTPACKAGE: '1' },
      },
      {
        code: 'CSE',
        name: 'Cemenes',
        default: null,
        rules: { EQUIPMENTPACKAGE: '1' },
      },
      {
        code: 'KN',
        name: 'Kenya',
        default: null,
        rules: { EQUIPMENTPACKAGE: '1' },
      },
      {
        code: 'YB',
        name: 'Yemane',
        default: null,
        rules: { EQUIPMENTPACKAGE: '1' },
      },
      {
        code: 'OL',
        name: 'Opamel',
        default: null,
        rules: { EQUIPMENTPACKAGE: '1' },
      },
      {
        code: 'SM',
        name: 'Sumanem',
        default: null,
        rules: { EQUIPMENTPACKAGE: '1' },
      },
      {
        code: 'FLG',
        name: 'Feluag',
        default: null,
        rules: { EQUIPMENTPACKAGE: '2' },
      },
      {
        code: 'RD',
        name: 'Reduan',
        default: null,
        rules: { EQUIPMENTPACKAGE: '2' },
      },
      {
        code: 'VL',
        name: 'Venelu',
        default: null,
        rules: { EQUIPMENTPACKAGE: '2' },
      },
      {
        code: 'EGL',
        name: 'Energe',
        default: null,
        rules: { EQUIPMENTPACKAGE: '2' },
      },
      {
        code: 'XR',
        name: 'Xantar',
        default: null,
        rules: { EQUIPMENTPACKAGE: '2' },
      },
      {
        code: 'RN',
        name: 'Ruaben',
        default: null,
        rules: { EQUIPMENTPACKAGE: '3' },
      },
      {
        code: 'SX',
        name: 'Suhanux',
        default: null,
        rules: { EQUIPMENTPACKAGE: '3' },
      },
      {
        code: 'ST',
        name: 'Setumeg',
        default: null,
        rules: { EQUIPMENTPACKAGE: '3' },
      },
      {
        code: 'CUZ',
        name: 'Centugamez',
        default: null,
        rules: { EQUIPMENTPACKAGE: '4' },
      },
      {
        code: 'F',
        name: 'Fumeratu',
        default: null,
        rules: { EQUIPMENTPACKAGE: '4' },
      },
      {
        code: 'SY',
        name: 'Lemaneud',
        default: null,
        rules: { EQUIPMENTPACKAGE: '4' },
      },
      {
        code: 'RAX',
        name: 'Raxer',
        default: null,
        rules: { EQUIPMENTPACKAGE: '5' },
      },
      {
        code: 'SD',
        name: 'Sogamud',
        default: null,
        rules: { EQUIPMENTPACKAGE: '5' },
      },
      {
        code: 'LE',
        name: 'Legamud',
        default: null,
        rules: { EQUIPMENTPACKAGE: '5' },
      },
      {
        code: 'NAPPA',
        name: 'Comade Uma',
        default: null,
        rules: { EQUIPMENTPACKAGE: '6' },
      },
    ],
    category: { name: 'Interior', code: 'INTERIOR' },
    isVisible: true,
    isRequired: false,
    rules: null,
  },
  UPHLOSTERYINTERIOR: {
    code: 'UPHLOSTERYINTERIOR',
    name: 'Interior upholstery color',
    options: [
      {
        code: 'RAX123',
        name: 'RAX123',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'RAX' }, { EQUIPMENTPACKAGE: '5' }],
        },
      },
      {
        code: 'RAX143',
        name: 'RAX143',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'RAX' }, { EQUIPMENTPACKAGE: '5' }],
        },
      },
      {
        code: 'RAX163',
        name: 'RAX163',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'RAX' }, { EQUIPMENTPACKAGE: '5' }],
        },
      },
      {
        code: 'LDS56',
        name: 'LDS56',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'SY' }, { EQUIPMENTPACKAGE: '4' }],
        },
      },
      {
        code: 'LDS55',
        name: 'LDS55',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'SY' }, { EQUIPMENTPACKAGE: '4' }],
        },
      },
      {
        code: 'LDS47',
        name: 'LDS47',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'SY' }, { EQUIPMENTPACKAGE: '4' }],
        },
      },
      {
        code: 'F80',
        name: 'F66130 (F80)',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'F' }, { EQUIPMENTPACKAGE: '4' }],
        },
      },
      {
        code: 'F40',
        name: 'F66005 (F40)',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'F' }, { EQUIPMENTPACKAGE: '4' }],
        },
      },
      {
        code: 'F49',
        name: 'F68146 (F49)',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'F' }, { EQUIPMENTPACKAGE: '4' }],
        },
      },
      {
        code: 'CUZ58',
        name: 'CUZ58',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'CUZ' }, { EQUIPMENTPACKAGE: '4' }],
        },
      },
      {
        code: 'CUZ21',
        name: 'CUZ21',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'CUZ' }, { EQUIPMENTPACKAGE: '4' }],
        },
      },
      {
        code: 'CUZ1W',
        name: 'CUZ1W',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'CUZ' }, { EQUIPMENTPACKAGE: '4' }],
        },
      },
      {
        code: 'STMG67004',
        name: 'STMG67004',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'ST' }, { EQUIPMENTPACKAGE: '3' }],
        },
      },
      {
        code: 'STG67004',
        name: 'STG67004',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'ST' }, { EQUIPMENTPACKAGE: '3' }],
        },
      },
      {
        code: 'STG66018',
        name: 'STG66018',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'ST' }, { EQUIPMENTPACKAGE: '3' }],
        },
      },
      {
        code: 'SX2016',
        name: 'SX2016',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'SX' }, { EQUIPMENTPACKAGE: '3' }],
        },
      },
      {
        code: 'SX3066',
        name: 'SX3066',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'SX' }, { EQUIPMENTPACKAGE: '3' }],
        },
      },
      {
        code: 'SX3007',
        name: 'SX3007',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'SX' }, { EQUIPMENTPACKAGE: '3' }],
        },
      },
      {
        code: 'RN65078',
        name: 'RN65078',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'RN' }, { EQUIPMENTPACKAGE: '3' }],
        },
      },
      {
        code: 'RN66064',
        name: 'RN66064',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'RN' }, { EQUIPMENTPACKAGE: '3' }],
        },
      },
      {
        code: 'RN66140',
        name: 'RN66140',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'RN' }, { EQUIPMENTPACKAGE: '3' }],
        },
      },
      {
        code: 'XR047',
        name: 'XR047',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'XR' }, { EQUIPMENTPACKAGE: '2' }],
        },
      },
      {
        code: 'XR102',
        name: 'XR102',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'XR' }, { EQUIPMENTPACKAGE: '2' }],
        },
      },
      {
        code: 'XR095',
        name: 'XR095',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'XR' }, { EQUIPMENTPACKAGE: '2' }],
        },
      },
      {
        code: 'VL7001',
        name: 'VL7001',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'VL' }, { EQUIPMENTPACKAGE: '2' }],
        },
      },
      {
        code: 'VL3069',
        name: 'VL3069',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'VL' }, { EQUIPMENTPACKAGE: '2' }],
        },
      },
      {
        code: 'VL3067',
        name: 'VL3067',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'VL' }, { EQUIPMENTPACKAGE: '2' }],
        },
      },
      {
        code: 'RDF6075',
        name: 'RDF6075',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'RD' }, { EQUIPMENTPACKAGE: '2' }],
        },
      },
      {
        code: 'RDXF6575',
        name: 'RDXF6575',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'RD' }, { EQUIPMENTPACKAGE: '2' }],
        },
      },
      {
        code: 'RDF7008',
        name: 'RDF7008',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'RD' }, { EQUIPMENTPACKAGE: '2' }],
        },
      },
      {
        code: 'FLG66161',
        name: 'FLG66161',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'FLG' }, { EQUIPMENTPACKAGE: '2' }],
        },
      },
      {
        code: 'FLG67079',
        name: 'FLG67079',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'FLG' }, { EQUIPMENTPACKAGE: '2' }],
        },
      },
      {
        code: 'FLG67083',
        name: 'FLG67083',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'FLG' }, { EQUIPMENTPACKAGE: '2' }],
        },
      },
      {
        code: 'SMM03',
        name: 'SMM03',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'SM' }, { EQUIPMENTPACKAGE: '1' }],
        },
      },
      {
        code: 'SM07',
        name: 'SM07',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'SM' }, { EQUIPMENTPACKAGE: '1' }],
        },
      },
      {
        code: 'SM08',
        name: 'SM08',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'SM' }, { EQUIPMENTPACKAGE: '1' }],
        },
      },
      {
        code: 'OL06',
        name: 'OL06',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'OL' }, { EQUIPMENTPACKAGE: '1' }],
        },
      },
      {
        code: 'OL01',
        name: 'OL01',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'OL' }, { EQUIPMENTPACKAGE: '1' }],
        },
      },
      {
        code: 'OL03',
        name: 'OL03',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'OL' }, { EQUIPMENTPACKAGE: '1' }],
        },
      },
      {
        code: 'YB096',
        name: 'YB096',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'YB' }, { EQUIPMENTPACKAGE: '1' }],
        },
      },
      {
        code: 'YB011',
        name: 'YB011',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'YB' }, { EQUIPMENTPACKAGE: '1' }],
        },
      },
      {
        code: 'YB038',
        name: 'YB038',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'YB' }, { EQUIPMENTPACKAGE: '1' }],
        },
      },
      {
        code: 'KN49',
        name: 'KN49',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'KN' }, { EQUIPMENTPACKAGE: '1' }],
        },
      },
      {
        code: 'KN429',
        name: 'KN429',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'KN' }, { EQUIPMENTPACKAGE: '1' }],
        },
      },
      {
        code: 'KN143',
        name: 'KN143',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'KN' }, { EQUIPMENTPACKAGE: '1' }],
        },
      },
      {
        code: 'CSE10',
        name: 'CSE10',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'CSE' }, { EQUIPMENTPACKAGE: '1' }],
        },
      },
      {
        code: 'CSE20',
        name: 'CSE20',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'CSE' }, { EQUIPMENTPACKAGE: '1' }],
        },
      },
      {
        code: 'CSE16',
        name: 'CSE16',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'CSE' }, { EQUIPMENTPACKAGE: '1' }],
        },
      },
      {
        code: 'BON6006',
        name: 'BON6006',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'BON' }, { EQUIPMENTPACKAGE: '1' }],
        },
      },
      {
        code: 'BON6016',
        name: 'BON6016',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'BON' }, { EQUIPMENTPACKAGE: '1' }],
        },
      },
      {
        code: 'BON6003',
        name: 'BON6003',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'BON' }, { EQUIPMENTPACKAGE: '1' }],
        },
      },
      {
        code: 'SD06',
        name: 'SD06',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'SD' }, { EQUIPMENTPACKAGE: '5' }],
        },
      },
      {
        code: 'SD01',
        name: 'SD01',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'SD' }, { EQUIPMENTPACKAGE: '5' }],
        },
      },
      {
        code: 'SD19',
        name: 'SD19',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'SD' }, { EQUIPMENTPACKAGE: '5' }],
        },
      },
      {
        code: 'LE06',
        name: 'LE06',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'LE' }, { EQUIPMENTPACKAGE: '5' }],
        },
      },
      {
        code: 'LE01',
        name: 'LE01',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'LE' }, { EQUIPMENTPACKAGE: '5' }],
        },
      },
      {
        code: 'NAP49261',
        name: 'NAP 49261',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'NAPPA' }, { EQUIPMENTPACKAGE: '6' }],
        },
      },
      {
        code: 'NAP76061',
        name: 'NAP 76061',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'NAPPA' }, { EQUIPMENTPACKAGE: '6' }],
        },
      },
      {
        code: 'NAP77338',
        name: 'NAP 77338',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'NAPPA' }, { EQUIPMENTPACKAGE: '6' }],
        },
      },
      {
        code: 'EGL01',
        name: 'EGL01',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'EGL' }, { EQUIPMENTPACKAGE: '2' }],
        },
      },
      {
        code: 'EGL05',
        name: 'EGL05',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'EGL' }, { EQUIPMENTPACKAGE: '2' }],
        },
      },
      {
        code: 'EGL12',
        name: 'EGL12',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'EGL' }, { EQUIPMENTPACKAGE: '2' }],
        },
      },
    ],
    category: { name: 'Interior', code: 'INTERIOR' },
    isVisible: true,
    isRequired: false,
    rules: null,
  },
  AIRBAGS: {
    code: 'AIRBAGS',
    name: 'Airbags',
    options: [
      {
        code: 'DRIVER',
        name: 'Driver Airbag',
        default: null,
        rules: { EQUIPMENTPACKAGE: { $in: ['1', '2'] } },
      },
      {
        code: 'FRONT',
        name: 'Front Airbags',
        default: null,
        rules: { EQUIPMENTPACKAGE: { $in: ['1', '2'] } },
      },
      {
        code: 'FRONTSIDE',
        name: 'Front and Side Airbags',
        default: null,
        rules: { EQUIPMENTPACKAGE: { $in: ['3', '4'] } },
      },
      {
        code: 'MORE',
        name: 'Front and Side and More Airbags',
        default: null,
        rules: { EQUIPMENTPACKAGE: { $in: ['5', '6'] } },
      },
    ],
    category: { name: 'Interior', code: 'INTERIOR' },
    isVisible: true,
    isRequired: false,
    rules: null,
  },
  UPHLOSTERYSEAT: {
    code: 'UPHLOSTERYSEAT',
    name: 'Seats upholstery color',
    options: [
      {
        code: 'LDS56',
        name: 'LDS56',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'SY' }, { EQUIPMENTPACKAGE: '4' }],
        },
      },
      {
        code: 'LDS55',
        name: 'LDS55',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'SY' }, { EQUIPMENTPACKAGE: '4' }],
        },
      },
      {
        code: 'LDS47',
        name: 'LDS47',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'SY' }, { EQUIPMENTPACKAGE: '4' }],
        },
      },
      {
        code: 'F80',
        name: 'F66130 (F80)',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'F' }, { EQUIPMENTPACKAGE: '4' }],
        },
      },
      {
        code: 'F40',
        name: 'F66005 (F40)',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'F' }, { EQUIPMENTPACKAGE: '4' }],
        },
      },
      {
        code: 'F49',
        name: 'F68146 (F49)',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'F' }, { EQUIPMENTPACKAGE: '4' }],
        },
      },
      {
        code: 'CUZ58',
        name: 'CUZ58',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'CUZ' }, { EQUIPMENTPACKAGE: '4' }],
        },
      },
      {
        code: 'CUZ21',
        name: 'CUZ21',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'CUZ' }, { EQUIPMENTPACKAGE: '4' }],
        },
      },
      {
        code: 'CUZ1W',
        name: 'CUZ1W',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'CUZ' }, { EQUIPMENTPACKAGE: '4' }],
        },
      },
      {
        code: 'STMG67004',
        name: 'STMG67004',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'ST' }, { EQUIPMENTPACKAGE: '3' }],
        },
      },
      {
        code: 'STG67004',
        name: 'STG67004',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'ST' }, { EQUIPMENTPACKAGE: '3' }],
        },
      },
      {
        code: 'STG66018',
        name: 'STG66018',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'ST' }, { EQUIPMENTPACKAGE: '3' }],
        },
      },
      {
        code: 'SX2016',
        name: 'SX2016',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'SX' }, { EQUIPMENTPACKAGE: '3' }],
        },
      },
      {
        code: 'SX3066',
        name: 'SX3066',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'SX' }, { EQUIPMENTPACKAGE: '3' }],
        },
      },
      {
        code: 'SX3007',
        name: 'SX3007',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'SX' }, { EQUIPMENTPACKAGE: '3' }],
        },
      },
      {
        code: 'RN65078',
        name: 'RN65078',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'RN' }, { EQUIPMENTPACKAGE: '3' }],
        },
      },
      {
        code: 'RN66064',
        name: 'RN66064',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'RN' }, { EQUIPMENTPACKAGE: '3' }],
        },
      },
      {
        code: 'RN66140',
        name: 'RN66140',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'RN' }, { EQUIPMENTPACKAGE: '3' }],
        },
      },
      {
        code: 'SD06',
        name: 'SD06',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'SD' }, { EQUIPMENTPACKAGE: '5' }],
        },
      },
      {
        code: 'SD01',
        name: 'SD01',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'SD' }, { EQUIPMENTPACKAGE: '5' }],
        },
      },
      {
        code: 'SD19',
        name: 'SD19',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'SD' }, { EQUIPMENTPACKAGE: '5' }],
        },
      },
      {
        code: 'LE06',
        name: 'LE06',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'LE' }, { EQUIPMENTPACKAGE: '5' }],
        },
      },
      {
        code: 'LE01',
        name: 'LE01',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'LE' }, { EQUIPMENTPACKAGE: '5' }],
        },
      },
      {
        code: 'NAP49261',
        name: 'NAP 49261',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'NAPPA' }, { EQUIPMENTPACKAGE: '6' }],
        },
      },
      {
        code: 'NAP76061',
        name: 'NAP 76061',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'NAPPA' }, { EQUIPMENTPACKAGE: '6' }],
        },
      },
      {
        code: 'NAP77338',
        name: 'NAP 77338',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'NAPPA' }, { EQUIPMENTPACKAGE: '6' }],
        },
      },
      {
        code: 'EGL01',
        name: 'EGL01',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'EGL' }, { EQUIPMENTPACKAGE: '2' }],
        },
      },
      {
        code: 'EGL05',
        name: 'EGL05',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'EGL' }, { EQUIPMENTPACKAGE: '2' }],
        },
      },
      {
        code: 'EGL12',
        name: 'EGL12',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'EGL' }, { EQUIPMENTPACKAGE: '2' }],
        },
      },
      {
        code: 'RAX123',
        name: 'RAX123',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'RAX' }, { EQUIPMENTPACKAGE: '5' }],
        },
      },
      {
        code: 'RAX143',
        name: 'RAX143',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'RAX' }, { EQUIPMENTPACKAGE: '5' }],
        },
      },
      {
        code: 'RAX163',
        name: 'RAX163',
        default: null,
        rules: {
          $and: [{ UPHLOSTERYGROUP: 'RAX' }, { EQUIPMENTPACKAGE: '5' }],
        },
      },
    ],
    category: { name: 'AMG Plus', code: 'AMGPLUS' },
    isVisible: true,
    isRequired: false,
    rules: { EQUIPMENTLINE: 'AMGPLUS' },
  },
};

export default data;
