import ContentWrapper from "@/components/layout/ContentWrapper";

type ContentSectionProps = {
  children: React.ReactNode;
};

const ContentSection: React.FC<ContentSectionProps> = ({ children }) => {
  return (
    <ContentWrapper
      className={"w-content flex flex-col justify-center pt-8 gap-8 pb-12"}
    >
      {children}
    </ContentWrapper>
  );
};

export default ContentSection;
