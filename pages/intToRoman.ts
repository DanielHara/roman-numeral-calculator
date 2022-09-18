export default function intToRoman(num: number) {
  if (num <= 3) {
    return 'I'.repeat(num);
  }

  if (num === 4) {
    return 'IV';
  }
}
