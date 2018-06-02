# Issue

After retrieving latest version of `scope-chains-closures`, it cannot be even executed because of the error

```
fs.js:157
  throw new ERR_INVALID_CALLBACK();
  ^

TypeError [ERR_INVALID_CALLBACK]: Callback must be a function
    at maybeCallback (fs.js:157:9)
    at Object.fs.writeFile (fs.js:1276:14)
    at Shop.save (/Users/<username>/projects/nodeschool/core-scope-chains-closures/node_modules/adventure/index.js:288:8)
    at Shop.select (/Users/<username>/projects/nodeschool/core-scope-chains-closures/node_modules/adventure/index.js:246:10)
    at EventEmitter.<anonymous> (/Users/<username>/projects/nodeschool/core-scope-chains-closures/node_modules/adventure/index.js:278:14)
    at EventEmitter.emit (events.js:182:13)
    at Menu.<anonymous> (/Users/<username>/projects/nodeschool/core-scope-chains-closures/node_modules/adventure/lib/menu.js:49:22)
    at Menu.emit (events.js:182:13)
    at Menu.ondata [as _ondata] (/Users/<username>/projects/nodeschool/core-scope-chains-closures/node_modules/terminal-menu/index.js:215:18)
    at DestroyableTransform._transform (/Users/<username>/projects/nodeschool/core-scope-chains-closures/node_modules/terminal-menu/index.js:50:18)
```

And this issue has been raised to [the Github repo](https://github.com/workshopper/scope-chains-closures/issues/39).
Until 2018-06-02, no solution to this issue is resolved yet.
