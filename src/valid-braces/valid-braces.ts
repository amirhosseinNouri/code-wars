function validBraces(braces: string): boolean {
  const stack: Array<string> = [];
  const splitedBraces = braces.split('');
  const braceMap: { [close: string]: string } = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let i = 0; i < splitedBraces.length; i++) {
    const currentCharacter = splitedBraces[i];

    if (
      currentCharacter === '(' ||
      currentCharacter === '[' ||
      currentCharacter === '{'
    ) {
      stack.push(currentCharacter);
    } else {
      const lastChar = stack.pop();
      if (lastChar !== braceMap[currentCharacter]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

export default validBraces;
