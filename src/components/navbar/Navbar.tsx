import Link from "next/link";
import styles from "../navbar/navbar.module.scss";
import Links from "./links/Links";
import { FC } from "react";
import { FaHome } from "react-icons/fa";
import { MdUnsubscribe } from "react-icons/md";

const Navbar: FC = (): JSX.Element => {
  return (
    <div className={styles.linksDiv}>
      <Link href="/">
        <FaHome className={styles.homeIcon} />
      </Link>
      <Links />

      <Link href="/subscribe">
        <div className={styles.subscribeWrap}>
          <div>
            <h2 className={styles.emailTitle}>Subscribe</h2>
          </div>
          <div>
            <MdUnsubscribe className={styles.emailIcon} />
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Navbar;
