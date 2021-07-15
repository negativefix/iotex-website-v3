import React from "react";
import { Box, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { useStore } from "../../store";
import { observer, useLocalObservable } from "mobx-react-lite";

const langGroups = {
  en: { name: "EN", src: "/images/EN.png", text: "en" },
  zh_CN: { name: "CN", src: "/images/CN.png", text: "zh_CN" },
};

export const Header = observer(() => {
  const { lang } = useStore();
  const history = useHistory();
  const { location } = history;
  const { isOpen, onToggle } = useDisclosure();

  const navConfig = [
    { name: lang.t("iotx"), path: "/for-investors", blank: false },
    { name: lang.t("team"), path: "/team", blank: false },
    {
      name: lang.t("ecosystem"),
      path: "https://ecosystem.iotex.io/",
      blank: true,
    },
    { name: lang.t("developers"), path: "/developers", blank: false },
  ];

  const startedConfig = [
    { name: lang.t("For.investors"), path: "/for-investors", blank: false },
    { name: lang.t("for.developers"), path: "/developers", blank: false },
    { name: lang.t("for.business"), path: "/enterprise", blank: false },
  ];

  const aboutConfig = [
    { name: lang.t("vision"), path: "https://iott.network/about", blank: true },
    { name: lang.t("press"), path: "/press", blank: false },
    { name: lang.t("research"), path: "/research", blank: false },
    {
      name: lang.t("roadmap"),
      path: "https://medium.com/iotex/iotex-2021-the-year-ahead-acf743e2df03",
      blank: true,
    },
    { name: lang.t("blog"), path: "/blog", blank: true },
    { name: lang.t("medium"), path: "https://iotex.medium.com/", blank: true },
    { name: lang.t("faq"), path: "/faq", blank: false },
  ];

  const exploreConfig = [
    {
      name: lang.t("GET.STARTED"),
      lists: [
        {
          name: lang.t("ioPay.wallet"),
          path: "https://iopay-wallet.iotex.io/",
          blank: true,
          icon: "/images/explore/icon_wallet_n.png",
          icon_active: "/images/explore/icon_wallet_s.png",
        },
        // {
        //   name: lang.t("What.is.IoTeX"),
        //   path: "https://onboard.iotex.io/introduction",
        //   blank: true,
        //   icon: "/images/explore/icon_wallet_n.png",
        //   icon_active: "/images/explore/icon_wallet_s.png",
        // },
        // {
        //   name: lang.t("vision"),
        //   path: "https://iott.network/about",
        //   blank: true,
        //   icon: "/images/explore/icon_getiotx_n.png",
        //   icon_active: "/images/explore/icon_getiotx_n.png",
        // },
        // {
        //   name: lang.t("roadmap"),
        //   path: "https://medium.com/iotex/iotex-2021-the-year-ahead-acf743e2df03",
        //   blank: true,
        //   icon: "/images/explore/icon_map_n.png",
        //   icon_active: "/images/explore/icon_map_s.png",
        // },
        {
          name: lang.t("onboarding.Pack"),
          path: "https://onboard.iotex.io/",
          blank: true,
          icon: "/images/explore/icon_getiotx_n.png",
          icon_active: "/images/explore/icon_getiotx_n.png",
        },
        {
          name: lang.t("ecosystem"),
          path: "https://ecosystem.iotex.io/",
          blank: true,
          icon: "/images/explore/icon_ecopage_n.png",
          icon_active: "/images/explore/icon_ecopage_s.png",
        },
      ],
    },

    {
      name: lang.t("for.investors"),
      lists: [
        {
          name: lang.t("ioPay.wallet"),
          path: "https://iopay-wallet.iotex.io/",
          blank: true,
          icon: "/images/explore/icon_wallet_n.png",
          icon_active: "/images/explore/icon_wallet_s.png",
        },
        {
          name: lang.t("get.iotx"),
          path: "https://ecosystem.iotex.io/exchanges-wallets",
          blank: true,
          icon: "/images/explore/icon_getiotx_n.png",
          icon_active: "/images/explore/icon_getiotx_n.png",
        },
        {
          name: lang.t("staking.portal"),
          path: "https://member.iotex.io/",
          blank: true,
          icon: "/images/explore/icon_stake_n.png",
          icon_active: "/images/explore/icon_stake_s.png",
        },
        {
          name: lang.t("burn.drop"),
          path: "https://burndrop.iotex.io/",
          blank: true,
          icon: "/images/explore/icon_brun-drop_n.png",
          icon_active: "/images/explore/icon_brun-drop_n.png",
        },
      ],
    },
    {
      name: lang.t("for.builders"),
      lists: [
        {
          name: lang.t("github"),
          path: "https://github.com/iotexproject",
          blank: true,
          icon: "/images/explore/icon_gitHub_n.png",
          icon_active: "/images/explore/icon_gitHub_s.png",
        },
        {
          name: lang.t("dev.docs"),
          path: "https://docs.iotex.io/",
          blank: true,
          icon: "/images/explore/icon_docs_n.png",
          icon_active: "/images/explore/icon_docs_s.png",
        },
        {
          name: lang.t("halo.grants"),
          path: "https://iotex.io/halo",
          blank: true,
          icon: "/images/explore/icon_halo_n.png",
          icon_active: "/images/explore/icon_halo_s.png",
        },
        {
          name: lang.t("explore"),
          path: "https://iotexscan.io/",
          blank: true,
          icon: "/images/explore/icon_explorer_n.png",
          icon_active: "/images/explore/icon_explorer_s.png",
        },
      ],
    },
    {
      name: lang.t("for.community"),
      lists: [
        {
          name: lang.t("ecosystem"),
          path: "https://ecosystem.iotex.io/projects",
          blank: true,
          icon: "/images/explore/icon_ecopage_n.png",
          icon_active: "/images/explore/icon_ecopage_s.png",
        },
        {
          name: lang.t("live.ioTT.network"),
          path: "https://iott.network/",
          blank: true,
          icon: "/images/explore/icon_iott_n.png",
          icon_active: "/images/explore/icon_iott_s.png",
        },
        {
          name: lang.t("blog"),
          path: "https://iotex.medium.com/",
          blank: true,
          icon: "/images/explore/icon_blog_n.png",
          icon_active: "/images/explore/icon_blog_s.png",
        },
      ],
    },
  ];

  const links = [
    {
      icon: "/images/explore/icon_twitter_n.png",
      icon_active: "/images/explore/icon_twitter_s.png",
      blank: true,
      href: "https://twitter.com/iotex_io",
    },
    {
      icon: "/images/explore/icon_discord_n.png",
      icon_active: "/images/explore/icon_discord_s.png",
      blank: true,
      href: "https://iotex.io/devdiscord",
    },
    {
      icon: "/images/explore/icon_youtube_n.png",
      icon_active: "/images/explore/icon_youtube_s.png",
      blank: true,
      href: "https://www.youtube.com/channel/UCdj3xY3LCktuamvuFusWOZw",
    },
    {
      icon: "/images/explore/icon_reddit_n.png",
      icon_active: "/images/explore/icon_reddit_s.png",
      blank: true,
      href: "https://www.reddit.com/r/IoTeX/",
    },
    {
      icon: "/images/explore/icon_telegram_n.png",
      icon_active: "/images/explore/icon_telegram_s.png",
      blank: true,
      href: "https://t.me/iotexchannel",
    },
  ];

  const store = useLocalObservable(() => ({
    isOpen: false,
    openMenu: false,
    openExplore: false,
    get curLang() {
      if (!langGroups[lang.lang]) return langGroups.en;
      return langGroups[lang.lang];
    },
  }));

  return (
    <Box
      w="100%"
      pl={{ base: "0.5rem", md: "1.125rem" }}
      pr={{ base: "0.5rem", md: 0 }}
      py={{ base: "0.8rem", md: "0" }}
      boxSizing="border-box"
      position="absolute"
      top="0"
      left="0"
      zIndex="5"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Link to={"/"}>
          <Box w={{ base: "6rem", md: "8rem", "2xl": "12rem" }}>
            <img src="/images/logo.png" alt="" />
          </Box>
        </Link>
        <Flex
          flex="1"
          alignItems="center"
          justifyContent="flex-end"
          display={{ base: "none", lg: "flex" }}
        >
          <Flex>
            <Box
              className="dropHoverText"
              position="relative"
              px={{
                base: "0.5rem",
                lg: "1rem",
                xl: "1.25rem",
                "2xl": "1.5rem",
              }}
            >
              <Text
                as={Text}
                fontWeight="semibold"
                fontSize={{ base: "0.875rem", lg: "1rem", "2xl": "1.25rem" }}
                cursor="pointer"
                lineHeight={{ base: "0", md: "4.5rem" }}
                className="dropMenuText"
              >
                {lang.t("get.started")} <TriangleDownIcon w="12px" />
              </Text>
              <Box className="dropMenuUl">
                {startedConfig.map((item) => {
                  return (
                    <Box
                      key={item.name}
                      className="dropMenuItem"
                      px={{
                        base: "0.5rem",
                        lg: "1rem",
                        xl: "1.25rem",
                        "2xl": "1.5rem",
                      }}
                    >
                      <a href={item.path} target={item.blank ? "_blank" : ""}>
                        {item.name}
                      </a>
                    </Box>
                  );
                })}
              </Box>
            </Box>
            {navConfig.map((item) => {
              return (
                <a
                  key={item.name}
                  href={item.path}
                  target={item.blank ? "_blank" : ""}
                >
                  <Text
                    lineHeight={{ base: "0", md: "4.5rem" }}
                    color={
                      location.pathname === item.path ? "brandColor2" : "white"
                    }
                    letterSpacing="0.5px"
                    ml={{
                      base: "1rem",
                      lg: "2rem",
                      xl: "2.5rem",
                      "2xl": "3rem",
                    }}
                    fontSize={{
                      base: "0.875rem",
                      lg: "1rem",
                      "2xl": "1.25rem",
                    }}
                    textDecoration="none"
                    fontWeight="semibold"
                    css={{
                      "&:hover": {
                        color: "#44FFB2 !important",
                      },
                    }}
                  >
                    {item.name}
                  </Text>
                </a>
              );
            })}
            <Box
              className="dropHoverText"
              position="relative"
              ml={{
                base: "0.5rem",
                lg: "1rem",
                xl: "1.25rem",
                "2xl": "1.5rem",
              }}
              px={{
                base: "0.5rem",
                lg: "1rem",
                xl: "1.25rem",
                "2xl": "1.5rem",
              }}
            >
              <Text
                fontWeight="semibold"
                fontSize={{ base: "0.875rem", lg: "1rem", "2xl": "1.25rem" }}
                cursor="pointer"
                lineHeight={{ base: "0", md: "4.5rem" }}
                className="dropMenuText"
              >
                {lang.t("about")} &nbsp;&nbsp;
                <TriangleDownIcon w="12px" />
              </Text>
              <Box className="dropMenuUl">
                {aboutConfig.map((item) => {
                  return (
                    <Box
                      key={item.name}
                      className="dropMenuItem"
                      px={{
                        base: "0.5rem",
                        lg: "1rem",
                        xl: "1.25rem",
                        "2xl": "1.5rem",
                      }}
                    >
                      <a href={item.path} target={item.blank ? "_blank" : ""}>
                        {item.name}
                      </a>
                    </Box>
                  );
                })}
              </Box>
            </Box>
            <Box className="navDropDown">
              <Text
                as={Text}
                fontWeight="semibold"
                pl={{
                  base: "0.5rem",
                  lg: "1rem",
                  xl: "1.25rem",
                  "2xl": "1.5rem",
                }}
                pr={{
                  base: "0.5rem",
                  lg: "1rem",
                  xl: "1.25rem",
                  "2xl": "1.5rem",
                }}
                css={{
                  background:
                    "linear-gradient(147.16deg, rgba(255, 255, 255, 0.05) 14.71%, rgba(255, 255, 255, 0) 114.16%)",
                  color: "#44FFB2",
                  userSelect: "none",
                }}
                cursor="pointer"
                lineHeight={{ base: "0", md: "4.5rem" }}
                fontSize={{ base: "0.875rem", lg: "1rem", "2xl": "1.25rem" }}
              >
                {lang.t("discover.ioTeX")}
              </Text>
              <Box
                className="navDropDownUl"
                position="absolute"
                top={{ base: "4rem", lg: "4.5rem" }}
                left="0"
                w="100%"
                pt="1.5rem"
                pb="0.5rem"
                css={{
                  background:
                    "linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)",
                  backdropFilter: "blur(50px)",
                  animation: "fadeIn 0.3s linear",
                }}
              >
                {/* <Image
                    boxSize="1.5rem"
                    src="/images/explore/close.png"
                    position="absolute"
                    right="2rem"
                    top="1.25rem"
                    opacity="0.5"
                    cursor="pointer"
                    onClick={() => (store.isOpen = false)}
                  ></Image> */}
                <Flex justifyContent="center">
                  {exploreConfig.map((item, index) => {
                    return (
                      <Flex
                        flexDirection="column"
                        key={item.name}
                        mx={index === 1 ? "10%" : ""}
                        mr={index === 2 ? "10%" : ""}
                      >
                        <Text
                          fontSize={{ base: "1.125rem", "2xl": "1.25rem" }}
                          color="grayColor3"
                          fontWeight="semibold"
                          mb="1.5rem"
                        >
                          {item.name}
                        </Text>
                        {item.lists.map((option) => {
                          return (
                            <a
                              href={option.path}
                              key={option.name}
                              target={option.blank ? "_blank" : ""}
                            >
                              <Flex
                                mb={{ base: "0.8rem", "2xl": "1rem" }}
                                alignItems="center"
                                css={{
                                  "&:hover": {
                                    color: "#44FFB2 !important",
                                    img: {
                                      content: `url(${option.icon_active})`,
                                    },
                                  },
                                }}
                              >
                                <Box w="1.5rem" h="1.5rem" mr="0.5rem">
                                  <img src={option.icon} alt="" />
                                </Box>
                                <Text
                                  fontSize={{
                                    base: "0.875rem",
                                    "2xl": "1.125rem",
                                  }}
                                  letterSpacing="1px"
                                >
                                  {option.name}
                                </Text>
                              </Flex>
                            </a>
                          );
                        })}
                        {index === 3 && (
                          <Flex>
                            {links.map((item) => {
                              return (
                                <a
                                  href={item.href}
                                  target={item.blank ? "_blank" : ""}
                                  key={item.icon}
                                >
                                  <Image
                                    boxSize="1.5rem"
                                    mr="1rem"
                                    src={item.icon}
                                    cursor="pointer"
                                    css={{
                                      "&:hover": {
                                        content: `url(${item.icon_active})`,
                                      },
                                    }}
                                  ></Image>
                                </a>
                              );
                            })}
                          </Flex>
                        )}
                      </Flex>
                    );
                  })}
                </Flex>
              </Box>
            </Box>
          </Flex>
          {/* <Menu isLazy>
            <MenuButton
              ml={{
                base: "0.5rem",
                lg: "1rem",
                xl: "1.25rem",
                "2xl": "1.5rem",
              }}
              letterSpacing="1px"
              fontWeight="semibold"
              bg="transparent"
              color="white"
              border="none"
              fontSize={{ base: "0.875rem", lg: "1rem", "2xl": "1.25rem" }}
            >
              {store.curLang.name}
            </MenuButton>
            <MenuList
              color="black"
              minWidth="60px"
              defaultValue={store.curLang.name}
            >
              {Object.values(langGroups).map((item) => {
                return (
                  <MenuItem
                    key={item.name}
                    css={{ textAlign: "center" }}
                    value={item.name}
                    onClick={() => lang.setLang(item.text)}
                  >
                    <Center w="100%">{item.name}</Center>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu> */}
        </Flex>
        <Box
          display={{ base: "block", lg: "none" }}
          position="relative"
          css={{
            ".menusMobile": {
              display: "none",
            },
            "&:hover": {
              ".menusMobile": {
                display: "block",
              },
            },
          }}
        >
          <Image
            boxSize="1.5rem"
            src="/images/menue.png"
            alt=""
            onClick={() => (store.openMenu = true)}
          />
          {store.openMenu && <Box
            w="100vw"
            height="100vh"
            position="fixed"
            right="0"
            top="0"
            pt="4.5rem"
            className="menusMobile"
            css={{
              background:
                "linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)",
              backdropFilter: "blur(50px)",
              animation: "fadeIn 0.3s linear",
            }}
          >
            <Link to={"/"}>
              <Box
                w={{ base: "6rem", md: "8rem", "2xl": "12rem" }}
                position="absolute"
                left="0.5rem"
                top="0.8rem"
              >
                <img src="/images/logo.png" alt="" />
              </Box>
            </Link>
            <Image
              boxSize="1.5rem"
              src="/images/explore/close.png"
              position="absolute"
              right="1.5rem"
              top="0.8rem"
              opacity="0.5"
              cursor="pointer"
              onClick={() => (store.openMenu = false)}
            ></Image>
            {navConfig.map((item) => {
              return (
                <Link
                  to={item.path}
                  key={item.name}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <Box
                    color="#fff"
                    px="1rem"
                    py="0.8rem"
                    css={{
                      "&:hover": {
                        background:
                          "linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #110F1C",
                      },
                    }}
                  >
                    <Text
                      css={{ userSelect: "none" }}
                      fontSize="0.875rem"
                      color="white"
                      fontWeight="bold"
                    >
                      {item.name}
                    </Text>
                  </Box>
                </Link>
              );
            })}
            {aboutConfig.map((item) => {
              return (
                <Link
                  to={item.path}
                  key={item.name}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <Box
                    color="#fff"
                    px="1rem"
                    py="0.8rem"
                    css={{
                      "&:hover": {
                        color: "#44FFB2 !important",
                        background:
                          "linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #110F1C",
                      },
                    }}
                  >
                    <Text
                      css={{ userSelect: "none" }}
                      fontSize="0.875rem"
                      color="white"
                      fontWeight="bold"
                    >
                      {item.name}
                    </Text>
                  </Box>
                </Link>
              );
            })}

            <Box
              color="#fff"
              px="1rem"
              py="0.8rem"
              css={{
                "&:hover": {
                  background:
                    "linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #110F1C",
                },
              }}
              onClick={() => (store.openExplore = true)}
            >
              <Text
                css={{ userSelect: "none" }}
                fontSize="0.875rem"
                color="white"
                fontWeight="bold"
              >
                {lang.t("discover.ioTeX")}
              </Text>
            </Box>
          </Box>}
        </Box>
        {store.openExplore && (
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            position="fixed"
            top="0"
            left="0"
            w="100vw"
            h="100vh"
            zIndex="22"
            py="1.5rem"
            px="2rem"
            css={{
              background:
                "linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)",
              backdropFilter: "blur(50px)",
              animation: "fadeIn 0.3s linear",
            }}
            overflow="auto"
          >
            <Image
              boxSize="1.5rem"
              src="/images/explore/close.png"
              position="absolute"
              right="1.5rem"
              top="1.5rem"
              opacity="0.5"
              cursor="pointer"
              onClick={() => (store.openExplore = false)}
            ></Image>
            {exploreConfig.map((item, index) => {
              return (
                <Flex flexDirection="column" key={item.name} mb="10%">
                  <Text
                    fontSize={{ base: "1.125rem", "2xl": "1.25rem" }}
                    color="grayColor3"
                    fontWeight="semibold"
                    mb="1.5rem"
                  >
                    {item.name}
                  </Text>
                  {item.lists.map((option) => {
                    return (
                      <a
                        href={option.path}
                        key={option.name}
                        target={option.blank ? "_blank" : ""}
                      >
                        <Flex
                          mb={{ base: "0.8rem", "2xl": "1rem" }}
                          alignItems="center"
                          css={{
                            "&:hover": {
                              color: "#44FFB2 !important",
                              img: {
                                content: `url(${option.icon_active})`,
                              },
                            },
                          }}
                        >
                          <Box w="1.5rem" h="1.5rem" mr="0.5rem">
                            <img src={option.icon} alt="" />
                          </Box>
                          <Text
                            fontSize={{
                              base: "0.875rem",
                              "2xl": "1.125rem",
                            }}
                            letterSpacing="1px"
                          >
                            {option.name}
                          </Text>
                        </Flex>
                      </a>
                    );
                  })}
                  {index === 2 && (
                    <Flex>
                      {links.map((item) => {
                        return (
                          <Image
                            boxSize="1.5rem"
                            mr="1rem"
                            key={item.icon}
                            src={item.icon}
                            cursor="pointer"
                            css={{
                              "&:hover": {
                                content: `url(${item.icon_active})`,
                              },
                            }}
                          ></Image>
                        );
                      })}
                    </Flex>
                  )}
                </Flex>
              );
            })}
          </Flex>
        )}
      </Flex>
    </Box>
  );
});
