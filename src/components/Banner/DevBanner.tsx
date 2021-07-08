import React from "react";
import {
  Box,
  Flex,
  Input,
  MenuButton,
  useDisclosure,
  MenuList,
  Heading,
  Image,
  Text,
  IconButton,
  Center,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { Earth } from "./earth";
import { useStore } from "../../store";
import { Link } from "@chakra-ui/react";
import { observer, useLocalStore } from "mobx-react-lite";
import { useMediaQuery } from "@chakra-ui/react";
// @ts-ignore
import bannerMobileBg from "@/assets/images/dev/banner_mobile_bg.png";

export const DevBanner = observer(() => {
  const { lang } = useStore();
  const [isMaxThan468] = useMediaQuery("(min-width: 468px)");

  return (
    <Box
      position="relative"
      height={{
        base: "700px",
        sm: "470px",
        md: "700px",
        lg: "850px",
        xl: "1000px",
        "2xl": "1290px",
      }}
    >
      <Box
        position="absolute"
        top={{ base: "5.5rem", sm: "4rem" }}
        left=" 0"
        w="100%"
        h="60%"
        zIndex="2"
      >
        <Flex
          alignItems="left"
          justifyContent="center"
          direction="column"
          w="100%"
          h="100%"
          maxWidth={{ base: "90%", lg: "80%", "2xl": "1554px" }}
          mx="auto"
        >
          <Text
            fontSize={{
              base: "2.25rem",
              sm: "3rem",
              lg: "3.5rem",
              xl: "5.5rem",
              "2xl": "7.5rem",
            }}
            mb={{ base: "1rem" }}
            textAlign={{ base: "center", sm: "left" }}
            fontWeight="semibold"
            whiteSpace={{ base: "inherit", md: "pre-line" }}
          >
            {lang.t("dev.title")}
          </Text>
          <Text
            fontSize={{
              base: "0.75rem",
              sm: "1rem",
              lg: "1.25rem",
              xl: "1.5rem",
              "2xl": "2rem",
            }}
            mb={{ base: "7rem", sm: "2rem", xl: "3rem", "2xl": "4rem" }}
            textAlign={{ base: "center", sm: "left" }}
            whiteSpace="pre-line"
            wordBreak="break-word"
            w={{ base: "100%", md: "max-content" }}
            fontWeight="medium"
          >
            {lang.t("dev.subtitle")}
          </Text>
          <Box w={{base: "100%", md: "45%", lg: "50%", xl: "45%", "2xl": "38%"}}>
            <div id="mc_embed_signup">
              <form
                action="https://Iotex.us6.list-manage.com/subscribe/post?u=76695f0cff963129d31cdaae6&amp;id=a82d76e093"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
              >
                <div id="mc_embed_signup_scroll">
                  <label htmlFor="mce-EMAIL">
                    <Text
                      fontSize={{
                        base: "0.75rem",
                        sm: "1rem",
                        lg: "1.25rem",
                        "2xl": "1.25rem",
                      }}
                      fontWeight="normal"
                      opacity="0.5"
                    >
                      Subscribe to receive latest dev updates!
                    </Text>
                  </label>
                  <Flex
                    mt="0.5rem"
                    h={{base: "3rem", lg: "4.5rem"}}
                    css={{
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: 5,
                      "&:hover": {
                        borderColor: "#44FFB2",
                      },
                    }}
                  >
                    <Box flex="1" fontSize="1.25rem" css={{
                      '.email': {
                        fontSize: '1.25rem !important',
                        width: '100%'
                      }
                    }}>
                      <input
                        type="email"
                        name="EMAIL"
                        className="email"
                        id="mce-EMAIL"
                        placeholder="Email"
                        required
                      />
                    </Box>
                    <div
                      style={{ position: "absolute", left: " -5000px" }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_76695f0cff963129d31cdaae6_a82d76e093"
                        tabIndex={-1}
                      />
                    </div>
                    <Box w={{base: "", md: "", lg: "8rem"}} css={{
                      '.button': {
                        width: "100% !important",
                        fontSize: "1.25rem !important"
                      }
                    }}>
                      <div className="clear">
                        <input
                          type="submit"
                          value="Submit"
                          name="Submit"
                          id="mc-embedded-subscribe"
                          className="button"
                        />
                      </div>
                    </Box>
                  </Flex>
                </div>
              </form>
            </div>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
});
