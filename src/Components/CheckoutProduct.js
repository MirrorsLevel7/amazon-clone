import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../slices/basketSlice";
function CheckoutProduct({
  id,
  price,
  title,
  description,
  image,
  rating,
  hasPrime,
  category,
}) {
  const dispatch = useDispatch();
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="grid  pb-3 grid-cols-5">
      <Image src={image} width={200} height={200} objectFit="contain" />
      <div className="col-span-3 flex flex-col justify-center">
        <h4 className="mb-4 font-bold">{title}</h4>
        <div className="flex mb-3">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-400" />
            ))}
        </div>
        <p className="text-sm mb-3 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="usd" />
        {hasPrime && (
          <div className="flex items-center space-x-3 mt-5">
            <img
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center ml-auto">
        <button className="btn mb-2">add to Basket</button>
        <button onClick={removeItemFromBasket} className="btn">
          Remove From Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
