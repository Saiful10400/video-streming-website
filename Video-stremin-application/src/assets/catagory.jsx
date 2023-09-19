import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Catagory = () => {
  const [colaps, setcolaps] = useState(true);
  console.log(colaps);
  return (
    <>
      <div className="hidden lg:flex justify-center list-none gap-4 text-md font-bold bg-black text-white border-y-2 py-2  ">
        <button className="hover:text-gray-300 hover:scale-150 transition-all">
          Bangla
        </button>
        <button className="hover:text-gray-300 hover:scale-150 transition-all">
          Boliwood
        </button>
        <button className="hover:text-gray-300 hover:scale-150 transition-all">
          Holiwood
        </button>
        <button className="hover:text-gray-300 hover:scale-150 transition-all">
          Tamil
        </button>
      </div>
      <div>


     
          <div
            className="text-white inline-block text-4xl lg:hidden sticky top-0 "
            onClick={() => setcolaps(!colaps)}
          >
            <RxHamburgerMenu
              className={colaps ? "inline-block" : "hidden"}
            ></RxHamburgerMenu>
            <RxCross1 className={colaps ? "hidden" : "inline-block"}></RxCross1>
          </div>
     


      </div>

      <div
        className={
          colaps
            ? "hidden"
            : "flex flex-col bg-red-300 rounded-lg absolute w-full"
        }
      >
        <button className="hover:text-gray-300 hover:scale-150 transition-all">
          Bangla
        </button>
        <button className="hover:text-gray-300 hover:scale-150 transition-all">
          Boliwood
        </button>
        <button className="hover:text-gray-300 hover:scale-150 transition-all">
          Holiwood
        </button>
        <button className="hover:text-gray-300 hover:scale-150 transition-all">
          Tamil
        </button>
      </div>
    </>
  );
};

export default Catagory;
