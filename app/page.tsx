import Image from "next/image";

// adding async turns this into a React server component
export default async function Home() {
  // get data
  const res = await fetch(
    "https://strapi-v4.qa.webcms-dev.digital.nbrown.co.uk/api/sb-homepage"
  );
  const data = await res.json();

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
      <br />
      <h1>{data.seoContent.title}</h1>
    </main>
  );
}
