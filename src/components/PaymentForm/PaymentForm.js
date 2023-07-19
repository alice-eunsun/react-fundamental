import React, { useState } from "react";

import "./PaymentForm.css";

const PaymentForm = ({ getPaymentFormData }) => {
  const [objectState, setObjectState] = useState({
    name: "",
    price: 0,
    method: "card",
    installments: "",
    color: "",
    today: new Date(),
  });

  const inputTextHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  const inputPriceHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      price: event.target.value,
    }));
  };

  const inputMethodHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      method: event.target.value,
    }));
  };

  const inputInstallmentsHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      installments: event.target.value,
    }));
  };

  const inputColorHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      color: event.target.value,
    }));
  };

  const inputTodayHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      today: event.target.value,
    }));
  };

  const buttonSubmitHander = (event) => {
    event.preventDefault();

    getPaymentFormData(objectState);
    console.log(objectState);

    setObjectState({
      name: "",
      price: 0,
      method: "card",
      installments: "",
      color: "",
      today: new Date(),
    });
  };

  return (
    <div className="new-payment">
      <form onSubmit={buttonSubmitHander}>
        <div className="new-payment__controls">
          <div className="new-payment__control">
            <label>이름</label>
            <input
              type="text"
              onChange={inputTextHandler}
              value={objectState.name}
            />
          </div>
          <div className="new-payment__control">
            <label>금액</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={inputPriceHandler}
              value={objectState.price}
            />
          </div>
          <div className="new-payment__control">
            <label>지불방식</label>
            <div className="payment__control__radiogroup">
              <label className="payment__control__radio">
                <input
                  type="radio"
                  name="method"
                  value={objectState.method}
                  defaultChecked={true}
                  onChange={inputMethodHandler}
                />
                Card
              </label>
              <label className="payment__control__radio">
                <input
                  type="radio"
                  name="method"
                  value={objectState.method}
                  onChange={inputMethodHandler}
                />
                Cash
              </label>
            </div>
          </div>
          <div className="new-payment__control">
            <label>분납</label>
            <div className="payment__control__radiogroup">
              <label className="payment__control__radio">
                <input
                  type="checkbox"
                  name="installments"
                  value={objectState.installments}
                  onChange={inputInstallmentsHandler}
                />
                할부
              </label>
            </div>
          </div>
          <div className="new-payment__control">
            <label>색깔</label>
            <input
              type="color"
              name="color"
              value={objectState.color}
              onChange={inputColorHandler}
            />
          </div>
          <div className="new-payment__control">
            <label>날짜</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              onChange={inputTodayHandler}
              value={objectState.today}
            />
          </div>
        </div>
        <div className="new-payment__actions">
          <button type="submit">결제 추가</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
