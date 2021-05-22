import Image from "next/image";
import {
  SearchIcon,
  ShoppingCartIcon,
  MenuIcon,
} from "@heroicons/react/outline";

import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";

function Header() {
  const [session] = useSession();
  const router = useRouter();
  return (
    <header>
      <div className="flex flex-grow items-center bg-amazon_blue p-1">
        <div className="mt-1 flex flex-grow items-center sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden md:flex flex-grow items-center rounded bg-yellow-400">
          <input
            type="text"
            className="flex-grow p-2 w-6 h-10 rounded-l-md flex-shrink focus:outline-none"
          />
          <SearchIcon className="h-10 p-3 0 link hover:bg-yellow-500 hover:rounded-r-md " />
        </div>
        <div className="text-white ml-6 flex items-center space-x-6 whitespace-nowrap">
          <div
            onClick={session ? signOut : signIn}
            className="flex flex-col  link"
          >
            <span className="text-sm text-gray-300">
              {session ? `hello ${session.user.name}` : "signin"}
            </span>
            <span className="font-bold">Acount & Lists</span>
          </div>
          <div className="flex flex-col link">
            <span className="text-sm text-gray-300">Returns</span>
            <span className="font-bold">& Orders</span>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className=" flex items-center relative link"
          >
            <span className="absolute top-0 right-10 text-sm bg-yellow-400 w-4 rounded-full font-extrabold text-black text-center">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <span className="hiddden md:inline mt-2">Basket</span>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-amazon_blue-light flex items-center py-1 pl-6 text-white space-x-6">
          <span className="flex space-x-2">
            <MenuIcon className="h-6" />
            <p>All</p>
          </span>
          <span className="">Todays Deals</span>
          <span className="">Customer Service</span>
          <span className="">Gift Cards</span>
          <span className="hidden lg:inline-flex">Registry</span>
          <span className="hidden lg:inline-flex">Groceries</span>
          <span className="hidden lg:inline-flex">Electronics</span>
          <span className="hidden lg:inline-flex">Clothes</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
