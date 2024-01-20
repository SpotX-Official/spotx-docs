import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex justify-center">
      <div className="flex gap-8 p-12">
        <div>LOGO</div>
        <div className="space-y-4">
          <h3 className="text-5xl font-semibold">SpotX</h3>
          <p>A multi-purpose ad-blocker</p>

          <div className="flex gap-2">
            <button className="text-lg font-medium text-white bg-primary rounded-lg px-6 py-2">Get started</button>
            <button className="text-lg font-medium bg-slate-200 rounded-lg px-6 py-2 text-gray-950">FAQ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
