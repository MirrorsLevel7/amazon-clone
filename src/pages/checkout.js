import Header from "../Components/Header";
import Image from "next/image";

function checkout() {
  return (
    <div>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <div>
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">Your Shopping Basket</h1>
          </div>
        </div>
      </main>
    </div>
  );
}

export default checkout;
