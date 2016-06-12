# nci-express
express plugin for [nci](https://github.com/node-ci/nci)
to simplify http related plugins development


## Installation

```sh
npm install nci-express
```

## Usage

Add this plugin to the `plugins` section at server config before any plugin that using it.
```yml
plugins:
    - nci-express
    - nci-plugin-with-express
```

Add this plugin to `peerDependencies` at your plugin package.json

Just use `app.httpApp` as express instance
```js
exports.register = function(app) {
	app.httpApp.get('/some/route', function(req, res) {
		res.json({ok: true})
	});
};
```

## License

[The MIT License](https://raw.githubusercontent.com/fleg/nci-express/master/LICENSE)
