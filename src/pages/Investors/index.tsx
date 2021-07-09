import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store/index";
import {
  Flex,
  Box,
  Text,
  Image,
  SimpleGrid,
  Img,
  Center,
} from "@chakra-ui/react";
import BasicLayout from "../../Layouts/BasicLayout";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { useMediaQuery } from "@chakra-ui/react";
import CountTo from "react-count-to";
// @ts-ignore
import delegate from "@/assets/images/token/delegate.png";
// @ts-ignore
import iotexOverflowBanner from "@/assets/images/token/iotex_overflow_banner.png";
// @ts-ignore
import staking from "@/assets/images/token/staking.png";

export const Investors = observer(() => {
  const { lang } = useStore();
  const [isMaxThan768] = useMediaQuery("(min-width: 768px)");

  const iotexOverview = [
    {
      name: lang.t("overview1"),
      amount: 252359332,
      unit: "$",
      isAnimate: false,
      total: "252,359,332",
    },
    {
      name: lang.t("overview3"),
      amount: 9626124332,
      unit: "",
      isAnimate: false,
      total: "9,626,124,332",
    },
    {
      name: lang.t("token.price"),
      amount: 0.02025,
      unit: "$",
      isAnimate: false,
      total: "0.02025",
    },
  ];
  const [overviews, setOverviews] = useState(iotexOverview);

  const changeAnimateStatus = (index) => {
    const old = [...overviews];
    old[index].isAnimate = true;
    setOverviews(old);
  };

  const physical = [
    {
      title: lang.t("do1"),
      icon: "/images/investors/buy.png",
      desc: lang.t("do1.tips"),
      href: "https://ecosystem.iotex.io/exchanges-wallets"
    },
    {
      title: lang.t("do2"),
      icon: "/images/dev/trade.png",
      desc: lang.t("do2.tips"),
      href: "https://mimo.finance/"
    },
    {
      title: lang.t("do3"),
      icon: "/images/investors/stake.png",
      desc: lang.t("do3.tips"),
      href: "https://onboard.iotex.io/hardware/staking-voting"
    },
    {
      title: lang.t("do4"),
      icon: "/images/investors/contribute.png",
      desc: lang.t("do4.tips"),
      href: "https://onboard.iotex.io/hardware/delegates"
    },
  ];

  const roles = [
    {
      name: lang.t("investors"),
      btn: lang.t("explore"),
      icon: "/images/get_start_card1.png",
      href: "https://ecosystem.iotex.io/exchanges-wallets",
      lists: [lang.t("exchanges"), lang.t("wallet"), lang.t("dex")],
    },
    {
      name: lang.t("ecosystem"),
      btn: lang.t("tbd"),
      icon: "/images/get_start_card2.png",
      href: "https://ecosystem.iotex.io/projects",
      lists: [lang.t("projects"), lang.t("partners")],
    },
    {
      name: lang.t("advanced.users"),
      btn: lang.t("tbd"),
      icon: "/images/get_start_card3.png",
      href: "https://iotex.io/advanced",
      lists: [lang.t("staking"), lang.t("burn.drop"), lang.t("ioTT.network")],
    },
  ];

  const utility = [
    {
      title: lang.t("iotx.utility.card1"),
      bg: "/images/card1.png",
      desc: lang.t("iotx.utility.card1.desc"),
    },
    {
      title: lang.t("iotx.utility.card2"),
      bg: "/images/card3.png",
      desc: lang.t("iotx.utility.card2.desc"),
    },
    {
      title: lang.t("iotx.utility.card3"),
      bg: "/images/card2.png",
      desc: lang.t("iotx.utility.card3.desc"),
    },
    {
      title: lang.t("iotx.utility.card4"),
      bg: "/images/card4.png",
      desc: lang.t("iotx.utility.card4.desc"),
    },
  ];

  return (
    <BasicLayout>
      <Box
        css={{
          backgroundImage: `url(/images/investors/banner.png)`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* banner */}
        <Flex
          alignItems="center"
          direction="column"
          pt={{
            base: "5rem",
            sm: "8rem",
            md: "8rem",
            lg: "14rem",
            xl: "16rem",
            "2xl": "22rem",
          }}
          pb={{
            base: "8rem",
            sm: "8rem",
            md: "8rem",
            lg: "14rem",
            xl: "25rem",
            "2xl": "32rem",
          }}
        >
          <Text
            fontSize={{
              base: "2.25rem",
              sm: "3rem",
              lg: "3.5rem",
              xl: "5.5rem",
              "2xl": "7.5rem",
            }}
            fontWeight="semibold"
            color="white"
            w="90%"
            textAlign="center"
            whiteSpace={{ base: "inherit", md: "pre-line" }}
          >
            {lang.t("investors.title")}
          </Text>
          <Text
            fontSize={{
              base: "0.875rem",
              sm: "1rem",
              lg: "1.125rem",
              xl: "1.5rem",
              "2xl": "2.5rem",
            }}
            fontWeight="medium"
            color="white"
            w="80%"
            textAlign="center"
            whiteSpace={{ base: "inherit", md: "pre-line" }}
          >
            {lang.t("investors.subtitle")}
          </Text>
        </Flex>

        <Box
          css={{
            backgroundImage: `url(${iotexOverflowBanner})`,
            backgroundSize: isMaxThan768 ? "60%" : "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0 0",
          }}
        >
          {/* iotex overview */}
          <Flex
            maxWidth={{ base: "90%", lg: "85%", "2xl": "1554px" }}
            mx="auto"
            justifyContent="space-between"
            alignItems="flex-end"
            flexDirection={{ base: "column", md: "row" }}
            pb={{ base: "6rem", lg: "10rem", "2xl": "15rem" }}
          >
            <Box
              w={{ base: "100%", md: "48%", lg: "48%", "2xl": "50%" }}
              mb={{ base: "2rem", sm: "4.5rem" }}
            >
              <Text
                fontSize={{
                  base: "1.8rem",
                  sm: "1.875rem",
                  lg: "3rem",
                  xl: "4rem",
                  "2xl": "5rem",
                }}
                w={{ base: "100%", md: "70%", lg: "max-content" }}
                textAlign={{ base: "center", sm: "left" }}
                whiteSpace={{ base: "inherit", lg: "pre-line" }}
                fontWeight="semibold"
                mb={{ base: "1.5rem", md: "3rem" }}
                letterSpacing="4px"
              >
                {lang.t("investors.title1")}
              </Text>
              <Text
                fontSize={{
                  base: "0.875rem",
                  md: "0.8rem",
                  lg: "1rem",
                  xl: "1.5rem",
                  "2xl": "1.75rem",
                }}
                textAlign={{ base: "center", sm: "left" }}
                whiteSpace={{ base: "pre-line", lg: "inherit" }}
                fontWeight="medium"
                opacity="0.85"
              >
                {lang.t("investors.subtitle1")}
              </Text>
            </Box>
            <Box
              w={{ base: "100%", md: "40%", lg: "40%", "2xl": "40%" }}
              mb={{ base: "4rem", md: 0 }}
            >
              {overviews.map((item, index) => {
                return (
                  <Flex
                    key={item.name}
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    mb={{ base: "2rem", sm: "4rem" }}
                  >
                    <Text
                      fontSize={{
                        base: "1rem",
                        lg: "1.25rem",
                        "2xl": "1.5rem",
                      }}
                      color="discord"
                      letterSpacing="1.5px"
                      mr="0.5rem"
                      fontWeight="medium"
                    >
                      {item.name}
                    </Text>
                    <Text
                      fontSize={{
                        base: "1.75rem",
                        lg: "2.75rem",
                        "2xl": "3.75rem",
                      }}
                      letterSpacing="3.5px"
                      fontWeight="medium"
                    >
                      {item.unit}
                      {item.isAnimate ? (
                        item.total
                      ) : (
                        <CountTo
                          from={0}
                          to={item.amount}
                          speed={3000}
                          digits={index === 2 ? 6 : 0}
                          onComplete={() => changeAnimateStatus(index)}
                        />
                      )}
                    </Text>
                  </Flex>
                );
              })}
            </Box>
          </Flex>

          {/* What is IOTX? */}
          <Box
            mb={{ base: "10rem", md: "12rem", xl: "19rem" }}
            css={{
              backgroundImage: `url(/images/investors/what_is_iotx.png)`,
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Box
              maxWidth={{ base: "90%", lg: "85%", "2xl": "1554px" }}
              mx="auto"
            >
              {/* What is IOTX? */}
              <Flex
                pt={{ base: "", md: "7.5rem", xl: "12.5rem" }}
                mb={{
                  base: "3rem",
                  sm: "4rem",
                  md: "7rem",
                  lg: "12rem",
                  xl: "16rem",
                  "2xl": "32.75rem",
                }}
              >
                <Box w={{ base: "0", md: "50%" }} />
                <Box w={{ base: "100%", md: "50%" }}>
                  <Text
                    fontSize={{
                      base: "1.8rem",
                      sm: "1.875rem",
                      lg: "3rem",
                      xl: "4rem",
                      "2xl": "5rem",
                    }}
                    textAlign={{ base: "center", sm: "left" }}
                    whiteSpace={{ base: "inherit", lg: "pre-line" }}
                    fontWeight="semibold"
                    mb={{ base: "1.5rem", md: "3rem" }}
                    letterSpacing="4px"
                  >
                    {lang.t("investors.title2")}
                  </Text>
                  <Text
                    fontSize={{
                      base: "0.875rem",
                      md: "0.8rem",
                      lg: "1rem",
                      xl: "1.5rem",
                      "2xl": "1.75rem",
                    }}
                    textAlign={{ base: "center", sm: "left" }}
                    whiteSpace={{ base: "pre-line", lg: "inherit" }}
                    fontWeight="medium"
                    opacity="0.85"
                    lineHeight="1.8"
                  >
                    {lang.t("investors.subtitle2")}
                  </Text>
                </Box>
              </Flex>

              {/* why iotx */}
              <Box
                w={{ base: "100%", md: "38%" }}
                mb={{
                  base: "3rem",
                  sm: "4rem",
                  md: "4.5rem",
                  lg: "8rem",
                  xl: "11rem",
                  "2xl": "15rem",
                }}
              >
                <Text
                  fontSize={{
                    base: "1.8rem",
                    sm: "1.875rem",
                    lg: "3rem",
                    xl: "4rem",
                    "2xl": "5rem",
                  }}
                  textAlign={{ base: "center", sm: "left" }}
                  whiteSpace={{ base: "inherit", lg: "pre-line" }}
                  fontWeight="semibold"
                  mb={{ base: "1.5rem", md: "3rem" }}
                  letterSpacing="4px"
                >
                  {lang.t("investors.title3")}
                </Text>
                <Text
                  fontSize={{
                    base: "0.875rem",
                    md: "0.8rem",
                    lg: "1rem",
                    xl: "1.5rem",
                    "2xl": "1.75rem",
                  }}
                  textAlign={{ base: "center", sm: "left" }}
                  whiteSpace={{ base: "pre-line", lg: "inherit" }}
                  fontWeight="medium"
                  opacity="0.85"
                  lineHeight="1.8"
                >
                  {lang.t("investors.subtitle3")}
                </Text>
              </Box>

              {/* why iotx */}
              <Box
                w={{ base: "100%", md: "38%" }}
                pb={{
                  base: "0",
                  sm: "4rem",
                  md: "6rem",
                  lg: "8rem",
                  xl: "11rem",
                  "2xl": "12rem",
                }}
              >
                <Text
                  fontSize={{
                    base: "1.8rem",
                    sm: "1.875rem",
                    lg: "3rem",
                    xl: "4rem",
                    "2xl": "5rem",
                  }}
                  textAlign={{ base: "center", sm: "left" }}
                  whiteSpace={{ base: "inherit", lg: "pre-line" }}
                  fontWeight="semibold"
                  letterSpacing="4px"
                >
                  {lang.t("investors.title4")}
                </Text>
                <Text
                  fontSize={{
                    base: "0.875rem",
                    md: "0.8rem",
                    lg: "1rem",
                    xl: "1.5rem",
                    "2xl": "1.75rem",
                  }}
                  textAlign={{ base: "center", sm: "left" }}
                  whiteSpace={{ base: "pre-line", lg: "inherit" }}
                  fontWeight="medium"
                  opacity="0.85"
                  lineHeight="1.8"
                >
                  {lang.t("investors.subtitle4")}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        css={{
          backgroundImage: `url(${delegate})`,
          backgroundSize: isMaxThan768 ? "58%" : "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: isMaxThan768 ? "100% 50%" : "100% 55%",
        }}
      >
        <Box maxWidth={{ base: "90%", lg: "85%", "2xl": "1554px" }} mx="auto">
          {/* What You Can Do with IOTX? */}
          <Flex
            justifyContent="space-between"
            mb={{ base: "25rem", md: "15rem", xl: "32rem" }}
            flexDirection={{ base: "column-reverse", md: "row" }}
          >
            <Box w={{ base: "100%", md: "40%", xl: "28%", "2xl": "20vw" }}>
              {physical.map((item) => {
                return (
                  <a href={item.href} key={item.title} target="_blank">
                    <Flex
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    mb="4.375rem"
                  >
                    <Image
                      boxSize="4rem"
                      objectFit="cover"
                      src={item.icon}
                      alt={item.title}
                      mb="1rem"
                    />
                    <Flex alignItems="center" mb="1rem">
                      <Text
                        fontSize={{
                          base: "1rem",
                          lg: "1.25rem",
                          "2xl": "1.75rem",
                        }}
                        fontWeight="semibold"
                        mr="1rem"
                      >
                        {item.title}
                      </Text>
                      <Image
                        boxSize="2rem"
                        objectFit="cover"
                        src="/images/dev/link2.svg"
                        alt="arrow"
                      />
                    </Flex>
                    <Text
                      fontSize={{
                        base: "0.875rem",
                        lg: "0.875rem",
                        "2xl": "1.125rem",
                      }}
                      color="grayColor3"
                      fontWeight="medium"
                      w={{ base: "95%", md: "100%" }}
                    >
                      {item.desc}
                    </Text>
                  </Flex>
                  </a>
                );
              })}
            </Box>
            <Box w={{ base: "100%", md: "52%" }} mb={{ base: "4rem", md: 0 }}>
              <Text
                fontSize={{
                  base: "1.8rem",
                  sm: "1.875rem",
                  lg: "3rem",
                  xl: "4rem",
                  "2xl": "5rem",
                }}
                textAlign={{ base: "center", sm: "left" }}
                whiteSpace={{ base: "inherit", lg: "pre-line" }}
                fontWeight="semibold"
                mb={{ base: "1.5rem", md: "3rem" }}
                letterSpacing="4px"
              >
                {lang.t("investors.title5")}
              </Text>
              <Text
                fontSize={{
                  base: "0.875rem",
                  md: "0.8rem",
                  lg: "1rem",
                  xl: "1.5rem",
                  "2xl": "1.75rem",
                }}
                textAlign={{ base: "center", sm: "left" }}
                whiteSpace={{ base: "pre-line", lg: "inherit" }}
                fontWeight="medium"
                opacity="0.85"
                lineHeight="1.8"
                mb="4rem"
              >
                {lang.t("investors.subtitle5.1")}
              </Text>
              <Text
                fontSize={{
                  base: "0.875rem",
                  md: "0.8rem",
                  lg: "1rem",
                  xl: "1.5rem",
                  "2xl": "1.75rem",
                }}
                textAlign={{ base: "center", sm: "left" }}
                whiteSpace={{ base: "pre-line", lg: "inherit" }}
                fontWeight="medium"
                opacity="0.85"
                lineHeight="1.8"
              >
                {lang.t("investors.subtitle5.2")}
              </Text>
            </Box>
          </Flex>

          {/* iotx utility */}
          <Flex
            justifyContent="space-between"
            mb={{ base: "10rem", md: "15rem" }}
            flexDirection="column"
          >
            <Box
              w={{ base: "100%", md: "45%", xl: "37%" }}
              mb={{ base: "4rem", md: "7.185rem" }}
            >
              <Text
                fontSize={{
                  base: "1.8rem",
                  sm: "1.875rem",
                  lg: "3rem",
                  xl: "4rem",
                  "2xl": "5rem",
                }}
                textAlign={{ base: "center", sm: "left" }}
                whiteSpace={{ base: "inherit", lg: "pre-line" }}
                fontWeight="semibold"
                letterSpacing="4px"
                mb={{ base: "1.5rem", md: "3rem" }}
              >
                {lang.t("intro.title4")}
              </Text>
              <Text
                fontSize={{
                  base: "0.875rem",
                  md: "0.8rem",
                  lg: "1rem",
                  xl: "1.5rem",
                  "2xl": "1.75rem",
                }}
                textAlign={{ base: "center", sm: "left" }}
                whiteSpace={{ base: "pre-line", lg: "inherit" }}
                fontWeight="medium"
                opacity="0.85"
                lineHeight="1.8"
                mb="4rem"
              >
                {lang.t("intro.subtitle4")}
              </Text>
              <Button
                href="https://onboard.iotex.io/tokenomics/iotx-utility"
                size={{ base: "100%", md: "80%" }}
                name={lang.t("utility.details")}
              />
            </Box>
            <Box h="100%">
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                {utility.map((item) => {
                  return (
                    <Flex
                      flexDirection="column"
                      alignItems="flex-start"
                      px={{ base: "2rem", lg: "1.2rem", "2xl": "2rem" }}
                      py={{ base: "2rem", xl: "3rem", "2xl": "4rem" }}
                      key={item.title}
                      css={{
                        backgroundImage: `url(${item.bg})`,
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "20px",
                      }}
                    >
                      <Text
                        fontSize={{
                          base: "1.5rem",
                          lg: "1.25rem",
                          xl: "1.5rem",
                          "2xl": "2rem",
                        }}
                        fontWeight="semibold"
                        mb={{ base: "1rem", sm: "1rem", md: "0.5rem" }}
                      >
                        {item.title}
                      </Text>
                      <Text fontSize={{ base: "1.125rem", "2xl": "1.125rem" }}>
                        {item.desc}
                      </Text>
                    </Flex>
                  );
                })}
              </SimpleGrid>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* start.using.iotx */}
      <Box
        css={{
          backgroundImage: `url(/images/investors/start_using_iotx.png)`,
          backgroundSize: "50%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: '100% 0'
        }}
      >
        <Box
          maxWidth={{ base: "90%", md: "80%", "2xl": "1554px" }}
          mb={{ base: "10rem", lg: "15rem", "2xl": "15rem" }}
          mx="auto"
          id="getStarted"
        >
          <Text
            fontSize={{
              base: "1.8rem",
              sm: "1.875rem",
              lg: "2.5rem",
              xl: "4rem",
            }}
            fontWeight="semibold"
            mb={{ base: "3rem", lg: "5rem" }}
            whiteSpace="pre-line"
            textAlign="center"
          >
            {lang.t("start.using.iotx")}
          </Text>
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            justifyContent="space-between"
            alignItems="stretch"
          >
            {roles.map((item) => {
              return (
                <Flex
                  flexDirection="column"
                  w={{ base: "90%", sm: "50%", md: "28%", "2xl": "25%" }}
                  mx="auto"
                  py="3rem"
                  mb={{ base: "4rem", lg: 0 }}
                  css={{
                    backgroundImage: `url(${item.icon})`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "100% 0%",
                  }}
                >
                  <Text
                    fontSize={{ base: "1.25rem", lg: "1.5rem", "2xl": "2rem" }}
                    fontWeight="semibold"
                    mb="3rem"
                    whiteSpace="pre-line"
                    textAlign="center"
                  >
                    {item.name}
                  </Text>

                  <Box
                    flex="1"
                    mx="auto"
                    w={{ base: "90%", md: "90%", xl: "75%", "2xl": "68%" }}
                    mb="2rem"
                  >
                    {item.lists.map((option) => {
                      return (
                        <Flex alignItems="center" mb="1rem" key={option}>
                          <Image
                            boxSize="0.5rem"
                            src="/images/right-arrow.png"
                            alt=""
                            mr="0.5rem"
                          />
                          <Text
                            fontSize={{
                              base: "1rem",
                              md: "0.75rem",
                              lg: "0.875rem",
                              xl: "1rem",
                              "2xl": "1.25rem",
                            }}
                            key={option}
                            fontWeight="semibold"
                          >
                            {option}
                          </Text>
                        </Flex>
                      );
                    })}
                  </Box>

                  <Box
                    className="commonBtnBox"
                    h={{ base: "3rem", md: "3rem" }}
                    w="68%"
                    mx="auto"
                  >
                    <a href={item.href} style={{ width: "100%" }}>
                      <Flex
                        bg="btnBgColor"
                        className="commonBtn"
                        borderRadius="10px"
                        h="100%"
                        justifyContent="center"
                        alignItems="center"
                        cursor="pointer"
                      >
                        <Text
                          fontSize={{ base: "1.25rem", md: "1.25rem" }}
                          color="btnTextColor"
                          fontWeight="bold"
                          textAlign="center"
                        >
                          {item.btn}
                        </Text>
                      </Flex>
                    </a>
                  </Box>
                </Flex>
              );
            })}
          </Flex>
        </Box>
        <Footer />
      </Box>
    </BasicLayout>
  );
});
