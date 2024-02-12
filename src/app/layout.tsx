export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico/" sizes="any" />
      </head>
      <body>
        <div>Global Layout</div>
        {children}
      </body>
    </html>
  );
}
