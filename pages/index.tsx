import Head from "next/head";
import { useState } from "react";
const romanize: Romanize = require("romanize");

type Romanize = (positiveInteger: number) => string;

export default function Home() {
  const [romanNumeral, setRomanNumeral] = useState<string>();

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = Number(e.currentTarget.value);

    if (isNaN(input)) {
      setRomanNumeral(undefined);
      return;
    }

    const integer = Math.round(input);
    if (integer < 1 || integer > 1000) {
      setRomanNumeral(undefined);
      return;
    }

    setRomanNumeral(romanize(integer));
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Head>
        <title>Roman Numeral Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Roman Numeral Calculator</h1>
        <h3>Convert number to Roman Numeral</h3>

        <input onChange={handleInputOnChange}></input>

        <h4>{romanNumeral || "Waiting for number between 1 and 1000"}</h4>
      </main>
    </div>
  );
}
