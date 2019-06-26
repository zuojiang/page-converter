page-converter
===

Convert the number of pages to the index of records.

Usage
---

```js
const { calculateStart } = require('page-converter')
calculateStart(1, 10) // 0
```

API
---

* `calculateStart(pageNumber, size)` Calculate the index of records.
* `calculatePageNumber(start, offset)` Calculate the number of pages.
* `calculateTotalPage(total, offset)` Calculate the total page.

License
---

MIT
