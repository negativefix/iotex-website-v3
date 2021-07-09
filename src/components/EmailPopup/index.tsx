import React, { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useStore } from "@/store/index";
import { observer, useLocalStore } from "mobx-react-lite";

export const EmailPopup = observer(({}) => {
  const { lang } = useStore();
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
    window.localStorage.setItem('isShowEmail', 'show')
  };
  
  useEffect(() => {
    console.log()
    if(window.localStorage.getItem('isShowEmail') === null ) {
      setTimeout(() => {
        setIsOpen(true)
      }, 2000);
    }
  }, [])

  return (
    <>
      {isOpen && (
        <Box w="100vw" h="100vh" overflow="hidden" position="absolute" top="0">
          <Box
            position="fixed"
            top="0"
            left="0"
            zIndex="999"
            w="100%"
            h="100%"
            bg="rgba(0,0,0,0.5)"
            onClick={onClose}
          ></Box>
          <Box
            position="fixed"
            top="50%"
            left="50%"
            zIndex="1001"
            transform="translateX(-50%) translateY(-50%)"
            outline="none"
            bg="white"
            w={{ base: "90%", md: "50vw" }}
            display="flex"
          >
            <Box w="40%"></Box>
            <Box w="60%" py="1.5rem" px="2rem">
              <Text
                fontSize={{ base: "1.5rem", lg: "1.75rem" }}
                fontWeight="medium"
                lineHeight="2rem"
                mb="3rem"
                color="bgColor"
              >
                {lang.t("stay.updated")}
              </Text>
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
                        color="bgColor"
                      >
                        {lang.t("email")}
                      </Text>
                    </label>
                    <Box
                        fontSize="1.25rem"
                        border="1px"
                        borderColor="bgColor"
                        h="60px"
                        css={{
                          ".email": {
                            fontSize: "1.25rem !important",
                            width: "100%",
                          },
                        }}
                      >
                        <input
                          type="email"
                          name="EMAIL"
                          className="email"
                          id="mce-EMAIL"
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
                      <Flex
                        justifyContent="flex-end"
                        w="100%"
                        my="3rem"
                        css={{
                          ".button": {
                            width: "100% !important",
                            fontSize: "1.375rem !important",
                            padding: "10px 15px !important",
                          },
                        }}
                      >
                        <div className="clear">
                          <input
                            type="submit"
                            value={lang.t("join.mailing.list")}
                            name="Submit"
                            id="mc-embedded-subscribe"
                            className="button"
                          />
                        </div>
                      </Flex>
                      <Text color="bgColor">{lang.t("emailpopup.tips")}</Text>
                  </div>
                </form>
              </div>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
});
