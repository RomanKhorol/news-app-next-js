import { FC } from "react";
import styles from "../footer/footer.module.scss";
const Footer: FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2 className={styles.footerTitle}>Created by Roman Gordiienko</h2>
      </div>
      <div className={styles.vr}></div>
      <div className={styles.text}>
        <h2 className={styles.footerTitle}>2024</h2>
      </div>
    </div>
  );
};
export default Footer;
