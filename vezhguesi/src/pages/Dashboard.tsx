import React from "react";
import { useAuth } from "../hooks/useAuth";
import BotActivity from "../components/BotActivity";
import Trending from "../components/Trending";
import Charts from "../components/Charts";

const Dashboard: React.FC = () => {
  const { currentUser, authToken } = useAuth();

  return (
    <div className="gap-4">
      {/* TESTING AREA */}
      <h1>Hello {currentUser?.firstName}</h1>
      <h1 className="hidden md:block">Your Token: {authToken}</h1>
      {/* TESTING AREA */}
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="h-[400px]  rounded-lg w-[100%] md:h-[400px] md:w-[50%] md:px-3">
          <Charts />
        </div>
        <div className="w-full mt-40 md:mt-0 md:w-[25%]">
          <BotActivity />
        </div>
      </div>
      <div>
        <Trending />
      </div>
    </div>
  );
};

export default Dashboard;
