export const metadata = {
  title: "New Head Meta Approach in 13.2+",
  description: "Generated by create next app",
};

export default function ExampleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="nested_main">
          <h3>Example Nested Layout</h3>
          {children}
        </main>
        <div className="sidebar">
          <h2>sidebar</h2>
          <p>put some other content and components in here ...</p>
        </div>
      </body>
    </html>
  );
}
