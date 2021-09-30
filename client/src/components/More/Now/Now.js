import "./Now.css";
import React from "react";
import SideNote from "../../../utils/SideNote";
import SideBodyNow from "!babel-loader!@mdx-js/loader!./SideBodyNow.mdx";
import NowMDX from "!babel-loader!@mdx-js/loader!./NowMDX.mdx";

function Now() {
  const sideTitle = "A brief introduction to 'Now' pages";

  return (
    <div className="now__container">
      <h1 className="now__header">Now</h1>
      <SideNote title={sideTitle} body={<SideBodyNow />} />
      {<NowMDX style={{ margintop: "1rem" }} />}
    </div>
  );
}

export default Now;
