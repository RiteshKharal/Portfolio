"use client";

import Component from "./DropDown";

export default function NavigationDropDown() {
  return (
    <Component
      title="⭐ Modes"
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
  );
}
