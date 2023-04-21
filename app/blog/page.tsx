import Link from "next/link";

export default async function Blog() {
  // get data
  const res = await fetch(
    "https://strapi-v4.qa.webcms-dev.digital.nbrown.co.uk/api/sb-blog-pages-live",
    { cache: "no-store" } // equivalent of 'getServerSideProps
  );
  const data = await res.json();
  // this is server side, so wont be in the browser console
  console.log("data:", data);

  return (
    <main>
      <h2>Blog listings from QA SB</h2>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/example">Example Link</Link>
        </li>
        {data?.map((item: any) => {
          return (
            <li key={item.id}>
              <Link href={`/blog/${item.id}`}>
                id: {item.id} - {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
