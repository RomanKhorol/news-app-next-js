import type { PropsWithChildren } from "react";
import styles from "./wsj.module.scss";
export default function WSJNewsLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <>
      <div className={styles.main}>
        <h1>Walt Street Journal Layout</h1>
        {children}
      </div>
    </>
  );
}
