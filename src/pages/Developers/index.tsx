import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store/index";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import BasicLayout from "../../Layouts/BasicLayout";
import { DevBanner } from "@/components/Banner/DevBanner";
import { LogoCardItem } from "@/components/LogoCardItem/index";
import { Footer } from "@/components/Footer/index";
import { Button } from "@/components/Button/index";
import { useMediaQuery } from "@chakra-ui/react";
import { BuildOnIotex } from "./components/BuildOnIotex/index";

import bgThree from "@/assets/images/dev/bg_3.png";
import develop from "@/assets/images/dev/develop.png";

export const Developers = observer(() => {
  const { lang } = useStore();
  const [isMaxThan468] = useMediaQuery("(min-width: 468px)");
  const [isMaxThan768] = useMediaQuery("(min-width: 768px)");
  const tools = [
    { name: lang.t("tool1"), icon: "/images/dev/tool1.png" },
    { name: lang.t("tool2"), icon: "/images/dev/tool2.png" },
    { name: lang.t("tool3"), icon: "/images/dev/smart-contracts.png" },
    { name: lang.t("tool4"), icon: "/images/dev/evm-compatible.png" },
    { name: lang.t("tool5"), icon: "/images/dev/tool5.png" },
    { name: lang.t("tool6"), icon: "/images/dev/tool6.png" },
    { name: lang.t("tool7"), icon: "/images/dev/tool7.png" },
  ];

  const achieve = [
    {
      icon: "/images/dev/app.png",
      desc: lang.t("achieve.item1"),
    },
    {
      icon: "/images/dev/icon_world.png",
      desc: lang.t("achieve.item2"),
    },
    {
      icon: "/images/dev/icon_smart_contract.png",
      desc: lang.t("achieve.item3"),
    },
  ];

  const physical = [
    {
      title: lang.t("launch.dapp"),
      icon: "/images/dev/app.png",
      desc: lang.t("launch.dapp.desc"),
    },
    {
      title: lang.t("launch.token"),
      icon: "/images/dev/token.png",
      desc: lang.t("launch.token.desc"),
    },
    {
      title: lang.t("run.node"),
      icon: "/images/dev/node.png",
      desc: lang.t("run.node.desc"),
    },
    {
      title: lang.t("intergrate.iot.devices"),
      icon: "/images/dev/iot.png",
      desc: lang.t("intergrate.iot.devices.desc"),
    },
    {
      title: lang.t("go.cross.chain"),
      icon: "/images/dev/chain.png",
      desc: lang.t("go.cross.chain.desc"),
    },
    {
      title: lang.t("trad.assets"),
      icon: "/images/dev/trade.png",
      desc: lang.t("trad.assets.desc"),
    },
    {
      title: lang.t("mine.tracker"),
      icon: "/images/dev/pebble.png",
      desc: lang.t("mine.tracker.desc"),
    },
  ];

  const logos = [
    {
      icon: "/images/dev/logo_ucam_n.png",
      iocn_active: "/images/dev/logo_ucam_h.png",
    },
    {
      icon: "/images/dev/logo_pebble_n.png",
      iocn_active: "/images/dev/logo_pebble_h.png",
    },
    {
      icon: "/images/dev/logo_mimo_n.png",
      iocn_active: "/images/dev/logo_mimo_h.png",
    },
    {
      icon: "/images/dev/logo_healthblocks_n.png",
      iocn_active: "/images/dev/logo_healthblocks_h.png",
    },
    {
      icon: "/images/dev/logo_pebble_go_n.png",
      iocn_active: "/images/dev/logo_pebble_go_h.png",
    },
    {
      icon: "/images/dev/logo_scaleout_n.png",
      iocn_active: "/images/dev/logo_scaleout_h.png",
    },
    {
      icon: "/images/dev/logo_cyclone_n.png",
      iocn_active: "/images/dev/logo_cyclone_h.png",
    },
    {
      icon: "/images/dev/logo_healthnet_n.png",
      iocn_active: "/images/dev/logo_healthnet_h.png",
    },
    {
      icon: "/images/dev/logo_WeatherDEX_n.png",
      iocn_active: "/images/dev/logo_WeatherDEX_h.png",
    },
  ];

  const awards = [
    { icon: "/images/icon-logo1.png", iocn_active: "/images/icon-logo1_s.png" },
    { icon: "/images/icon-logo2.png", iocn_active: "/images/icon-logo2_s.png" },
    { icon: "/images/icon-logo3.png", iocn_active: "/images/icon-logo3_s.png" },
    { icon: "/images/icon-logo4.png", iocn_active: "/images/icon-logo4_s.png" },
  ];

  const apps = [
    {
      name: lang.t("app1"),
      desc: lang.t("app1.desc"),
      icon: "/images/dev/Solidity.png",
      selectedIcon: "/images/card1.png",
    },
    {
      name: lang.t("app2"),
      desc: lang.t("app2.desc"),
      icon: "/images/dev/web3js.png",
      selectedIcon: "/images/card3.png",
    },
    {
      name: lang.t("app3"),
      desc: lang.t("app3.desc"),
      icon: "/images/dev/sdk.png",
      selectedIcon: "/images/card2.png",
    },
  ];

  return (
    <BasicLayout>
      <Box
        css={{
          backgroundImage: `url(${
            isMaxThan468
              ? "/images/dev/banner.svg"
              : "/images/dev/banner_mobile_bg.svg"
          })`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      >
        <DevBanner />

        <Box maxWidth={{ base: "90%", lg: "80%", "2xl": "1554px" }} mx="auto">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            mb="9.6rem"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box w={{ base: "100%", md: "50%" }} mb={{ base: "4rem", md: 0 }}>
              <Text
                fontSize={{
                  base: "1.8rem",
                  sm: "1.875rem",
                  lg: "3.5rem",
                  "2xl": "4rem",
                }}
                fontWeight="semibold"
                mb="1.8rem"
                whiteSpace="pre-line"
              >
                {lang.t("dev.achieve.title")}
              </Text>
              <Image
                boxSize="9.6rem"
                objectFit="cover"
                src="/images/dev_ball.png"
                alt="img_circular3"
                ml="10%"
                mt={{base: "5rem", md: "11.8125rem"}}
                mb="20%"
              />
            </Box>
            <Box w={{ base: "100%", md: "40%", xl: "43%", "2xl": "40%" }}>
              {achieve.map((item) => {
                return (
                  <Flex
                    key={item.desc}
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    mb="4.375rem"
                  >
                    <Image
                      boxSize={{base: "4rem", md: "7.5rem"}}
                      objectFit="cover"
                      src={item.icon}
                      alt={item.desc}
                      mb="1rem"
                    />
                    <Flex alignItems="center" mb="1rem">
                      <Text
                        fontSize={{
                          base: "1rem",
                          lg: "1.5rem",
                          xl: "1.5rem",
                          "2xl": "2rem",
                        }}
                        fontWeight="semibold"
                        mr="1rem"
                      >
                        {item.desc}
                      </Text>
                    </Flex>
                  </Flex>
                );
              })}
            </Box>
          </Flex>
        </Box>

        <BuildOnIotex />

        {/* award */}
        <Box
          mb={{ base: "15rem", lg: "15rem", "2xl": "25rem" }}
          maxWidth={{ base: "90%", lg: "80%", "2xl": "1554px" }}
          mx="auto"
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box
              w={{ base: "100%", md: "40%", "2xl": "35%" }}
              mb={{ base: "4rem", md: 0 }}
            >
              <Text
                fontSize={{
                  base: "1.8rem",
                  sm: "1.875rem",
                  lg: "2.5rem",
                  xl: "3rem",
                  "2xl": "4rem",
                }}
                whiteSpace={{ base: "inherit", md: "pre-line" }}
                mb="2.8rem"
                wordBreak="break-word"
                fontWeight="semibold"
              >
                {lang.t("dev.title7")}
              </Text>
              <Text
                fontSize={{
                  base: "0.875rem",
                  md: "1rem",
                  lg: "1.125rem",
                  xl: "1.25rem",
                }}
                opacity="0.85"
                fontWeight="medium"
                mb="2.5rem"
                lineHeight="1.8"
              >
                {lang.t("dev.subtitle7")}
              </Text>
              <Text
                fontSize={{
                  base: "0.875rem",
                  md: "1rem",
                  lg: "1.125rem",
                  xl: "1.25rem",
                }}
                opacity="0.85"
                fontWeight="medium"
                mb="2.5rem"
                lineHeight="1.8"
              >
                {lang.t("dev.subtitle7.p")}
              </Text>
              <Button
                href="/"
                size={{ base: "100%", md: "100%" }}
                name={lang.t("awards.research")}
              />
            </Box>
            <Flex
              flexWrap="wrap"
              w={{ base: "100%", md: "53%" }}
              justifyContent="space-between"
            >
              {awards.map((item) => {
                return (
                  <Box key={item.iocn_active} w={{base: "100%", md: "47%"}} mt="3rem">
                    <LogoCardItem item={item} width="100%" height="8.75rem" />
                  </Box>
                );
              })}
            </Flex>
          </Flex>
        </Box>
      </Box>

      {/* Develop on the World’s Most Technologically Advanced Blockchain Platform */}
      <Box
        pb={{ base: "10rem", md: "10rem", lg: "16rem", xl: "25rem" }}
        css={{
          backgroundImage: `url(${develop})`,
          backgroundSize: `${isMaxThan468 ? "50%" : "100%"}`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0 10%",
        }}
      >
        <Flex
          maxWidth={{ base: "90%", lg: "80%", "2xl": "1554px" }}
          mx="auto"
          justifyContent="space-between"
          flexDirection={{ base: "column-reverse", md: "row" }}
        >
          <Box w={{ base: "100%", md: "40%", lg: "30%", "2xl": "50%" }}></Box>
          <Box
            w={{ base: "100%", md: "48%", lg: "55%", "2xl": "50%" }}
            mb={{ base: "4rem", md: 0 }}
          >
            <Text
              fontSize={{
                base: "1.8rem",
                sm: "1.875rem",
                lg: "2.5rem",
                xl: "3rem",
                "2xl": "4rem",
              }}
              w={{ base: "100%", md: "70%", lg: "max-content" }}
              textAlign={{ base: "center", sm: "left" }}
              whiteSpace={{ base: "inherit", lg: "pre-line" }}
              fontWeight="semibold"
              mb="1.8rem"
            >
              {lang.t("dev.title8")}
            </Text>
            <Text
              fontSize={{
                base: "0.875rem",
                md: "1rem",
                lg: "1.25rem",
                xl: "1.5rem",
              }}
              textAlign={{ base: "center", sm: "left" }}
              whiteSpace={{ base: "pre-line", lg: "inherit" }}
              mb={{ base: "2rem", lg: "4.25rem" }}
              fontWeight="medium"
              opacity="0.85"
            >
              {lang.t("dev.subtitle8")}
            </Text>
            <Button
              href="/"
              size={{ base: "100%", md: "16rem" }}
              name={lang.t("get.started")}
            />
          </Box>
        </Flex>
      </Box>

      {/* tools */}
      <Box
        maxWidth={{ base: "90%", lg: "80%", "2xl": "1554px" }}
        mx="auto"
        mb={{ base: "5rem", lg: "15rem", "2xl": "25rem" }}
      >
        <Flex alignItems="flex-start" flexWrap="wrap" w="100%">
          {tools.map((item) => {
            return (
              <Flex
                w={{
                  base: "33%",
                  sm: "25%",
                  md: "25%",
                  lg: "calc(100% / 7)",
                  xl: "calc(100% / 7)",
                }}
                key={item.name}
                direction="column"
                mb={{ base: "3rem", lg: 0 }}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  w={{ base: "2.5rem", sm: "4rem" }}
                  h={{ base: "2.5rem", sm: "4rem" }}
                >
                  <img src={item.icon} alt={item.name} />
                </Box>
                <Text
                  fontSize={{ base: "0.75rem", md: "0.875rem" }}
                  whiteSpace="pre-line"
                  textAlign="center"
                >
                  {item.name}
                </Text>
              </Flex>
            );
          })}
        </Flex>
      </Box>

      <Box
        pb={{ base: "0", md: "20rem", lg: "30rem" }}
        css={
          isMaxThan768
            ? {
                backgroundImage: "url(/images/dev/bg_4.svg)",
                backgroundSize: "60%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0 100%",
              }
            : {}
        }
      >
        <Box display={{ base: "block", md: "none" }}>
          <img src="/images/dev/bg_4.svg" alt="" />
        </Box>
        <Flex
          maxWidth={{ base: "90%", lg: "80%", "2xl": "1554px" }}
          mx="auto"
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            w={{ base: "100%", md: "50%", lg: "55%" }}
            mb={{ base: "4rem", md: 0 }}
          >
            <Text
              fontSize={{
                base: "1rem",
                sm: "1.125rem",
                md: "1.25rem",
                xl: "2rem",
                "2xl": "2.5rem",
              }}
              fontWeight="semibold"
              mb="0.5rem"
              whiteSpace="pre-line"
            >
              {lang.t("dev.mini.title")}
            </Text>
            <Text
              fontSize={{
                base: "1.8rem",
                sm: "1.875rem",
                lg: "2.5rem",
                xl: "3rem",
                "2xl": "4rem",
              }}
              fontWeight="semibold"
              mb="1.8rem"
              whiteSpace="pre-line"
            >
              {lang.t("dev.title3")}
            </Text>
            <Text
              fontSize={{
                base: "0.875rem",
                md: "1rem",
                lg: "1.25rem",
                xl: "1.5rem",
              }}
              mb="4rem"
              w={{ base: "100%", lg: "74%" }}
              fontWeight="medium"
              opacity="0.8"
            >
              {lang.t("dev.subtitle3")}
            </Text>
            <Button
              href="/"
              size={{ base: "100%", md: "300px" }}
              name={lang.t("read.documents")}
            />
          </Box>
          <Flex
            w={{ base: "100%", md: "40%", lg: "38%" }}
            justifyContent="space-between"
            direction="column"
          >
            {apps.map((item, index) => {
              return (
                <Flex
                  key={item.name}
                  w="100%"
                  direction="column"
                  h={{
                    base: "12rem",
                    sm: "18rem",
                    md: "12rem",
                    lg: "14rem",
                    xl: "18rem",
                    "2xl": "20rem",
                  }}
                  mb={{ base: "3rem", md: "5.25rem" }}
                  justifyContent="center"
                  alignItems="center"
                  css={{
                    background: "url(/images/next_card.png)",
                    mixBlendMode: "normal",
                    borderRadius: "0.625rem",
                    backgroundSize: "100% 100%",
                    transition: "background 0.6s linear",
                    "&:hover": {
                      background: `url(${item.selectedIcon})`,
                      backgroundSize: "100% 100%",
                    },
                  }}
                >
                  <Image
                    boxSize={{
                      base: "4rem",
                      sm: "6rem",
                      md: "4rem",
                      lg: "7.5rem",
                    }}
                    objectFit="cover"
                    src={item.icon}
                    alt={item.name}
                  />
                  <Text
                    fontSize={{
                      base: "1.25rem",
                      sm: "1.5rem",
                      md: "1.25rem",
                      lg: "2rem",
                    }}
                    fontWeight="semibold"
                  >
                    {item.name}
                  </Text>
                  <Text
                    fontSize={{
                      base: "0.875rem",
                      sm: "1rem",
                      md: "0.75rem",
                      lg: "1.125rem",
                    }}
                    fontWeight="semibold"
                  >
                    {item.desc}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      </Box>

      {/*  Web3js, Solidity, and Native SDKs.  */}
      <Box
        pt={{ base: "15rem", md: 0 }}
        css={{
          backgroundImage: `url(/images/dev/connect_bg.png), url(${bgThree}), url(/images/dev/secure_bg.svg)`,
          backgroundSize: `70%, 110%, ${isMaxThan768 ? "60%" : "100%"}`,
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: `-5% 0%, ${
            isMaxThan768 ? "100% 15%" : "100% 0%"
          }, ${isMaxThan768 ? "0 80%" : "0 40%"}`,
        }}
      >
        <Box maxWidth={{ base: "90%", lg: "80%", "2xl": "1554px" }} mx="auto">
          <Flex
            justifyContent="space-between"
            mb="9.6rem"
            flexDirection={{ base: "column-reverse", md: "row" }}
          >
            <Box w={{ base: "100%", md: "45%", "2xl": "20vw" }}>
              {physical.map((item) => {
                return (
                  <Flex
                    key={item.title}
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
                        src="/images/dev/link.svg"
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
                );
              })}
            </Box>
            <Box w={{ base: "100%", md: "50%" }} mb={{ base: "4rem", md: 0 }}>
              <Text
                fontSize={{
                  base: "1.8rem",
                  sm: "1.875rem",
                  lg: "2.5rem",
                  xl: "3rem",
                  "2xl": "4rem",
                }}
                fontWeight="semibold"
                mb="1.8rem"
                whiteSpace="pre-line"
              >
                {lang.t("dev.title4")}
              </Text>
              <Text
                fontSize={{
                  base: "0.875rem",
                  md: "1rem",
                  lg: "1.25rem",
                  xl: "1.5rem",
                }}
                mb="4rem"
                w={{ base: "100%", xl: "80%" }}
                wordBreak="break-word"
                fontWeight="medium"
                opacity="0.85"
              >
                {lang.t("dev.subtitle4")}
              </Text>
              <Button
                href="/"
                size={{ base: "100%", md: "80%" }}
                name={lang.t("touch.us")}
              />
            </Box>
          </Flex>
          <Box>
            <Text
              fontSize={{
                base: "1.5rem",
                sm: "1.875rem",
                lg: "2.5rem",
                xl: "3rem",
                "2xl": "4rem",
              }}
              whiteSpace="pre-line"
              fontWeight="semibold"
              textAlign="center"
              mb="1.75rem"
            >
              {lang.t("dev.title5")}
            </Text>
            <Text
              fontSize={{
                base: "0.875rem",
                md: "1rem",
                lg: "1.25rem",
                xl: "1.25rem",
                "2xl": "1.75rem",
              }}
              mb={{ base: "4rem" }}
              opacity="0.85"
              fontWeight="medium"
              textAlign="center"
              mx="auto"
              whiteSpace={{ base: "inherit", md: "pre-line" }}
            >
              {lang.t("dev.subtitle5")}
            </Text>
            <Text
              fontSize={{
                base: "0.875rem",
                md: "1rem",
                lg: "1.25rem",
                xl: "1.25rem",
                "2xl": "1.75rem",
              }}
              mb={{ base: "4rem" }}
              opacity="0.85"
              fontWeight="medium"
              textAlign="center"
              mx="auto"
              color="discord"
            >
              {lang.t("dev.title5.desc2")}
            </Text>
            <Flex
              flexWrap="wrap"
              justifyContent="space-between"
              alignContent="space-between"
            >
              {logos.map((item, index) => {
                return (
                  <Box
                    key={index}
                    mb="3rem"
                    width={{ base: "46%", lg: "30%" }}
                    height={{
                      base: "6rem",
                      sm: "8rem",
                      md: "9rem",
                      "2xl": "11.625rem",
                    }}
                  >
                    <LogoCardItem item={item} width="100%" height="100%" />
                  </Box>
                );
              })}
            </Flex>
            <Text
              fontSize={{ xl: "1.25rem" }}
              opacity="0.85"
              fontWeight="medium"
              textAlign="center"
              mt="3.5rem"
              mb="2rem"
            >
              {lang.t("dev.title5.desc")}
            </Text>
            <Flex justifyContent="center">
              <Button
                href="/"
                size={{ base: "100%", md: "38%" }}
                name={lang.t("power.by.iotex")}
              />
            </Flex>
          </Box>
        </Box>
      </Box>

      {/* discord */}
      <Box
        pb={{ base: "10rem", md: "20rem" }}
        mt={{ base: "8rem", md: "15rem" }}
      >
        <Box
          maxWidth={{ base: "90%", "2xl": "1554px" }}
          mx="auto"
          borderRadius="1.125rem"
          css={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 133.06%)",
            boxShadow: "inset -1px -1px 0px rgba(172, 208, 254, 0.25)",
            backdropFilter: "blur(100px)",
            // "&:hover": {
            //   background: "rgba(88, 101, 242, 0.5)",
            //   backdropFilter: "blur(50px)",
            // },
          }}
        >
          <Flex
            pt="5rem"
            pb="7.5rem"
            alignItems="center"
            justifyContent="center"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Text
              fontSize={{
                base: "2rem",
                sm: "2.5rem",
                lg: "2.5rem",
                xl: "3rem",
                "2xl": "4rem",
              }}
              lineHeight={{ sm: "4rem", md: "6rem" }}
              fontWeight="semibold"
              maxWidth={{ base: "90%", sm: "80%", md: "50%" }}
              textAlign={{ base: "center", md: "left" }}
              mr={{ base: 0, md: "10%" }}
            >
              {lang.t("dev.join")}
            </Text>
            <Box textAlign="center" maxWidth="9.5rem">
              <Image
                boxSize={{ base: "6rem", sm: "8rem", md: "7.5rem" }}
                objectFit="cover"
                src="/images/icon_discord.png"
                alt=""
                mx="auto"
                css={{
                  filter:
                    "drop-shadow(0px 256px 200px rgba(0, 24, 0, 0.15)), drop-shadow(0px 110px 80px rgba(0, 1, 0, 0.07)), drop-shadow(0px 60px 55px rgba(0, 1, 0, 0.09)), drop-shadow(0px 35px 30px rgba(0, 21, 0, 0.0329042)), drop-shadow(0px 20px 16px rgba(0, 1, 0, 0.1))",
                }}
              />
              <Text
                fontSize="1.25rem"
                fontWeight="semibold"
                lineHeight="3.25rem"
              >
                {lang.t("discord")}
              </Text>
              <Text
                fontSize="1rem"
                color="grayColor2"
                fontWeight="medium"
                lineHeight="1.375rem"
              >
                {lang.t("discord.desc")}
              </Text>
            </Box>
          </Flex>
        </Box>
        <Footer />
      </Box>
    </BasicLayout>
  );
});
