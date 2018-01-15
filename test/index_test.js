/**
 * Below, context will be a function/object with file names as keys.
 * Using that regex we are saying look in ./ then find
 * any file that ends with test.ts and get its path. By passing in true
 * we say do this recursively
 */
var testContext = require.context("./", true, /\.test\.ts/);

/**
 * Get all the files, for each file, call the context function
 * that will require the file and load it up here. Context will
 * loop and require those spec files here
 */
function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

/**
 * Requires and returns all modules that match
 */
var modules = requireAll(testContext);
