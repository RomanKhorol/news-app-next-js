import type { PropsWithChildren } from "react";
import styles from "./apple.module.scss";
export default function AppleNewsLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <>
      <div className={styles.main}>
        <h1>Apple News Layout</h1>
        {children}
      </div>
    </>
  );
}
