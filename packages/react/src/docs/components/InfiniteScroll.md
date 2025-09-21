# InfiniteScroll

English | [한국어](./InfiniteScroll_kr.md)

- A Component to create an infinite scrolling.

## Example

```tsx
<InfiniteScroll dataLength={10}>
  <div></div>
</InfiniteScroll>
```

## API(Props) Reference

| Name                       | Type                    | Required | Default | Description                                                                                                                                                                                                      |
| :------------------------- | :---------------------- | :------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onEndReached               | () => void              | false    | -       | Event called when you reach the bottom of the scroll area.(for pagination)                                                                                                                                       |
| hasMore                    | boolean                 | false    | false   | Whether to call the `onEndReached` event when reaching the bottom of the scroll area                                                                                                                             |
| loader                     | ReactNode               | false    | -       | Fallback UI components to show during data fetching                                                                                                                                                              |
| scrollThreshold            | number \| string        | false    | 0.8     | Thresholds that define when InfiniteScroll calls next                                                                                                                                                            |
| endMessage                 | ReactNode               | false    | -       | Message to show when you reach the bottom of the scroll area                                                                                                                                                     |
| height                     | number \| string        | false    | -       | the height of the component when you want to use fixed-height scrolling content.                                                                                                                                 |
| scrollableTarget           | ReactNode               | false    | -       | Reference to (parent) DOM elements that already provide overflow scrollbars to InfiniteScroll components. <br>- When you register an ID for a DOM element, the DOM element with that ID is used as a scroll area |
| hasChildren                | boolean                 | false    | -       | Whether there is a child element in the scroll area                                                                                                                                                              |
| inverse                    | boolean                 | false    | -       | Whether to set InfiniteScroll to the top                                                                                                                                                                         |
| pullDownToRefresh          | boolean                 | false    | -       | Whether to enable the refresh feature by pulling the screen down                                                                                                                                                 |
| pullDownToRefreshContent   | ReactNode               | false    | -       | the components that you want to show before the refresh starts.<br>(When using the refresh feature by pulling the screen down.)                                                                                  |
| releaseToRefreshContent    | ReactNode               | false    | -       | the components that you want to show after the refresh starts<br>(When using the refresh feature by pulling the screen down)                                                                                     |
| pullDownToRefreshThreshold | number                  | false    | -       | Minimum distance the user must pull to refresh.                                                                                                                                                                  |
| refreshFunction            | () => void              | false    | -       | Functions to call for reload                                                                                                                                                                                     |
| onScroll                   | (e: MouseEvent) => void | false    | -       | Functions called every time a scroll event occurs                                                                                                                                                                |
| dataLength                 | number                  | true     | -       | Data length in scroll area                                                                                                                                                                                       |
| initialScrollY             | number                  | false    | -       | Initial scroll position                                                                                                                                                                                          |
