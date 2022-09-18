export default function intToRoman(num: number) {
  let romanUnits = ''
  const units = num % 10;

  if (units <= 3) {
    romanUnits = 'I'.repeat(units);
  }

  if (units === 4) {
    romanUnits = 'IV';
  }

  if (units >= 5 && units < 9) {
    romanUnits = 'V'.concat('I'.repeat(units - 5))
  }

  if (units === 9) {
    romanUnits = 'IX'
  }

  let romanTenths = ''

  const tenths = Math.trunc((num / 10) % 10);
  if (tenths <= 3) {
    romanTenths = 'X'.repeat(tenths)
  }

  if (tenths === 4) {
    romanTenths = 'XL'
  }

  if (tenths >= 5 && tenths < 9) {
    romanTenths = 'L'.concat('X'.repeat(tenths - 5))
  }

  if (tenths === 9) {
    romanTenths = 'XC'
  }

  let romanHundreds = ''

  const hundreds = Math.trunc(num / 100);

  if (hundreds <= 3) {
    romanHundreds = 'C'.repeat(hundreds)
  }
  
  if (hundreds === 4) {
    romanHundreds = 'CD'
  }

  if (hundreds >= 5 && hundreds < 9) {
    romanHundreds = 'D'.concat('C'.repeat(hundreds - 5))
  }

  if (hundreds === 9) {
    romanHundreds = 'CM'
  }

  return `${romanHundreds}${romanTenths}${romanUnits}`
}
