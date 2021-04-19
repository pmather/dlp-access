import React from "react";

export const SiteContext = React.createContext({
  site: null,
  updateSite: () => {}
});

export default SiteContext;
