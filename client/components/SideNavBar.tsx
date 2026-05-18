"use client";
import React from "react";

export default function SideNavBar() {
  return (
    <nav className="side_bar bg-blue-950 h-screen w-52">
      <ul className="list-none flex flex-col gap-3">
        <li>🍽️ Breakfast & Tiffin</li>
        <li>🌾 Village Specials</li>
        <li>🫓 Parotta & Main</li>
        <li>🍗 Meat Specials</li>
        <li>🍲 Gravies</li>
        <li>🍜 Rice & Noodles</li>

        <li>☕ Beverages</li>
        <li>🥨 Snacks</li>
        <li>🍦 Ice Cream</li>
        <li>🥤 Cool Drinks</li>
      </ul>
    </nav>
  );
}
