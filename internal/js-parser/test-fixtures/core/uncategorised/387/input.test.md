# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 387`

### `ast`

```javascript
JSRoot {
	corrupt: true
	directives: Array []
	filename: "core/uncategorised/387/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "core/uncategorised/387/input.js"
		end: Object {
			column: 1
			line: 4
		}
		start: Object {
			column: 0
			line: 1
		}
	}
	comments: Array [
		CommentBlock {
			id: "0"
			value: " Some multiline\ncomment "
			loc: Object {
				filename: "core/uncategorised/387/input.js"
				end: Object {
					column: 10
					line: 3
				}
				start: Object {
					column: 0
					line: 2
				}
			}
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: MARKUP {
					parts: Array [
						RAW_MARKUP {value: "Unknown start to an "}
						"statement expression"
					]
				}
			}
			location: Object {
				filename: "core/uncategorised/387/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 0
					line: 1
				}
				start: Object {
					column: 0
					line: 4
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			leadingComments: Array ["0"]
			loc: Object {
				filename: "core/uncategorised/387/input.js"
				end: Object {
					column: 1
					line: 4
				}
				start: Object {
					column: 0
					line: 4
				}
			}
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				leadingComments: undefined
				loc: Object {
					filename: "core/uncategorised/387/input.js"
					end: Object {
						column: 1
						line: 4
					}
					start: Object {
						column: 0
						line: 4
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```

 core/uncategorised/387/input.js:4 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unknown start to an statement expression

    2 │ /* Some multiline
    3 │ comment */

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
