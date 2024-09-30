import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Adrian" };
  return (
    <section className="home">
      <div className="home-content">
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
      </div>
    </section>
  );
};

export default Home;
