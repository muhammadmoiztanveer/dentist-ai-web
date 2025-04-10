import React from "react";
import CustomButton from "@/components/ui/customButton/customButton";
import CustomInput from "@/components/ui/customInput/customInput";

const Users = () => {
  return (
    <div className="border flex flex-col gap-6 w-full h-fit px-40">
      <div className="flex justify-between items-center text-primary">
        <span className="font-bold text-3xl">ユーザー一覧</span>

        <CustomButton text="新規登録" width="200px" />
      </div>

      <div className="bg-accent rounded-2xl p-4 flex gap-6">
        <CustomInput label="検索ワード" placeholder="Search" />

        <CustomInput label="ランク" />

        <CustomInput label="状態" />
      </div>
    </div>
  );
};

export default Users;
