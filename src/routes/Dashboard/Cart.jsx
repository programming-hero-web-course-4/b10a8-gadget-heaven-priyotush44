import React, { useContext, useEffect, useState } from "react";
import CartCard from "./CartCard";
import { sendAddToCardData } from "../Root";
import { GoSortDesc } from "react-icons/go";
import SuccessPng from "../../assets/tick.png";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const addToCartData = useContext(sendAddToCardData);

  const [data, setData] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setData(addToCartData);
    if (addToCartData.length) setIsDisabled(false); //enable the purchase button
  }, [addToCartData]);

  const sortByPrice = () => {
    const descendingArr = [...data].sort((a, b) => a.price - b.price).reverse();
    setData(descendingArr);
  };

  const purchaseBtnHandler = () => {
    document.getElementById("my_modal_1").showModal();
  };

  const navigate = useNavigate();

  const modalCloseBtnHandler = () => {
    setData({});
    document.getElementById("my_modal_1").close();
    navigate("/");
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-between md:flex-row">
        <h3 className="text-2xl font-bold text-base-content">Cart</h3>
        <div className="flex flex-col gap-6 items-center md:flex-row">
          <p className="text-2xl font-bold text-base-content">
            Total Cost: ${data.reduce((acc, curr) => acc + curr.price, 0)}
          </p>
          <button
            onClick={sortByPrice}
            className="flex items-center gap-2 px-6 py-1 bg-transparent rounded-full border border-primary text-base font-medium text-primary hover:opacity-80"
          >
            Sort by Price <GoSortDesc className="w-6 h-6" />
          </button>
          <button
            onClick={purchaseBtnHandler}
            className="px-6 py-1 bg-primary rounded-full text-base font-medium text-primary-content hover:opacity-80 disabled:bg-base-300"
            disabled={isDisabled}
          >
            Purchase
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box max-w-96">
              <div className="flex justify-center">
                <img src={SuccessPng} alt="" />
              </div>
              <h3 className="mt-6 font-bold text-2xl text-center text-base-content">
                Payment Successfully
              </h3>
              <div className="mt-6 pt-6 border-t">
                <p className="text-base text-base-content-secondary text-center">
                  Thanks for purchasing
                </p>
                <p className="text-base text-base-content-secondary text-center">
                  Total: ${data.reduce((acc, curr) => acc + curr.price, 0)}
                </p>
              </div>
              <div className="modal-action block">
                <button
                  onClick={modalCloseBtnHandler}
                  className="btn w-full rounded-full"
                >
                  Close
                </button>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      <div className="mt-8 space-y-6">
        {data.map((item, idx) => (
          <CartCard key={idx} data={item}></CartCard>
        ))}
      </div>
    </div>
  );
};

export default Cart;
