"use client";
import Link from "next/link";
import styles from "../navlink/navLink.module.scss";
import { FC } from "react";
import { NawLinkType } from "@/types/nawLinkType";
import { usePathname } from "next/navigation";

interface ItemProp {
  item: NawLinkType;
}
const NavLink: FC<ItemProp> = (item): JSX.Element => {
  const pathPage = usePathname();
  const { path, title } = item.item;
  return (
    <div>
      <Link
        href={path}
        className={`{styles.linkNav} ${pathPage === path && styles.active}`}
      >
        {title}
      </Link>
    </div>
  );
};
export default NavLink;
