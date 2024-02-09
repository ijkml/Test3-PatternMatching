# Turing Test (Rabbit-V)

Given a string text and a pattern. Evaluate if a given text string matches a specified pattern, utilizing special characters for pattern matching.

The pattern matching should adhere to the following rules:

- The symbol `.` represents any individual character.

- The symbol `*` Indicates zero or more occurrences of the character that appears just before it

Return true if the pattern corresponds exactly to the entire text string, if not return false.

**Note:**

- Your implementation should not be dependent on regular expression or similar convenient libraries.
- Your implementation should be able to handle all hidden test cases correctly.

### Example 1:

Input: text = 'aa', pattern = 'a'

Output: false

Explanation: The single 'a' does not match the full text 'aa'

### Example 2:

Input: text = 'aa', pattern = `a*`

Output: true

Explanation: The pattern 'a' can represent 'aa' as `*` allows for repeating 'a'

### Example 3:

Input: text = 'ab', pattern = '.*'

Output: true

Explanation: The pattern can match any sequence of characters.

## Constraints

- 1 <= text.length <= 20
- 1 <= pattern.length <= 20
- `text` contains only lowercase English letters
- `pattern` contains only lowercase English letters, `.` and `*`.
- It is guaranteed for each appearance of the character `*`, there there will be a previous valid character to match