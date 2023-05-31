export default function stayPositive(value: number) {
  if (typeof value !== 'number') {
    throw new Error('Argument is not a number');
  }

  if (Number(value) < 1) {
    return 1;
  }
  return value;
}
