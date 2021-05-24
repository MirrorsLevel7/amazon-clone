import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { addToBasket } from "../slices/basketSlice";
import { useDispatch } from "react-redux";

function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();
  const min = 1,
    max = 5;
  const [rating, setRating] = useState(
    Math.floor(Math.random() * (max - min) + min)
  );

  const [hasPrime, setPrime] = useState(Math.random() < 0.5);

  const addItemsToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
    };
    dispatch(addToBasket(product));
  };

  return (
    <div key={id} className="relative flex flex-col m-5 bg-white z-30 p-10">
      <span className="absolute top-2 right-2 text-sm italic text-gray-400">
        {category}
      </span>
      <Image src={image} width={155} height={150} objectFit="contain" />
      <h4>{title}</h4>
      <span className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-400" />
          ))}
      </span>
      <p class="text-sm my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="usd" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-3 mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
        </div>
      )}
      <button onClick={addItemsToBasket} className="btn">
        Add to cart
      </button>
    </div>
  );
}

export default Product;
