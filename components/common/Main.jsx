import React from "react";
import Header from "./Header";
import ContentSection from "./ContentSection";

const Main = ({ children }) => {
  return (
    <section className="h-full">
      <Header />
      <ContentSection>
        {children}
        </ContentSection>
    </section>
  );
};

export default Main;
