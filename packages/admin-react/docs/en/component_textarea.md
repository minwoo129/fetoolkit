# TextArea

English | [한국어](../ko/component_textarea.md)

- This component is created for text area used in admin pages.
- Provides basic text area and layout with buttons included.

## Example

```tsx
// Basic text area usage
<AdminTextArea
  placeholder="Enter content"
  rows={5}
/>

// Layout with buttons usage
<AdminTextAreaFeaturedLayout
  buttons={[
    { type: 'clear', title: 'Clear', onClick: handleClear },
    { type: 'save', title: 'Save', onClick: handleSave },
    { type: 'delete', title: 'Delete', onClick: handleDelete }
  ]}
>
  <AdminTextArea placeholder="Enter content" />
</AdminTextAreaFeaturedLayout>
```

## API(Props) Reference

### AdminTextArea

| Name                         | Type                | Required | Default | Description                                          |
| :--------------------------- | :------------------ | :------- | :------ | :--------------------------------------------------- |
| className                    | string              | false    | -       | CSS class name                                       |
| style                        | React.CSSProperties | false    | -       | Style declaration <br> - Same as React `style` props |
| 이하: TextareaHTMLAttributes |                     |          |         | Supports all attributes of HTML textarea element     |

### AdminTextAreaFeaturedLayout

| Name      | Type                       | Required | Default | Description                                            |
| :-------- | :------------------------- | :------- | :------ | :----------------------------------------------------- |
| className | string                     | false    | -       | CSS class name                                         |
| style     | React.CSSProperties        | false    | -       | Style declaration <br> - Same as React `style` props   |
| buttons   | FeaturedLayoutButtonType[] | true     | -       | Array of buttons to display at the bottom of text area |
| children  | React.ReactNode            | true     | -       | Text area component                                    |

### Types

#### FeaturedLayoutButtonType

| Name    | Type                          | Required | Default | Description                                                                                  |
| :------ | :---------------------------- | :------- | :------ | :------------------------------------------------------------------------------------------- |
| type    | 'clear' \| 'save' \| 'delete' | true     | -       | Button type <br> - clear: Clear button <br> - save: Save button <br> - delete: Delete button |
| title   | string                        | true     | -       | Text to display on button                                                                    |
| onClick | () => void                    | false    | -       | Button click event method                                                                    |
