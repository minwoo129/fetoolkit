# Flatlist

English | [한국어](../ko/component_flatlist.md)

- A component that can be used to show a list item that requires a large amount of scrolling.
- If you have a experience of React Native Development, you will understand.(it's a same component)

## Example

```tsx
<Flatlist
  datas={testDatas}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => <div>{item.name}</div>}
/>
```

## API(Props) Reference

| Name                       | Type                                          | Required | Default | Description                                                                                                                                                                                                      |
| :------------------------- | :-------------------------------------------- | :------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| datas                      | Array\<T>                                     | true     | -       | An array (or array-like list) of items to render.                                                                                                                                                                |
| renderItem                 | (args: {item: T, index: number}) => ReactNode | true     | -       | Takes an item from data and renders it into the list.                                                                                                                                                            |
| keyExtractor               | (item: T, index: number) => string            | true     | -       | Used to extract a unique key for a given item at the specified index.<br>- You do not need to declare a separate key prop in renderItem.                                                                         |
| ItemDeviderComponent       | () => ReactNode \| ReactNode                  | false    | -       | Distinguish between each item component.                                                                                                                                                                         |
| onEndReached               | () => void                                    | false    | -       | Event called when you reach the bottom of the scroll area.(for pagination)                                                                                                                                       |
| hasMore                    | boolean                                       | false    | false   | Whether to call the `onEndReached` event when reaching the bottom of the scroll area                                                                                                                             |
| loader                     | ReactNode                                     | false    | -       | Fallback UI components to show during data fetching                                                                                                                                                              |
| scrollThreshold            | number \| string                              | false    | 0.8     | Thresholds that define when InfiniteScroll calls next                                                                                                                                                            |
| endMessage                 | ReactNode                                     | false    | -       | Message to show when you reach the bottom of the scroll area                                                                                                                                                     |
| height                     | number \| string                              | false    | -       | the height of the component when you want to use fixed-height scrolling content.                                                                                                                                 |
| scrollableTarget           | ReactNode                                     | false    | -       | Reference to (parent) DOM elements that already provide overflow scrollbars to InfiniteScroll components. <br>- When you register an ID for a DOM element, the DOM element with that ID is used as a scroll area |
| hasChildren                | boolean                                       | false    | -       | Whether there is a child element in the scroll area                                                                                                                                                              |
| inverse                    | boolean                                       | false    | -       | Whether to set InfiniteScroll to the top                                                                                                                                                                         |
| pullDownToRefresh          | boolean                                       | false    | -       | Whether to enable the refresh feature by pulling the screen down                                                                                                                                                 |
| pullDownToRefreshContent   | ReactNode                                     | false    | -       | the components that you want to show before the refresh starts.<br>(When using the refresh feature by pulling the screen down.)                                                                                  |
| releaseToRefreshContent    | ReactNode                                     | false    | -       | the components that you want to show after the refresh starts<br>(When using the refresh feature by pulling the screen down)                                                                                     |
| pullDownToRefreshThreshold | number                                        | false    | -       | Minimum distance the user must pull to refresh.                                                                                                                                                                  |
| refreshFunction            | () => void                                    | false    | -       | Functions to call for reload                                                                                                                                                                                     |
| onScroll                   | (e: MouseEvent) => void                       | false    | -       | Functions called every time a scroll event occurs                                                                                                                                                                |
| dataLength                 | number                                        | false    | 0       | Data length in scroll area                                                                                                                                                                                       |
| initialScrollY             | number                                        | false    | -       | Initial scroll position                                                                                                                                                                                          |
