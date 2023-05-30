export default function stayPositive(value: number) {
  if (Number(value) < 1) {
    return 1;
  }
  return value;
}
