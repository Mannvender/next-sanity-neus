import React from "react";
import { Box, Flex } from "rebass";
import groq from "groq";

import Header from "components/Header";
import Footer from "components/Footer";
import Banner from "components/Banner";
import Quote from "components/Quote";
import Roadmap from "components/Roadmap";
import client from "client";

const Index = ({ messages }) => {
  const { heading, subHeading, ctaLabel, ctaURL } = messages[0] || {};
  console.log(heading, subHeading);
  return (
    <>
      <Box position="relative">
        <Box>
          <Flex
            maxWidth={["1024px"]}
            margin={["0 auto"]}
            flexDirection={["column"]}
          >
            <Header />
            <Banner
              heading={heading}
              subHeading={subHeading}
              ctaLabel={ctaLabel}
              ctaURL={ctaURL}
            />
          </Flex>
          <Quote />
          <Roadmap />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

Index.getInitialProps = async () => ({
  messages: await client.fetch(groq`
    *[_type == "page" && title == "Homepage"]|order(publishedAt desc)
  `),
});

export default Index;
