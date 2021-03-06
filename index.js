#!/usr/bin/env node
require('@ghadyani-framework/setup-module-aliases')(__dirname)

// Load this before any other file
const logUncaughtExceptions = require('$utils/logUncaughtExceptions')

logUncaughtExceptions
.subscribe()

module.exports = {
	createDeprecatedFunction: require('$utils/createDeprecatedFunction'),
	deprecateArgument: require('$utils/deprecateArgument'),
	removeFilePathFromRequireCache: require('$utils/removeFilePathFromRequireCache'),
	safeImport: require('$utils/safeImport'),
	simpleMap: require('$utils/simpleMap'),
	tryCatchFinally: require('$utils/tryCatchFinally'),
}
