export default function intToRoman(num: number) {
  if (num <= 3) {
    return 'I'.repeat(num);
  }

  if (num === 4) {
    return 'IV';
  }

  if (num >= 5) {
    return 'V'.concat('I'.repeat(num - 5))
  }
}
