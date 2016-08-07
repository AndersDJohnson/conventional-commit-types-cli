# conventional-commit-types-cli

List conventional commit types per https://github.com/AndersDJohnson/conventional-commit-types.
So you can remember them when you're committing.

## Install

```
npm install -g conventional-commit-types-cli
```

## Use

Run:
```
conventional-commit-types
```
Outputs e.g.:
```
feat    	A new feature
fix     	A bug fix
docs    	Documentation only changes
style   	Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
refactor	A code change that neither fixes a bug or adds a feature
perf    	A code change that improves performance
test    	Adding missing tests
chore   	Changes to the build process or auxiliary tools and libraries such as documentation generation
revert  	Reverts a previous commit
```
