# Flatlist

[English](../en/component_flatlist.md) | 한국어

- 많은 양의 스크롤이 필요한 리스트 아이템을 보여주고자 할 때
  사용할 수 있는 컴포넌트입니다.
- React Native 개발 경험이 있으시다면 React Native에서 Flatlist라는 컴포넌트를 기본 제공하고 있다는 것을 아실 겁니다!!(그거와 동일한 컴포넌트입니다.)

## 기본 사용 예시

```tsx
<Flatlist
  datas={testDatas}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => <div>{item.name}</div>}
/>
```

## API(Props) 설명

| Name                       | Type                                          | Required | Default | Description                                                                                                                                                                                              |
| :------------------------- | :-------------------------------------------- | :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| datas                      | Array\<T>                                     | true     | -       | 렌더링할 컴포넌드들의 데이터 배열                                                                                                                                                                        |
| renderItem                 | (args: {item: T, index: number}) => ReactNode | true     | -       | 렌더링해서 보여줄 Item 컴포넌트                                                                                                                                                                          |
| keyExtractor               | (item: T, index: number) => string            | true     | -       | 아이템 컴포넌트들의 key props를 변환하는 메서드 <br>- 데이터 양이 많은 것을 전제로 하기 때문에 숫자 대신 문자열이 들어갑니다.<br>- 이 함수만 선언하면 renderItem에서 key props를 선언하지 않아도 됩니다. |
| ItemDeviderComponent       | () => ReactNode \| ReactNode                  | false    | -       | 각 아이템 컴포넌트 사이에 구분자 역할로 추가할 컴포넌트                                                                                                                                                  |
| onEndReached               | () => void                                    | false    | -       | 스크롤 영역 하단에 도달했을 때 호출하는 이벤트 <br>- 페이징을 위한 데이터 fetching에 사용                                                                                                                |
| hasMore                    | boolean                                       | false    | false   | 스크롤 영역 하단에 도달했을 때 `onEndReached` 이벤트를 호출할지 여부 결정                                                                                                                                |
| loader                     | ReactNode                                     | false    | -       | 다음 데이터를 fetching하는 동안 보여줄 fallback UI 컴포넌트                                                                                                                                              |
| scrollThreshold            | number \| string                              | false    | 0.8     | InfiniteScroll이 다음에 호출할 시점을 정의하는 임계값                                                                                                                                                    |
| endMessage                 | ReactNode                                     | false    | -       | 스크롤 영역 하단에 도달했을 때 보여줄 메시지                                                                                                                                                             |
| height                     | number \| string                              | false    | -       | 고정 높이 스크롤 컨텐츠를 사용하고 싶은 경우, 그 때 지정할 높이값                                                                                                                                        |
| scrollableTarget           | ReactNode                                     | false    | -       | InfiniteScroll 구성 요소에 오버플로 스크롤바를 이미 제공하고 있는 (부모) DOM 요소에 대한 참조 <br>- DOM 요소의 ID를 등록하면, 해당 ID를 가진 DOM 요소가 스크롤 영역으로 사용됨                           |
| hasChildren                | boolean                                       | false    | -       | 스크롤 영역에 자식 요소가 있는지 여부                                                                                                                                                                    |
| inverse                    | boolean                                       | false    | -       | InfiniteScroll을 최상단에 설정할지 여부                                                                                                                                                                  |
| pullDownToRefresh          | boolean                                       | false    | -       | 화면을 아래로 당려 새로 고침 기능을 활성화할지 여부                                                                                                                                                      |
| pullDownToRefreshContent   | ReactNode                                     | false    | -       | 화면을 아래로 당겨 새로 고침 기능을 사용할 때, 새로 고침이 시작되기 전에 보여줄 컴포넌트                                                                                                                 |
| releaseToRefreshContent    | ReactNode                                     | false    | -       | 화면을 아래로 당겨 새로 고침 기능을 사용할 때, 새로 고침이 시작된 후 보여줄 컴포넌트                                                                                                                     |
| pullDownToRefreshThreshold | number                                        | false    | -       | 사용자가 새로고침을 위해 당겨야 하는 최소 거리                                                                                                                                                           |
| refreshFunction            | () => void                                    | false    | -       | 새로고침을 위해 호출하는 함수                                                                                                                                                                            |
| onScroll                   | (e: MouseEvent) => void                       | false    | -       | 스크롤 이벤트가 발생할 때마다 호출되는 함수                                                                                                                                                              |
| dataLength                 | number                                        | false    | 0       | 스크롤 영역의 데이터 길이                                                                                                                                                                                |
| initialScrollY             | number                                        | false    | -       | 초기 스크롤 위치                                                                                                                                                                                         |
