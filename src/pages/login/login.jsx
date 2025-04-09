import React from "react";
import { Link } from "react-router-dom";
import BackgroundImage1 from "@/assets/svgs/md-auth-screen-background.svg";
import BackgroundImage2 from "@/assets/svgs/lg-auth-screen-background.svg";
import BackgroundImage3 from "@/assets/svgs/xl-auth-screen-background.svg";
import BackgroundImage4 from "@/assets/svgs/2xl-auth-screen-background.svg";
import BackgroundCurve from "@/assets/svgs/auth-screens-background-curve.svg";
import Logo from "@/assets/svgs/logo.svg";
import CustomInput from "@/components/ui/customInput/customInput";
import CustomButton from "@/components/ui/customButton/customButton";

const Login = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-screen h-screen md:h-fit bg-white">
      <picture>
        <source media="(min-width: 1536px)" srcSet={BackgroundImage4} />

        <source media="(min-width: 1280px)" srcSet={BackgroundImage3} />

        <source media="(min-width: 1024px)" srcSet={BackgroundImage2} />

        <source media="(min-width: 768px)" srcSet={BackgroundImage1} />

        <img
          src={BackgroundImage1}
          alt="Background Image"
          className="relative w-screen hidden md:block"
        />
      </picture>

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
          <div className="flex flex-col gap-3">
            <CustomInput
              label="メールアドレス"
              placeholder="example@example.com"
              type="email"
            />

            <CustomInput
              label="パスワード"
              placeholder="パスワードを入力してください"
              type="password"
            />

            <Link
              to="/verify-email"
              className="text-base text-primary underline underline-offset-3 flex self-center cursor-pointer"
            >
              パスワードを忘れた場合はこちら
            </Link>
          </div>

          <CustomButton text="ログイン" />
        </div>
      </div>

      <div className="hidden md:flex flex-col gap-8 shadow-lg bg-white w-5/12 lg:w-3/11 xl:w-3/12 2xl:w-2/12 h-fit p-5 rounded-xl lg:rounded-2xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-30 lg:mt-38 xl:mt-32 2xl:mt-34">
        <div className="flex flex-col gap-3">
          <CustomInput
            label="メールアドレス"
            placeholder="example@example.com"
            type="email"
          />

          <CustomInput
            label="パスワード"
            placeholder="パスワードを入力してください"
            type="password"
          />

          <Link
            to="/verify-email"
            className="text-base text-primary underline underline-offset-3 flex self-center cursor-pointer"
          >
            パスワードを忘れた場合はこちら
          </Link>
        </div>

        <CustomButton text="ログイン" />
      </div>
    </div>
  );
};

export default Login;
