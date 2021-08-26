type BraceMap = { [close: string]: string };

const closeToOpenBracesMap: BraceMap = {
  ')': '(',
  ']': '[',
  '}': '{',
};

function validBraces(braces: string): boolean {
  const stack: string[] = [];
  const split: string[] = braces.split('');

  for (let i = 0; i < split.length; i++) {
    const currentCharacter = split[i];

    if (
      currentCharacter === '(' ||
      currentCharacter === '[' ||
      currentCharacter === '{'
    ) {
      stack.push(currentCharacter);
    } else {
      const lastChar = stack.pop();
      if (lastChar !== closeToOpenBracesMap[currentCharacter]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

export default validBraces;
