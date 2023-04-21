export default function ExampleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="nested_main">
        <h3>Example Nested Layout</h3>
        {children}
      </div>
      <div className="sidebar">
        <h2>sidebar</h2>
      </div>
    </div>
  );
}
