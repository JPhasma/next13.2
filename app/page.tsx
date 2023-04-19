import Image from "next/image";
import { Inter } from "next/font/google";

// adding async turns this into a React server component
export default async function Home() {
  // get data
  const res = await fetch("http://localhost:1337/api/sb-product-details-live");
  const data = await res.json();
  console.log(data);

  return (
    <main>
      <h1>
        <Image
          // className={styles.logo}
          src="/next.svg"
          alt="Example of Next JS 13"
          width={180}
          height={37}
          priority
        />
        <div>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </h1>
      <h2> Using latest experimental features</h2>
    </main>
  );
}
