export type TestTableDataType = {
  name: string;
  dob: string;
  role: string;
  salary: number;
};

export const testTableDatas: TestTableDataType[] = [
  { name: 'John', dob: '1990-01-01', role: 'Developer', salary: 100000 },
  { name: 'Jane', dob: '1990-01-01', role: 'Developer', salary: 100000 },
  { name: 'Jim', dob: '1990-01-01', role: 'Developer', salary: 100000 },
  { name: 'Jill', dob: '1990-01-01', role: 'Developer', salary: 100000 },
];

export const defaultData: TestTableDataType = {
  name: '',
  dob: '',
  role: '',
  salary: 0,
};
