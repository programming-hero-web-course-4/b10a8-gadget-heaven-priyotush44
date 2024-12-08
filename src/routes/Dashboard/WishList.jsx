import React, { useContext } from "react";
import { sendWishlistData } from "../Root";
import WishlistCard from "./WishlistCard";

const WishList = () => {
  const wishlistData = useContext(sendWishlistData);
  console.log(wishlistData);
  return (
    <div>
      <div>
        <h3 className="text-2xl font-semibold text-card-content">Wishlist</h3>
      </div>
      <div className="mt-8 space-y-6">
        {wishlistData.map((item, idx) => (
          <WishlistCard key={idx} data={item}></WishlistCard>
        ))}
      </div>
    </div>
  );
};

export default WishList;
