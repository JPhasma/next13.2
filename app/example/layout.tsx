export default function ExampleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="nested_main">
        <h3>Example Nested Layout</h3>
        <h4>
          so the /example/page.tsx for this example is being rendered here in
          this nested layout
        </h4>
        {children}
      </div>
      <div className="sidebar">
        <h2>sidebar</h2>
        <p>
          we can have lots of things here, such as client side rendered
          components. Next 13 can be very flexable with complex layouts
        </p>
      </div>
    </div>
  );
}
