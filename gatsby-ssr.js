import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link key="favicon" rel="icon" type="image/png" href="/app-logo.png" />,
  ]);
};
