"use client";
import { IoArrowBackCircle } from "react-icons/io5";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

const BtnClientSiteBack: FC = () => {
  const { back } = useRouter();
  return (
    <div>
      <button onClick={() => back()}>
        <IoArrowBackCircle />
      </button>
    </div>
  );
};
export default BtnClientSiteBack;
