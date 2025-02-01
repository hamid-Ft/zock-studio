import React from "react";
import Contact from "./_components/Contact";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Contact />

      {children}
    </main>
  );
};

export default Layout;
