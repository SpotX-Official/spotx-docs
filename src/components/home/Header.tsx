import React from "react";
import spotxLogo from "../../../assets/logo/logo.png";
import Button from "../atoms/Button";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex justify-center min-h-[70vh] items-center">
      <div className="flex flex-col items-center lg:flex-row gap-8 p-12">
        <div className="overflow-hidden shrink-0">
          <img
            alt="Spotx logo"
            className="rounded-full w-[80vw] max-w-[300px] h-auto"
            src={spotxLogo}
          />
        </div>
        <div className="text-center lg:text-left">
          <h3 className="text-[min(128px,16vw)] font-semibold">SPOTX</h3>
          <p className="text-[min(32px,4vw)] -mt-6 font-medium">
            A multi-purpose ad-blocker
          </p>
          <p className="-mt-2">
            A versatile ad-blocker designed for the Spotify desktop application
            on Windows, Linux, and Mac platforms{" "}
          </p>

          <div className="flex justify-center lg:justify-start gap-3">
            <Button as="a" props={{ href: "docs/quickstart" }}>
              Quick start
            </Button>
            <Button
              as="a"
              props={{ href: "docs/category/guide" }}
              color="secondary"
            >
              Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
