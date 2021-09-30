import "./Open.css";
import React from "react";
import SideNote from "../../../utils/SideNote";
import SideBodyOpen from "!babel-loader!@mdx-js/loader!./SideBodyOpen.mdx";
import OpenMDX from "!babel-loader!@mdx-js/loader!./OpenMDX.mdx";

function Now() {
  const sideTitle = "A brief introduction to the 'Open' movement";

  return (
    <div className="open__container">
      <h1 className="open__header">Open</h1>
      <SideNote title={sideTitle} body={<SideBodyOpen />} />
      {<OpenMDX style={{ margintop: "1rem" }} />}
    </div>
  );
}

export default Now;
