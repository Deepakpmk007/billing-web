import React from "react";

export default function MainBar() {
  return (
    <section className="h-16 w-full bg-white shadow-sm shadow-gray-200 flex items-center justify-between px-10">
      <h2 className="font-bold">Billing POS</h2>
      <div>
        <ul className="flex list-none gap-3">
          <li className="w-fit px-10 bg-gray-100 text-gray-500 font-bold tracking-wide rounded-md">
            time
          </li>
          <li className="w-fit px-10 bg-green-100 text-green-500 font-bold tracking-wide rounded-md">
            Date
          </li>
          <li className="w-fit px-10 bg-blue-100 text-blue-500 font-bold tracking-wide rounded-md">
            user
          </li>
        </ul>
      </div>
    </section>
  );
}
