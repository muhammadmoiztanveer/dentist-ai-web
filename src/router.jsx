import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/layout/layout";
import LogIn from "@/pages/login/login";
import SignUp from "@/pages/signup/signup";
import OtpVerification from "@/pages/otpVerification/otpVerification";
import ResetPassword from "@/pages/resetPassword/resetPassword";
import EmailVerfication from "@/pages/emailVerification/emailVerification";
import SuccessResponseModal from "@/components/modals/successResponseModal/successResponseModal";
import UsersListingPage from "@/pages/usersListing/usersListing";

// import StoreManagmentPage from "./pages/storeManagment/storeManagment";
// import UserManagmentPage from "./pages/userManagment/userManagment";
// import PaymentManagmentPage from "./pages/paymentManagment/paymentManagment";
// import PaymentHistory from "./pages/paymentHistory/paymentHistory";
// import RegistrationOTPPage from "./pages/registrationOTP/registrationOTP";
// import ErrorPage from "@/pages/error/error";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<EmailVerfication />} />
        <Route path="/verify-otp" element={<OtpVerification />} />
        <Route path="/success" element={<SuccessResponseModal />} />

        <Route path="/" element={<Layout />}>
          <Route path="/users" element={<UsersListingPage />} />
          {/* <Route path="/store" element={<StoreManagmentPage />} />
          <Route path="/payments" element={<PaymentManagmentPage />} />
          <Route path="/history" element={<PaymentHistory />} />
          <Route path="*" element={<ErrorPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
