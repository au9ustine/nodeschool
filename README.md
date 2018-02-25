# nodeschool

## Development

### Setup git commit message template

1. Go to project root
2. `git config commit.template ./.gitmessage`
3. Edit message following guidelines in the template after changes are checked out
4. Commit

### Scaffolding

Usage

```
scaffolding <part> <lesson>
```

e.g.

```
$ ./scaffolding core elementary-electron
core-stream-adventure/.eslintrc.yml -> core-elementary-electron/.eslintrc.yml
core-stream-adventure/.gitignore -> core-elementary-electron/.gitignore
core-stream-adventure/.npmrc -> core-elementary-electron/.npmrc
core-stream-adventure/Makefile -> core-elementary-electron/Makefile
Wrote to /Users/tianchen/projects/nodeschool/core-elementary-electron/package.json:

{
  "name": "core-elementary-electron",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


npm WARN deprecated sprintf@0.1.5: The sprintf package is deprecated in favor of sprintf-js.
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN core-elementary-electron@1.0.0 No description
npm WARN core-elementary-electron@1.0.0 No repository field.

+ elementary-electron@1.5.2
added 221 packages in 7.012s
```

∎
