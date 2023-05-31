export function capitalizeFirstLetter(inputValue: string) {
  if (typeof inputValue !== 'string') {
    throw new Error('Argument is not a string');
  }

  return inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
}
