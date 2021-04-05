import React, { useState } from "react";
import "../styles/App.css";

function App() {
  let info = [
    {
      step: "STEP ONE",
      action: "Your basket",
      status: "inprogress",
    },
    {
      step: "STEP TWO",
      action: "Your details",
      status: "incomplete",
    },
    {
      step: "STEP THREE",
      action: "Payment",
      status: "incomplete",
    },
    {
      step: "STEP FOUR",
      action: "Order complete",
      status: "incomplete",
    },
  ];

  return (
    <div>
      <button
        className=" m-4 hover:translate-y-2 transform transition ease-in-out  hover:bg-red-400 bg-red-500 rounded px-4 py-2"
        onClick={() => {}}
      >
        Progress Cart
      </button>

      <div className=" flex h-screen justify-center items-center text-xl ">
        <div className=" relative bg-white w-72 h-72 shadow-xl rounded-lg"></div>
        <div className="absolute mb-4 ">
          {info.map((step) => (
            <div key={step.step}>
              <div className=" relative flex text-base mt-4 ">
                {step.status === "incomplete" ? (
                  <div className="h-4 w-4 -left-10 -bottom-2 border-gray-400 border-2 border-solid absolute rounded-full bg-gray-200"></div>
                ) : step.status === "inprogress" ? (
                  <div className="h-4 w-4 -left-10 -bottom-2 border-red-400 border-2 border-solid absolute rounded-full bg-red-200"></div>
                ) : (
                  <div>
                    <div className=" h-4 w-4 -left-10 -bottom-2 border-red-500 border-2 border-solid absolute rounded-full  text-gray-50 leading-3  bg-red-500 text-sm">
                      ✓
                    </div>
                    <div className="absolute -left-8 -bottom-14 h-12 w-1 border-l-2 border-solid border-red-500"></div>
                  </div>
                )}

                <h1 className=" tracking-tighter text-sm  font-semibold text-gray-600  ">
                  {step.step}
                </h1>
              </div>
              <p className=" -mt-2 font-bold text-gray-700 text-xl">
                {step.action}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
