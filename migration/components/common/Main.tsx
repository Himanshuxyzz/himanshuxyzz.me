import React from "react";
import Header from "./Header";
import ContentSection from "./ContentSection";
import Footer from "./Footer";

type MainProps = {
  children: React.ReactNode;
};

const Main: React.FC<MainProps> = ({ children }) => {
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
