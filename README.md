# eslint-plugin-no-editor-code
ESlint plugin to remove vscode folding comments. Originally prototyped by Kent C. Dodds.

Will complain about code like the following:

```es6
//#region foo

//#regionend
```

## Install
`npm install --save-dev eslint-plugin-no-editor-code`

## Use
Place the plugin and rule in your .eslintrc like so. Replace "warn" with "error" if you wanna get strict:
```es6
{
    "plugins": [
        "no-editor-code"
    ],
    "rules": {
        "no-editor-code/no-region": "warn"
    }
}
```
