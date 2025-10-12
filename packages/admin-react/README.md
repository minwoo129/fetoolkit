# FEToolkit/Admin-React

![](https://fejumvuajiwc28287693.gcdn.ntruss.com/fetoolkit/fetoolkit_thumbnail.png)
(This thumbnail was created by Chat GPT)

English | [한국어](./README_kr.md)

This project is a package that provides components, hooks, and utility functions useful for Admin (administrator page) development. You can use it effectively when developing administrator pages in a React environment.

> ### Notice
>
> This version is currently distributed for alpha and beta testing purposes. There may be unstable features, so please do not install before the official release!!!

## Dependencies

- react: 19 or higher
- classnames: 2 or higher
- uuid: 13 or higher

## Getting Started

### 1. Installation

- npm
  ```
  npm i @fetoolkit/admin-react
  ```
- yarn
  ```
  yarn add @fetoolkit/admin-react
  ```
- pnpm
  ```
  pnpm add @fetoolkit/admin-react
  ```

#### 1-1. Additional Required Packages

- npm
  ```
  npm i classnames uuid
  ```
- yarn
  ```
  yarn add classnames uuid
  ```
- pnpm
  ```
  pnpm add classnames uuid
  ```

### 2. Basic Usage

```tsx
import { AdminTable, AdminInput, AdminSwitch } from '@fetoolkit/admin-react';

function App() {
  return (
    <div>
      <AdminInput placeholder="Enter text" />
      <AdminSwitch />
      <AdminTable columns={columns} data={data} />
    </div>
  );
}
```

## Features

### 3-1. Components

| Name                   | Description                                         |                           Docs                           |
| :--------------------- | :-------------------------------------------------- | :------------------------------------------------------: |
| AdminTable             | Data table component (supports sorting, pagination) |      [Documentation](./docs/en/component_table.md)       |
| AdminInput             | Basic input field component                         |      [Documentation](./docs/en/component_input.md)       |
| AdminTextArea          | Text area component                                 |     [Documentation](./docs/en/component_textarea.md)     |
| AdminInputLabelBasic   | Input field label component                         | [Documentation](./docs/en/component_inputlabel_basic.md) |
| AdminCheckbox          | Checkbox component                                  |     [Documentation](./docs/en/component_checkbox.md)     |
| AdminRadio             | Radio button component                              |      [Documentation](./docs/en/component_radio.md)       |
| AdminSwitch            | Switch toggle component                             |      [Documentation](./docs/en/component_switch.md)      |
| AdminDropdown          | Dropdown selection component                        |     [Documentation](./docs/en/component_dropdown.md)     |
| AdminPagination        | Pagination component                                |    [Documentation](./docs/en/component_pagination.md)    |
| AdminRouteMenuTemplate | Menu template component                             |   [Documentation](./docs/en/component_menutemplate.md)   |

### 3-2. Hooks

| Name     | Description                 |                    Docs                     |
| :------- | :-------------------------- | :-----------------------------------------: |
| useTable | Table state management hook | [Documentation](./docs/en/hook_useTable.md) |

### 3-3. Utility Functions

| Name              | Description                   |     Docs      |
| :---------------- | :---------------------------- | :-----------: |
| convertTableDatas | Table data conversion utility | Documentation |
