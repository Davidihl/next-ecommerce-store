export default function stayPositive(value) {
  if (Number(value) < 1) {
    return 1;
  }
  return value;
}
