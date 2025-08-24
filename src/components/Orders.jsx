import React from "react";
import { useCart } from "../context/CartContext";
import "./style.css"

const PaymentHistory = () => {
  const { paymentHistory } = useCart();

  return (
    <div className="history-container">
      <h2><b>Payment History</b></h2>
      {paymentHistory.length === 0 ? (
        <p>No past Payments</p>
      ) : (
        <ul>
          {paymentHistory.map((transaction) => {
            // Calculate total for this transaction
            const totalPrice = transaction.items.reduce(
              (sum, item) => sum + item.price,
              0
            );

            return (
              <li key={transaction.id}>
                <p><strong>Transaction Date:</strong> {transaction.date}</p>
                <ul>
                  {transaction.items.map((item) => (
                    <li key={item.id}>
                      {item.name} - Rs.{item.price}
                    </li>
                  ))}
                </ul>

                {/* Show total only if more than 1 item */}
                {transaction.items.length > 1 && (
                  <p><strong>Total Price:</strong> Rs.{totalPrice}</p>
                )}

                <hr />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default PaymentHistory;
