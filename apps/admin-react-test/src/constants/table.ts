import { ColumnType, TableDataType } from '@fetoolkit/admin-react';
import { commaizeNumber } from '@fetoolkit/utils';

export type TestTableDataType = {
  name: string;
  dob: string;
  role: string;
  salary: number;
};

export type TestTableDataType1 = {
  name: string;
  birth: string;
  age: number;
  email: string;
};

export const testTableDatas: TableDataType<TestTableDataType>[] = [
  {
    key: '1',
    name: 'John',
    dob: '1990-01-01',
    role: 'Developer',
    salary: 100000,
  },
  {
    key: '2',
    name: 'Jane',
    dob: '1990-01-01',
    role: 'Developer',
    salary: 100000,
  },
  {
    key: '3',
    name: 'Jim',
    dob: '1990-01-01',
    role: 'Developer',
    salary: 100000,
  },
  {
    key: '4',
    name: 'Jill',
    dob: '1990-01-01',
    role: 'Developer',
    salary: 100000,
  },
];

export const defaultData: TestTableDataType = {
  name: '',
  dob: '',
  role: '',
  salary: 0,
};

export const tableColumns: ColumnType<TestTableDataType>[] = [
  {
    key: 'name',
    title: '이름',
  },
  {
    key: 'dob',
    title: '생년월일',
  },
  {
    key: 'role',
    title: '역할',
  },
  {
    key: 'salary',
    title: '급여',
    render: (item) => `$${commaizeNumber(item)}`,
  },
];

export const tableColumns1: ColumnType<TestTableDataType1>[] = [
  {
    key: 'name',
    title: '이름',
  },
  {
    key: 'birth',
    title: '생년월일',
  },
  {
    key: 'age',
    title: '나이',
  },
  {
    key: 'email',
    title: '이메일',
  },
];
