import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.scss";
import { FC } from "react";
const Home: FC = (): JSX.Element => {
  return (
    <main>
      <div className={styles.main}>
        <h1 className={styles.title}>Welcome to our News Page</h1>
        <Image
          src="/breakingnews.gif"
          alt=""
          priority={true}
          width={600}
          height={400}
          className={styles.giftImg}
        />
      </div>
    </main>
  );
};

export default Home;
