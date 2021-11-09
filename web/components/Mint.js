import React from "react";
import { Box, Flex, Heading } from "rebass";
import { useTheme } from "styled-components";

const Mint = ({ date, dateOptions }) => {
  const { colors } = useTheme();

  return (
    <Box
      marginTop={[5]}
      pt={[6]}
      pb={[6]}
      sx={{
        background: `linear-gradient(90deg, ${colors.accent1} 10%, transparent 100%)`,
      }}
    >
      <Flex
        maxWidth={["1024px"]}
        margin={["0 auto"]}
        flexDirection={["column"]}
        alignItems="center"
      >
        <Heading fontSize={[5, 6]} fontWeight={[700]} textAlign="center">
          Participate in v1 launch
        </Heading>
        <Heading
          fontSize={[4, 5]}
          fontWeight={[700]}
          color={colors.light1}
          textAlign="center"
          maxWidth={["600px"]}
          my={[4]}
          px={[4, 0]}
        >
          Don't miss out any update from us. Join our discord server and get
          your daily dose of rugs.
        </Heading>
      </Flex>
    </Box>
  );
};

export default Mint;
