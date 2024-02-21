import type { PropsWithChildren } from "react";
import styles from "./business.module.scss";
export default function BuisinessNewsLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <>
      <div className={styles.main}>
        <h1>Buisiness News Layout</h1>
        {children}
      </div>
    </>
  );
}
