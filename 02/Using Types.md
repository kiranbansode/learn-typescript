# Using Types

## Core Types

| Types     | Examples            | Details                                                                            |
| --------- | ------------------- | ---------------------------------------------------------------------------------- |
| `number`  | 1, 5.3, -10         | All numbers, no differentiation between integers or floats                         |
| `string`  | 'Hi', "Hi", \`Hi\`  | All text values                                                                    |
| `boolean` | true, false         | Just these two, no "truthy" or "falsy" values                                      |
| `object`  | {age: 30}           | Any JavaScript object, more specific types (type of object) are possible           |
| `Array`   | [1, 2, 3]           | Any JavaScript array, type can be flexible or strict (regarding the element types) |
| `Tuple`   | [1, 2]              | Added by TypeScript: Fixed-length array                                            |
| `Enum`    | enum{AUTHOR, ADMIN} | Added by TypeScript: Automatically enumerated global constant identifiers          |
| `Any`     | \*                  | Any kind of value, no specific type assignment                                     |

> TypeScript type system only helps you during development(i.e. before the code gets compiled)
