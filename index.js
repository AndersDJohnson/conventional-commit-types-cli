#!/usr/bin/env node

var types = require('conventional-commit-types')
var chalk = require('chalk')
var pad = require('right-pad-keys')

types = pad(types)

for (var key in types) {
  var type = types[key]
  console.log(chalk.green(key) + '\t' + type.description)
}
