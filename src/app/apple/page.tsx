import React, { FC } from "react";
import styles from "./apple.module.scss";
import { AppNewsType } from "@/types/appNewsListType";
import Link from "next/link";
import Paginatoin from "@/components/paginations/Pagination";
import { getAppnewsData } from "@/apies/apies";

export const metadata = {
  title: "Apple News",
};
const AppleNews = async ({
  searchParams,
}: {
  searchParams: { page: string };
}) => {
  const page = searchParams.page;
  const appNewsList: AppNewsType = await getAppnewsData(parseInt(page));

  const { articles } = appNewsList;

  return (
    <>
      <div className={styles.aplelistWrapper}>
        <ul className={styles.apleNewsList}>
          {articles &&
            articles.map(({ title, author }) => (
              <li key={title}>
                <Link
                  className={styles.linkStyle}
                  key={title}
                  href={`/apple/${author}?page=${page}`}
                >
                  {title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <Paginatoin />
      </div>
    </>
  );
};
export default AppleNews;
