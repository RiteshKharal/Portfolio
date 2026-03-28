"use client";

import Component from "./DropDown";
import { FaStar } from "react-icons/fa";

export default function NavigationDropDown() {

  return (
    <div className=" invisible md:visible ">
      <Component
      title={
        <span className="flex flex-row gap-3 h-0 text-center place-items-center-safe justify-center self-center p-0">
          <FaStar /> Modes
        </span>
      }
      options={[
        {
          OptionName: "🏠 Minimal mode",
          OptionCallBack: () => {
            window.location.href = "/";
          },
        },
        {
          OptionName: "🎮 Game mode",
          OptionCallBack: () => {
            window.location.href = "/Game";
          },
        },
      ]}
    />
    </div>
  );
}
