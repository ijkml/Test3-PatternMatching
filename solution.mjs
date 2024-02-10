/**
 * Brute-tracking
 * @param {string} text
 * @param {string} patt
 */
function solution(text, patt) {
  if (patt.includes(".*")) {
    // super wildcard detected, early optimization
    return true;
  }

  if (!(patt.includes(".") || patt.includes("*"))) {
    // has no special char, return early
    return patt.indexOf(text) >= 0;
  }

  const pattLen = patt.length; // length of pattern
  const textLen = text.length; // length of text

  /**
   * @param {number} pid location on the pattern tree
   */
  function doesMatch(pid) {
    let tloc = 0; // temp location on the text tree
    let tpid = pid; // temp location on patt tree

    let matches = true; // so far still matching

    while (tloc < textLen) {
      const t = text[tloc]; // text char at temporal loc
      const p = patt[tpid]; // patt char at temporal loc

      if (t === p || p === ".") {
        // move along both text and pattern
        tloc += 1;
        tpid += 1;
        continue;
      }

      if (p === "*") {
        if (patt[tpid - 1] === t) {
          tloc += 1; // next text char
          continue;
        }

        tpid += 1; // next patt char
        continue;
      }

      matches = false;
      break;
    }

    return matches;
  }

  const lastSearchable = (() => {
    const lastWild = patt.lastIndexOf("*");
    const moat = pattLen - 1 - lastWild; // length of pattern after last wild
    const diff = moat - textLen;

    if (diff < 0) {
      return lastWild;
    }

    return lastWild + diff + 2;
  })();

  let pid = 0; // current location on the pattern tree
  let result = false;

  while (pid <= lastSearchable) {
    const matches = doesMatch(pid);

    if (matches) {
      result = true;
      break;
    }

    pid++; // next loop
  }

  return result;
}

export default solution;
