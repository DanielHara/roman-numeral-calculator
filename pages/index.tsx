import { useState } from 'react';

import intToRoman from "./intToRoman";

export default function Home() {
  const [number, setNumber] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(e.target.value));
  };

  return (
    <div>
      <div>
        <label htmlFor="number">
          Enter number here:
        </label>
        <input id="number" name="number" type="number" onChange={handleChange}></input>
      </div>
      <div>
        <label htmlFor="roman">
          Roman number:
        </label>
        <input id="roman" name="roman" value={intToRoman(number)} readOnly></input>
      </div>
    </div>
  )
}
