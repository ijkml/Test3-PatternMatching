import solution from "./solution.mjs";

/**
 * @type [string, string, boolean][]
 */
const testcases = [
  ["abc", "a***abc", true],
  ["abc", "abbc", false],
  ["abc", "a*bc", true],
  ["abc", "a*.c", true],
  ["aa", "a", false],
  ["aa", "a*", true],
  ["ababc", "abab*c", true],
  ["ababbc", "abab*c", true],
  ["ababbbbbbbbbbbbbbbbbbbbbbc", "abab*c", true],
  ['xyz', 'x.z', true],
  ['xyz', 'x*z', false],
  ['s8w9shujojcbsydc982', 'xuikjsixs.*', true],
  // ['', '', true],
];

testcases.forEach((tc) => {
  const result = solution(...tc);

  console.info(`
  text: ${tc[0]}  ||  pattern: ${tc[1]}
  ➜ expect: ${tc[2]}  ||  result: ${result}
`);

  if (result === tc[2]) {
    console.log("\u001b[32m ✔ Passed \u001b[0m");
  } else {
    console.log("\u001b[31m x Failed \u001b[0m");
  }
});
