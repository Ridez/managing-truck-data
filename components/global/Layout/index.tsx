import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="container px-4 lg:my-24 my-12">{children}</div>;
};

export default Layout;
