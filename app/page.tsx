import Image from "next/image";
export default function Home() {
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

        <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
      </h1>
      <br />
      <h2> Using latest experimental features</h2>
    </main>
  );
}
