import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Adrian",
    lastName: "JSM",
    email: "abc@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header>
          <HeaderBox
            type="greeting"
            title="Welcome,"
            subtext="Access & manager your account and transactions efficently."
            user={loggedIn?.firstName || "Guest"}
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={2698.12}
          />
          RECENT TRANSACTION
        </header>
      </div>
      <RightSidebar
        user={loggedIn}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 123.5 }]}
        transaction={[]}
      />
    </section>
  );
};

export default Home;
