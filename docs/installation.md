```bash
$ npm install $PACKAGE_NAME @rollup-umd/documentation --save-dev
```

Then create `styleguide.config.js`:

```js static
const { createConfig } = require('@rollup-umd/documentation');
module.exports = createConfig();
```

$PACKAGE_NAME will automatically be used by `@rollup-umd/documentation`.
