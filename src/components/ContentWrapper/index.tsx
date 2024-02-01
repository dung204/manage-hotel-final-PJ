import React, { PropsWithChildren } from "react";
import { ContentWrapperStyle } from "./ContentWrapper.style";

const ContentWrapper = ({ children }: PropsWithChildren) => {
  return <ContentWrapperStyle>{children}</ContentWrapperStyle>;
};

export default ContentWrapper;
