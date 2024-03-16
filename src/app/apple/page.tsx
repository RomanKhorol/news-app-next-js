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
    <div>
      {!articles && <p>Something goes wrong</p>}
      <ul>
        {articles &&
          articles.map(({ title, author }) => (
            <li key={title}>
              <Link href={`/apple/${author}?page=${page}`}>{title}</Link>
            </li>
          ))}
      </ul>
      <div>
        <Paginatoin count={articles.length} />
      </div>
    </div>
  );
};
export default AppleNews;
