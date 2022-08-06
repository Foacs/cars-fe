import React from "react";

export const useMobile = (theme) => {
  const maxWidth = theme.breakpoints.values.md;

  const [isMobile, setMobile] = React.useState(window.innerWidth < maxWidth);

  React.useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < maxWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [maxWidth]);

  return isMobile;
};
