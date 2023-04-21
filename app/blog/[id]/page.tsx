// dynamic routes

export default async function Page({ params }: { params: { id: string } }) {
  // get data
  const res = await fetch(
    `https://strapi-v4.qa.webcms-dev.digital.nbrown.co.uk/api/sb-blog-pages-live/${params.id}?populate=*`,
    { next: { revalidate: 10 } } // equivalent of Incremental Static Regeneration
  );
  const data = await res.json();
  // this is server side, so wont be in the browser console
  console.log("here:", data.data);

  const blog = data?.data.attributes;

  return (
    <div>
      <h1>
        ID: {params.id} - {blog.name}
      </h1>
      <p>{blog.seoContent?.title}</p>
    </div>
  );
}
