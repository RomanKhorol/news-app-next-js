"use client";

import React, { FC, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface paginationPropType {
  count: number;
}

const Paginatoin: FC<paginationPropType> = ({ count }) => {
  const query = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(query);
  const page = query.get("page") || "1";

  useEffect(() => {
    params.set("page", page);
    replace(`${pathname}?${params}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangePage = (type: string) => {
    type === "prev"
      ? params.set("page", (parseInt(page) - 1).toString())
      : params.set("page", (parseInt(page) + 1).toString());
    replace(`${pathname}?${params}`);
  };

  return (
    <div>
      <button
        onClick={() => {
          handleChangePage("prev");
        }}
        disabled={page === "1"}
      >
        Prev
      </button>
      <button
        onClick={() => {
          handleChangePage("next");
        }}
        disabled={count < 10}
      >
        Next
      </button>
    </div>
  );
};
export default Paginatoin;
