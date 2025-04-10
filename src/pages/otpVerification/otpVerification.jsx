import React from "react";
import { Link } from "react-router-dom";
import BackgroundImage1 from "@/assets/svgs/md-reset-password-screens-background.svg";
import BackgroundImage2 from "@/assets/svgs/lg-reset-password-screens-background.svg";
import BackgroundImage3 from "@/assets/svgs/xl-reset-password-screens-background.svg";
import BackgroundCurve from "@/assets/svgs/auth-screens-background-curve.svg";
import Logo from "@/assets/svgs/logo.svg";
import CustomButton from "@/components/ui/customButton/customButton";
import OTPInput from "@/components/ui/otpInput/otpInput";

const OtpVerification = () => {
  const handleOTPComplete = (otp) => {
    console.log("OTP entered:", otp);
    // Add verification logic here
  };

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

      <div className="absolute top-0 w-full h-screen flex flex-col gap-10 justify-center items-center px-4 sm:px-0 md:hidden">
        <img src={Logo} alt="Logo" className="" />

        <div className="flex flex-col gap-6 md:gap-8 shadow-lg bg-white w-full sm:w-7/12 h-fit rounded-2xl p-5">
          <div className="text-2xl text-center font-medium">パスワードリセット</div>

          <div className="text-base text-center">
            example@example.com に送信したコードを入力してください。
          </div>

          <div className="flex flex-col gap-3">
            <OTPInput length={6} onComplete={handleOTPComplete} />
          </div>

          <CustomButton text="続ける" width="220px" />

          <Link className="text-base text-primary flex self-center justify-center flex-wrap cursor-pointer">
            メールが届いていない場合
            <span className="underline underline-offset-3 ml-1">
              こちらより再送する
            </span>
          </Link>

          <Link
            to="/verify-email"
            className="text-base text-primary underline underline-offset-3 flex self-center cursor-pointer"
          >
            パスワード忘れたページへ戻る
          </Link>
        </div>
      </div>

      <div className="hidden md:flex flex-col gap-8 shadow-lg bg-white w-fit h-fit p-6 lg:px-6 py-5 rounded-xl lg:rounded-2xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-28 lg:mt-22 xl:mt-38 2xl:mt-42">
        <div className="text-2xl text-center font-medium">パスワードリセット</div>
        <div className="text-base text-center">
          example@example.com に送信したコードを入力してください。
        </div>

        <div className="flex flex-col gap-3">
          <OTPInput length={6} onComplete={handleOTPComplete} />
        </div>

        <CustomButton text="続ける" width="220px" />

        <Link className="text-base text-primary flex flex-wrap self-center justify-center cursor-pointer">
          メールが届いていない場合
          <span className="underline underline-offset-3 ml-1">
            こちらより再送する
          </span>
        </Link>

        <Link
          to="/verify-email"
          className="text-base text-primary underline underline-offset-3 flex self-center cursor-pointer"
        >
          パスワード忘れたページへ戻る
        </Link>
      </div>
    </div>
  );
};

export default OtpVerification;
