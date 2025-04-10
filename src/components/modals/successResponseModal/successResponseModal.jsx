import React from "react";
import BackgroundImage1 from "@/assets/svgs/md-reset-password-screens-background.svg";
import BackgroundImage2 from "@/assets/svgs/lg-reset-password-screens-background.svg";
import BackgroundImage3 from "@/assets/svgs/xl-reset-password-screens-background.svg";
import BackgroundCurve from "@/assets/svgs/auth-screens-background-curve.svg";
import Logo from "@/assets/svgs/logo.svg";
import CustomButton from "@/components/ui/customButton/customButton";

const SuccessResponse = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-screen h-screen md:h-fit bg-white">
      <picture>
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

        <div className="flex flex-col gap-8 shadow-lg bg-white w-full sm:w-3/6 h-fit rounded-2xl p-6">
          <div className="text-4xl text-center font-medium">再設定完了</div>

          <div className="flex flex-col gap-3 text-center">
            パスワードの再設定が完了しました。下記からログインして頂けます。
          </div>

          <CustomButton text="ログインページへ戻る" width="220px" />
        </div>
      </div>

      <div className="hidden md:flex flex-col gap-8 shadow-lg bg-white w-fit h-fit md:px-14 lg:px-20 xl:px-24 2xl:px-30 py-6 rounded-xl lg:rounded-2xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-18 lg:mt-18 xl:mt-38 2xl:mt-42">
        <div className="text-4xl text-center font-medium">再設定完了</div>

        <div className="flex flex-col gap-3  text-center">
          パスワードの再設定が完了しました。下記からログインして頂けます。
        </div>

        <CustomButton text="ログインページへ戻る" width="220px" />
      </div>
    </div>
  );
};

export default SuccessResponse;
