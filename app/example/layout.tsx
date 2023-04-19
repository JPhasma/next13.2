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
        </div>
      </body>
    </html>
  );
}
