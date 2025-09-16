import { Flatlist } from '@fetoolkit/react';
import React, { useState } from 'react';
import { initDatas, TestDataType } from '../constants/flatlist';

const FlatlistTestPage = () => {
  const [datas] = useState<TestDataType[]>(initDatas);

  return (
    <div>
      <Flatlist
        datas={datas}
        keyExtractor={(item) => item.id}
        data-testId="flatlist"
        renderItem={({ item }) => {
          return (
            <div>
              <h1>{item.name}</h1>
              <p>{item.age}</p>
              <p>{item.email}</p>
              <p>{item.phone}</p>
            </div>
          );
        }}
      />
    </div>
  );
};

export default FlatlistTestPage;
