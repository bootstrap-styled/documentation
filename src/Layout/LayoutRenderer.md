## Use your own

You can use your own `<LayoutRenderer />` within every projects that use $PACKAGE_NAME.

If you create one in your project under `styleguide/components/LayoutRenderer.js`, it will be automatically picked instead of ours by our configuration.

For examples, you can override the logo with your own by creating in your project:

```js static
const LayoutRendererOriginal = require('rollup-documentation/lib/components/LayoutRenderer');
const logo = require('./yourLogo');
export default (props) => <LayoutRendererOriginal {...props} logo={logo} />
```

It is also possible to rewrite it entirely.
