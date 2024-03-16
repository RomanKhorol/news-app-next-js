import type { PropsWithChildren } from "react";
import styles from "./apple.module.scss";
import { FaApple } from "react-icons/fa6";
export default function AppleNewsLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.layoutHeaderWrapper}>
          <div>
            <h1>Apple News Layout</h1>
          </div>
          <div className={styles.logoAppleWrap}>
            <FaApple className={styles.logoApple} />
          </div>
        </div>

        {children}
      </div>
    </>
  );
}
