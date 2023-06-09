export function transformString(input: string) {
  // Convert the string to lowercase
  const lowercaseString = input.toLowerCase();

  // Remove any spaces from the string
  const transformedString = lowercaseString.replace(/\s/g, '');

  return transformedString;
}
