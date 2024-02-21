import Image from "next/image";
import styles from "./subscribe.module.scss";
import FormElement from "@/components/form/form";

export const metadata = {
  title: "Subscribe page",
};

const SubscribePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pictWraper}>
        <Image alt="mail" src="/subscribePicture.png" fill priority={false} />
      </div>
      <div>
        <FormElement />
      </div>
    </div>
  );
};

export default SubscribePage;
