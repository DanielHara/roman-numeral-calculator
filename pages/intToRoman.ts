export default function intToRoman(num: number) {
  if (num > 1000 || num < 0) {
    return 'Invalid input, set a number between 1 and 1000'
  }


  let romanUnits = ''
  const units = num % 10;

  if (units <= 3) {
    romanUnits = 'I'.repeat(units);
  } else if (units === 4) {
    romanUnits = 'IV';
  } else if (units < 9) {
    romanUnits = 'V'.concat('I'.repeat(units - 5))
  } else if (units === 9) {
    romanUnits = 'IX'
  }

  let romanTenths = ''

  const tenths = Math.trunc((num / 10) % 10);
  if (tenths <= 3) {
    romanTenths = 'X'.repeat(tenths)
  } else if (tenths === 4) {
    romanTenths = 'XL'
  } else if (tenths < 9) {
    romanTenths = 'L'.concat('X'.repeat(tenths - 5))
  } else if (tenths === 9) {
    romanTenths = 'XC'
  }

  let romanHundreds = ''

  const hundreds = Math.trunc((num / 100) % 10);

  if (hundreds <= 3) {
    romanHundreds = 'C'.repeat(hundreds)
  } else if (hundreds === 4) {
    romanHundreds = 'CD'
  } else if (hundreds < 9) {
    romanHundreds = 'D'.concat('C'.repeat(hundreds - 5))
  } else if (hundreds === 9) {
    romanHundreds = 'CM'
  }

  let romanThousands = ''
  const thousands = Math.trunc((num / 1000) % 10);

  if (thousands === 1) {
    romanThousands = 'M'
  }

  return `${romanThousands}${romanHundreds}${romanTenths}${romanUnits}`
}
