import { useContextMenu } from '@fetoolkit/react/src';
import { useEffect, useMemo, useState } from 'react';

const ContextMenuTestPage = () => {
  const { contextMenuHandler, onClickedContextMenuItem } = useContextMenu();
  const [data, setData] = useState<{
    elementId: string | number | null;
    value: string;
  } | null>(null);

  useEffect(() => {
    const unsubscribe = onClickedContextMenuItem((data) => {
      console.log('clickedData: ', data);
      setData(data);
    });
    return () => {
      unsubscribe();
    };
  }, [onClickedContextMenuItem]);
  const testArr = useMemo(() => {
    return [
      'test1',
      'test2',
      'test3',
      'test4',
      'test5',
      'test6',
      'test7',
      'test8',
      'test9',
      'test10',
    ];
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', border: '1px solid red' }}>
      {testArr.map((item, idx) => {
        return (
          <div
            key={idx}
            style={{ width: '100%', border: '1px solid blue' }}
            onContextMenu={(e) => {
              contextMenuHandler({
                elementId: 'test-124',
                event: e,
                buttonDatas: [
                  {
                    label: 'test',
                    value: 'test',
                  },
                  {
                    label: 'test1',
                    value: 'test1',
                  },
                  {
                    label: 'test2',
                    value: 'test2',
                  },
                  {
                    label: 'test3',
                    value: 'test3',
                  },
                ],
              });
            }}
          >
            {item}
          </div>
        );
      })}
      {data && <h1 data-testid="data-result-test">{JSON.stringify(data)}</h1>}
      {/* {visible && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid green',
          }}
          onClick={() => setVisible(!visible)}
        >
          <ContextMenuTest x={locate.x} y={locate.y} />
        </div>
      )} */}
    </div>
  );
};

export default ContextMenuTestPage;
