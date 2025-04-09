import React from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "@/assets/svgs/reset-password-screens-background.svg";
import BackgroundCurve from "@/assets/svgs/auth-screens-background-curve.svg";
import Logo from "@/assets/svgs/logo.svg";
import CustomInput from "@/components/ui/customInput/customInput";
import CustomButton from "@/components/ui/customButton/customButton";

const EmailVerfication = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-screen h-screen md:h-fit bg-white">
      <img
        src={BackgroundImage}
        alt="Background Image"
        className="relative w-screen hidden md:block"
      />

      <div className="relative grid md:hidden grid-rows-3 w-full h-full">
        <div className="row-span-1 bg-secondary"></div>
        <div className="row-span-1">
          <img
            src={BackgroundCurve}
            alt="Background Curve"
            className="md:hidden w-full"
          />
        </div>
        <div className="row-span-1"></div>
      </div>

      <div className="absolute top-0 w-full h-screen flex flex-col gap-10 justify-center items-center px-6 sm:px-0 md:hidden">
        <img src={Logo} alt="Logo" className="" />

        <div className="flex flex-col gap-8 shadow-lg bg-white w-full sm:w-3/6 h-fit rounded-2xl p-5">
          <div className="text-2xl text-center">パスワード忘れ</div>

          <div className="flex flex-col gap-3">
            <CustomInput
              label="メールアドレス"
              placeholder="example@example.com"
              type="email"
            />
          </div>

          <CustomButton text="送信" />

          <Link
            to="/verify-email"
            className="text-base text-primary underline underline-offset-3 flex self-center cursor-pointer"
          >
            ログインページに戻る
          </Link>
        </div>
      </div>

      <div className="hidden md:flex flex-col gap-8 shadow-lg bg-white w-fit h-fit md:px-20 lg:px-20 xl:px-24 2xl:px-30 py-5 rounded-xl lg:rounded-2xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-30 lg:mt-32 xl:mt-36 2xl:mt-42">
        <div className="text-2xl text-center">パスワード忘れ</div>

        <div className="flex flex-col gap-3">
          <CustomInput
            label="メールアドレス"
            placeholder="example@example.com"
            type="email"
            width="280px"
          />
        </div>

        <CustomButton text="送信" />

        <Link
          to="/verify-email"
          className="text-base text-primary underline underline-offset-3 flex self-center cursor-pointer"
        >
          ログインページに戻る
        </Link>
      </div>
    </div>
  );
};

export default EmailVerfication;
