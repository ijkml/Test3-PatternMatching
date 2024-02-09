/**
 * @param {string} text
 * @param {string} patt
 */
function solution(text, patt) {
  if (patt.includes(".*")) {
    // super wildcard detected, early optimization
    return true;
  }

  if (!(patt.includes(".") || patt.includes("*"))) {
    // has no special chars, return early
    return patt.indexOf(text) >= 0;
  }

  const pattLen = patt.length; // length of pattern
  const textLen = text.length; // length of text

  /**
   * @param {number} pid location on the pattern tree
   */
  function doesMatch(pid) {
    let tloc = 0; // temporal location on the text tree
    let tpid = pid;

    /**
     *
     * @param {'text' | 'patt'} only
     */
    function next(only) {
      if (only === "text") {
        tloc += 1;
        return;
      }
      if (only === "patt") {
        tpid += 1;
        return;
      }

      tloc += 1;
      tpid += 1;
    }

    let matches = true; // so far still matching

    while (tloc < textLen) {
      const t = text[tloc]; // text char at temporal loc
      const p = patt[tpid]; // patt char at temporal loc

      if (t === p || p === ".") {
        next();
        continue;
      }

      if (p === "*") {
        if (patt[tpid - 1] === t) {
          next("text");
          continue;
        }

        next("patt");
        continue;
      }

      matches = false;
      break;
    }

    return matches;
  }

  const lastSearchable = (() => {
    const lastWild = patt.lastIndexOf('*');
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

    // next loop
    pid++;
  }

  return result;
}

export default solution;
