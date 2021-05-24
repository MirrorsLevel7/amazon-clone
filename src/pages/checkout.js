import Header from "../Components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import CheckoutProduct from "../Components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/client";

function checkout() {
  const items = useSelector(selectItems);
  const [session] = useSession();

  let totalPrice = 0;
  items.forEach(({ price }) => {
    totalPrice += price;
  });
  return (
    <div>
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "You have no products"
                : "Your Shopping Basket"}
            </h1>

            {items.map(
              ({
                id,
                price,
                title,
                description,
                rating,
                image,
                hasPrime,
                category,
              }) => (
                <CheckoutProduct
                  id={id}
                  price={price}
                  title={title}
                  image={image}
                  description={description}
                  rating={rating}
                  hasPrime={hasPrime}
                  category={category}
                />
              )
            )}
          </div>
        </div>
        {items.length > 0 && (
          <div className="flex flex-col flex-grow bg-white m-5 p-10 shadow-md">
            <span className="font-bold">
              Total Price({items.length}):{" "}
              <Currency quantity={totalPrice} currency="usd" />
            </span>
            <button
              className={`btn text-xs mt-2 ${
                !session &&
                "from-gray-300 to-gray-500 border-gray-300 text-gray-200 cursor-not-allowed"
              }`}
            >
              {!session ? "kindly signin" : "proceed to checkout"}
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default checkout;
