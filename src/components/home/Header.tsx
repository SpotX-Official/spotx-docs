import React from "react";
import spotxLogo from "../../../assets/logo/logo.png";
import Button from "../atoms/Button";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex justify-center min-h-[70vh] items-center">
      <div className="p-12">
        {/* <div className="overflow-hidden shrink-0">
          <img
            alt="Spotx logo"
            className="rounded-full w-[80vw] max-w-[300px] h-auto"
            src={spotxLogo}
          />
        </div> */}
        <div className="text-center">
          <h3 className="text-[min(112px,18vw)] font-semibold font-display">SPOTX</h3>
          <p className="text-[min(24px,4vw)] sm:-mt-12 -mt-8 font-medium font-display">
            A MULTI-PURPOSE AD-BLOCKER
          </p>
          <p className="-mt-2 max-w-[max(80%,280px)] mx-auto">
            A versatile ad-blocker designed for the Spotify desktop application
            on Windows, Linux, and Mac platforms
          </p>

          <div className="flex justify-center gap-3">
            <Button as="a" props={{ href: "guide/getting-started" }}>
              Get started
            </Button>
            <Button
              as="a"
              props={{ href: "guide/installation-guide/hello" }}
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
