import React from "react";
import Commands from "../../../docs/_quickstart.mdx";

type Props = {};

const QuickStart = (props: Props) => {
  return (
    <div>
      <h3 className="text-3xl font-semibold mb-2">Quick Start</h3>
      <Commands />
    </div>
  );
};

export default QuickStart;
