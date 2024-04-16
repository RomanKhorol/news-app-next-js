import { AppNewsType } from "@/types/appNewsListType";
import Image from "next/image";
import styles from "./appleItem.module.scss";
import { FC } from "react";
import BtnClientSiteBack from "@/components/buttonClientSiteBack/BtnClientSiteBack";

// export async function generateStaticParams(page: string) {
//   const res: AppNewsType = await fetch(
//     `https://newsapi.org/v2/everything?q=apple&from=2024-03-19&to=2024-03-19&sortBy=popularity&apiKey=c221d489d5974f5eb68da41545c48142&pageSize=10&page=${page}`
//   ).then((res) => res.json());

//   const { articles } = res;

//   const path = articles.map(({ author }) => ({
//     newsid: { author: author.toString() },
//   }));
//   console.log(path);
//   return {
//     path,
//     fallback: false,
//   };
// }

async function getAppnewsData(page: string) {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=apple&from=2024-03-19&to=2024-03-19&sortBy=popularity&apiKey=c221d489d5974f5eb68da41545c48142&pageSize=10&page=${page}`
  );
  const data = await res.json();

  return data;
}

interface AppleNewItemPropType {
  params: { newsid: string };
  searchParams: { page: string };
}

const AppleNewItem: FC<AppleNewItemPropType> = async ({
  params,
  searchParams,
}) => {
  const page = searchParams.page;
  const data: AppNewsType = await getAppnewsData(page);
  const { articles } = data;
  const itemAplleInfo = articles.find(
    (article) => article.author == params.newsid.replaceAll("%20", " ")
  );

  return (
    <div>
      <div>
        <BtnClientSiteBack />
      </div>
      <div>
        <span>{itemAplleInfo?.title}</span>
      </div>
      <div>
        <span>{itemAplleInfo?.description}</span>
      </div>
      <div>
        <Image
          src={itemAplleInfo?.urlToImage || "/No-Image.svg.png"}
          alt=""
          priority={true}
          width={300}
          height={200}
        />
      </div>
      <div>
        <span>
          {itemAplleInfo?.content || "There is no information about this new"}
        </span>
      </div>
    </div>
  );
};
export default AppleNewItem;
