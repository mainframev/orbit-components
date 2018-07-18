# Text
To implement Text component into your project you'll need to add the import:
```jsx
import Text from "@kiwicom/orbit-components/lib/Text";
```
After adding import into your project you can use it simply like:
```jsx
<Text>Hello World!</Text>
```
## Props
Table below contains all types of the props available in the Text component.

| Name       | Type            | Default     | Description                      |
| :--------- | :-------------- | :---------- | :------------------------------- |
| align      | [`enum`](#enum) | `"left"`    | The align of the Text.
| children   | `React.Node`    |             | The content of the Text.
| element    | [`enum`](#enum) | `"p"`       | The element used for the root node.
| italic     | `boolean`       | `false`     | If `true`, the Text will be in italic style.
| **size**   | [`enum`](#enum) | `"normal"`  | The size of the Text.
| **type**   | [`enum`](#enum) | `"primary"` | The color type of the Text.
| uppercase  | `boolean`       | `false`     | If `true`, the Text will be in uppercase style.
| **weight** | [`enum`](#enum) | `"regular"` | The weight of the Text.

### enum

| type            | align      | element  | size       | weight      |
| :-------------- | :--------- | :------- | :--------- | :---------- |
| `"attention"`   | `"left"`   | `"p"`    | `"small"`  | `"regular"` |
| `"primary"`     | `"center"` | `"span"` | `"normal"` | `"bold"`    |
| `"secondary"`   | `"right"`  | `"div"`  | `"large"`  |             |
| `"info"`        |            |          |            |             |
| `"success"`     |            |          |            |             |
| `"warning"`     |            |          |            |             |
| `"critical"`    |            |          |            |             |
| `"white"`       |            |          |            |             |
