import React from "react";
import { Flex, Heading } from "rebass";
import styled, { useTheme } from "styled-components";
import { SiDiscord, SiTwitter } from "react-icons/si";
import NavLink from "next/link";
import { LinkExternal as Link } from "components/Links";

const StyledHeader = styled.nav`
  padding: 40px 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  backdrop-filter: blur(5px);
  @media (min-width: 1024px) {
    padding: 60px 0;
  }
`;
const Header = () => {
  const { colors } = useTheme();

  return (
    <>
      <StyledHeader>
        <Flex flexBasis="50%">
          <NavLink href="/">
            <Heading fontSize={[5, 6]}>Tata Neus</Heading>
          </NavLink>
        </Flex>
        <Flex
          flexBasis={["50%"]}
          justifyContent="flex-end"
          alignItems="center"
          pl={[3]}
        >
          <Link href="https://twitter.com/search?q=%23TataNeu&src=hash" target="_blank" rel="noopener noreferrer">
            <SiTwitter fill={colors.light} size="36px" />
          </Link>
        </Flex>
      </StyledHeader>
    </>
  );
};

export default Header;
