import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  //console.log(transactions);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction, index) => (
          <Transaction transaction={transaction} key={index} />
        ))}
      </ul>
    </>
  );
};
