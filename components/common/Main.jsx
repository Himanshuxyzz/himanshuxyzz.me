import React from "react";
import Header from "./Header";
import ContentSection from "./ContentSection";
import Footer from "./Footer";

const Main = ({ children }) => {
  return (
    <>
      <Header />
      <section className="h-full">
        <ContentSection>{children}</ContentSection>
      </section>
      <Footer />
    </>
  );
};

export default Main;
