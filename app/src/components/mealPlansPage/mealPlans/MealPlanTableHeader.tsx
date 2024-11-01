import React from "react";

export default function MealPlanTableHeader() {
  return (
    <>
      {/* master header */}
      <div className="h-fit col-span-11 grid grid-cols-11 gap-2">
        <p className="col-span-6 w-full bg-primary text-white text-center">
          Rekomendasi Meal Plans
        </p>
        <p className="col-span-5 w-full bg-primary text-white text-center">
          Target
        </p>
      </div>

      {/* padding */}
      <span className="col-span-1" />

      {/* sorting headers */}
      {/* rekomendasi meal plans */}
      <div className="col-span-6 grid grid-cols-3 gap-2">
        <div
          className="flex items-center gap-2 hover:cursor-pointer"
          onClick={() => {}}
        >
          <p className="text-lg text-black">Paket</p>
          <img
            className="size-2"
            src="/arrow_down_icon.svg"
            alt="arrow down icon"
          />
        </div>
        <div
          className="flex items-center gap-2 hover:cursor-pointer"
          onClick={() => {}}
        >
          <p className="text-lg text-black">Harga</p>
          <img
            className="size-2"
            src="/arrow_down_icon.svg"
            alt="arrow down icon"
          />
        </div>
        <div
          className="flex items-center gap-2 hover:cursor-pointer"
          onClick={() => {}}
        >
          <p className="text-lg text-black">Bahan Pangan</p>
          <img
            className="size-2"
            src="/arrow_down_icon.svg"
            alt="arrow down icon"
          />
        </div>
      </div>

      {/* target */}
      <div className="col-span-5 grid grid-cols-3 gap-2">
        <div
          className="flex items-center gap-2 hover:cursor-pointer"
          onClick={() => {}}
        >
          <p className="text-lg text-black">Karbo</p>
          <img
            className="size-2"
            src="/arrow_down_icon.svg"
            alt="arrow down icon"
          />
        </div>
        <div
          className="flex items-center gap-2 hover:cursor-pointer"
          onClick={() => {}}
        >
          <p className="text-lg text-black">Protein</p>
          <img
            className="size-2"
            src="/arrow_down_icon.svg"
            alt="arrow down icon"
          />
        </div>
        <div
          className="flex items-center gap-2 hover:cursor-pointer"
          onClick={() => {}}
        >
          <p className="text-lg text-black">Kalori</p>
          <img
            className="size-2"
            src="/arrow_down_icon.svg"
            alt="arrow down icon"
          />
        </div>
      </div>
    </>
  );
}
