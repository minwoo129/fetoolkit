import { faker } from '@faker-js/faker';
import { TableDataType } from '@fetoolkit/admin-react';
import { TestTableDataType1 } from '../constants/table';

export const convertTestTableDatas1 = () => {
  const datas: TableDataType<TestTableDataType1>[] = [];

  for (let i = 0; i < 100; i++) {
    datas.push({
      name: faker.person.fullName(),
      birth: faker.date.birthdate().toISOString().slice(0, 10),
      age: faker.number.int(100),
      email: faker.internet.email(),
      key: i.toString(),
    });
  }

  return datas;
};
