import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;