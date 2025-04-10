import React, { useState } from "react";

import MenuItem01 from "@/assets/svgs/menu-item-01.svg";
import MenuItem02 from "@/assets/svgs/menu-item-02.svg";
import MenuItem03 from "@/assets/svgs/menu-item-03.svg";
import MenuItem04 from "@/assets/svgs/menu-item-04.svg";
import MenuItem05 from "@/assets/svgs/menu-item-05.svg";
import BackgroundCurve from "@/assets/svgs/dashboard-background-curve.svg";
import BackgroundImage from "@/assets/svgs/dashboard-background.svg";

import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { Spin, Button } from "antd";
// import Logo from "@/assets/svgs/logo.png";
// import User from "@/assets/user.png";
// import { fetchUserAttributes } from "aws-amplify/auth";
// import SignOutModal from "../../components/modals/signOutModal/signOutModal";
// import "@/main.css";

const Layout = () => {
  const [appName, setAppName] = useState("Stamps & Deposits");
  // const [loading, setLoading] = useState(true);
  const [activeMenuId, setActiveMenuId] = useState(1);
  const [username, setUsername] = useState("");
  const [userType, setUserType] = useState("");
  // const [isSignOutModalVisible, setIsSignOutModalVisible] = useState(false);

  // const navigate = useNavigate();
  // const location = useLocation();

  // async function currentAuthenticatedUser() {
  //   try {
  //     const userInfo = await fetchUserAttributes();
  //     const userName = userInfo.name;
  //     const customType = userInfo["custom:type"];

  //     setUsername(userName);
  //     setUserType(customType);

  //     setLoading(false);
  //   } catch (err) {
  //     console.error("Error fecthing currentAuthenticatedUser in layout", err);
  //     navigate("/login");
  //   }
  // }

  // function showSignOutModal() {
  //   setIsSignOutModalVisible(true);
  // }

  // function hideSignOutModal() {
  //   setIsSignOutModalVisible(false);
  // }

  // useEffect(() => {
  //   currentAuthenticatedUser();
  //   navigate("/store");
  // }, []);

  // useEffect(() => {
  //   if (location.pathname === "/store") {
  //     setActiveMenuId(1);
  //   }
  // }, [location]);

  const menuItems = [
    {
      id: 1,
      icon: MenuItem02,
      route: "dashboard",
    },
    {
      id: 2,
      icon: MenuItem03,
      route: "users",
    },
    {
      id: 3,
      icon: MenuItem04,
      route: "history",
    },
    {
      id: 4,
      icon: MenuItem05,
      route: "history",
    },
  ];

  // if (loading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <Spin size="large" />
  //     </div>
  //   );
  // }

  return (
    <div>
      <div className="w-screen h-screen flex">
        <div className="w-fit h-full bg-white shadow-xl flex flex-col justify-between z-10">
          <div className="w-full flex flex-col gap-6">
            <Link
              key="logo"
              to="/"
              className="size-14 bg-primary flex justify-center aspect-square"
              // onClick={() => setActiveMenuId(item.id)}
            >
              <img src={MenuItem01} alt="Menu Item" className="text-xl" />
            </Link>

            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.route}
                className={
                  activeMenuId === item.id
                    ? "size-14 bg-accent flex justify-center aspect-square"
                    : "size-14 hover:bg-secondary flex justify-center aspect-square"
                }
                onClick={() => setActiveMenuId(item.id)}
              >
                <img src={item.icon} alt="Menu Item" className="text-xl" />
              </Link>
            ))}
          </div>

          {/* <Button
            color="default"
            variant="solid"
            size="large"
            className="mb-24"
            // onClick={showSignOutModal}
          >
            Sign Out
          </Button> */}
        </div>

        <div className="relative w-full bg-white overflow-y-auto z-0">
          <img
            src={BackgroundCurve}
            alt="Background Curve"
            className="absolute top-0 w-full"
          />
          <img
            src={BackgroundImage}
            alt="Background Image"
            className="absolute bottom-0 left-0"
          />

          <div className="absolute top-0 w-full mt-6">
            <Outlet />
          </div>
        </div>
      </div>

      {/* <SignOutModal
        isVisible={isSignOutModalVisible}
        onCancel={hideSignOutModal}
      /> */}
    </div>
  );
};

export default Layout;
