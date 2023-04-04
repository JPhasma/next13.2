import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

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
        <div>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </h1>
      <h2> Using latest experimental features</h2>
    </main>
  );
}
