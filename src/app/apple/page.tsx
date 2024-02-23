import styles from "./apple.module.scss";
import Image from "next/image";
export const metadata = {
  title: "Apple News",
};
const AppleNews = () => {
  return (
    <div className={styles.main}>
      <h1>Apple news</h1>
      {/* <div className={styles.apleNewsWrap}>
        <Image
          alt="forest"
          src={
            "https://images.pexels.com/photos/18473907/pexels-photo-18473907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          fill
          sizes="100vw"
          priority={true}
          className={styles.bgimage}
        />
      </div> */}
    </div>
  );
};
export default AppleNews;
