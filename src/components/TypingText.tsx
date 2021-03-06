import React from "react";
import styled from "styled-components";
import ReactTypingEffect from "react-typing-effect";

type TypingTextProps = {
  title: String;
};

const StyledTitle = styled.h1`
  font-weight: 100;
  font-size: 1.2em;
`;

export const TypingText = ({ title }: TypingTextProps) => (
  <StyledTitle>
    <ReactTypingEffect eraseDelay={100000000} cursor={" "} speed={100} typingDelay={100} text={title} />
  </StyledTitle>
);
