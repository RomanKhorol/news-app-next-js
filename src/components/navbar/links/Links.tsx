"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./links.module.scss";
import NavLink from "./navlink/NavLink";
import { FC } from "react";
import { TfiMenu } from "react-icons/tfi";

import { FaRegWindowClose } from "react-icons/fa";
const links = [
  {
    title: "Aple News",
    path: "/apple",
  },
  {
    title: "Business News",
    path: "/business",
  },
  {
    title: "Wall Street Journal News",
    path: "/wsj",
  },
];

const Links: FC = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className={styles.linksDiv}>
        {links.map((link) => (
          <div key={link.title}>
            <NavLink item={link} />
          </div>
        ))}
      </div>
      {open && (
        <FaRegWindowClose
          onClick={() => setOpen((prev) => !prev)}
          className={styles.mobileBtn}
        />
      )}
      {!open && (
        <TfiMenu
          onClick={() => setOpen((prev) => !prev)}
          className={styles.mobileBtn}
        />
      )}

      {open && (
        <div className={styles.mobileLink}>
          {links.map((link) => (
            <div key={link.title}>
              <NavLink item={link} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Links;
