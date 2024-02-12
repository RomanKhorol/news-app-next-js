import type { PropsWithChildren } from "react";

export default function RootLDailyNewsLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <>
      {" "}
      <h1>Daily News Layoutt</h1>
      {children}
    </>
  );
}
