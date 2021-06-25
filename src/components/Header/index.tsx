import React from "react";
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Text,
  Center,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
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
    { name: lang.t("developers"), path: "/developers", blank: false },
    { name: lang.t("iotx"), path: "https://iotex.io/token", blank: true },
    {
      name: lang.t("ecosystem"),
      path: "https://ecosystem.iotex.io",
      blank: true,
    },
    { name: lang.t("press"), path: "/media-center", blank: false },
  ];

  const startedConfig = [
    { name: lang.t("for.developers"), path: "", blank: false },
    { name: lang.t("for.investors"), path: "", blank: false },
    { name: lang.t("for.business"), path: "", blank: false },
  ]

  const aboutConfig = [
    { name: lang.t("vision"), path: "", blank: true },
    { name: lang.t("team"), path: "/team", blank: false },
    { name: lang.t("research"), path: "/research", blank: false },
    { name: lang.t("roadmap"), path: "", blank: true },
    { name: lang.t("blog"), path: "", blank: true },
    { name: lang.t("faq"), path: "/faq", blank: false },
  ];

  const exploreConfig = [
    {
      name: lang.t("for.builders"),
      lists: [
        {
          name: lang.t("github"),
          path: "",
          blank: true,
          icon: "/images/explore/icon_gitHub_n.png",
          icon_active: "/images/explore/icon_gitHub_s.png",
        },
        {
          name: lang.t("dev.docs"),
          path: "",
          blank: true,
          icon: "/images/explore/icon_docs_n.png",
          icon_active: "/images/explore/icon_docs_s.png",
        },
        {
          name: lang.t("halo.grants"),
          path: "",
          blank: true,
          icon: "/images/explore/icon_halo_n.png",
          icon_active: "/images/explore/icon_halo_s.png",
        },
        {
          name: lang.t("codelabs"),
          path: "",
          blank: true,
          icon: "/images/explore/icon_code_n.png",
          icon_active: "/images/explore/icon_code_s.png",
        },
      ],
    },
    {
      name: lang.t("for.investors"),
      lists: [
        {
          name: lang.t("ioPay.wallet"),
          path: "",
          blank: true,
          icon: "/images/explore/icon_wallet_n.png",
          icon_active: "/images/explore/icon_wallet_s.png",
        },
        {
          name: lang.t("get.iotx"),
          path: "",
          blank: true,
          icon: "/images/explore/icon_getiotx_n.png",
          icon_active: "/images/explore/icon_getiotx_s.png",
        },
        {
          name: lang.t("staking.portal"),
          path: "",
          blank: true,
          icon: "/images/explore/icon_stake_n.png",
          icon_active: "/images/explore/icon_stake_s.png",
        },
        {
          name: lang.t("burn.drop"),
          path: "",
          blank: true,
          icon: "/images/explore/icon_brun-drop_n.png",
          icon_active: "/images/explore/icon_brun-drop_n.png",
        },
        {
          name: lang.t("explore"),
          path: "",
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
          path: "",
          blank: true,
          icon: "/images/explore/icon_ecopage_n.png",
          icon_active: "/images/explore/icon_ecopage_s.png",
        },
        {
          name: lang.t("live.ioTT.network"),
          path: "",
          blank: true,
          icon: "/images/explore/icon_iott_n.png",
          icon_active: "/images/explore/icon_iott_s.png",
        },
        {
          name: lang.t("blog"),
          path: "",
          blank: true,
          icon: "/images/explore/icon_blog_n.png",
          icon_active: "/images/explore/icon_blog_s.png",
        },
        {
          name: lang.t("roadmap"),
          path: "",
          blank: true,
          icon: "/images/explore/icon_map_n.png",
          icon_active: "/images/explore/icon_map_s.png",
        },
      ],
    },
  ];

  const links = [
    {
      icon: "/images/explore/icon_twitter_n.png",
      icon_active: "/images/explore/icon_twitter_s.png",
    },
    {
      icon: "/images/explore/icon_discord_n.png",
      icon_active: "/images/explore/icon_discord_s.png",
    },
    {
      icon: "/images/explore/icon_youtube_n.png",
      icon_active: "/images/explore/icon_youtube_s.png",
    },
    {
      icon: "/images/explore/icon_reddit_n.png",
      icon_active: "/images/explore/icon_reddit_s.png",
    },
    {
      icon: "/images/explore/icon_forum_n.png",
      icon_active: "/images/explore/icon_forum_s.png",
    },
  ];

  const store = useLocalObservable(() => ({
    isOpen: false,
    openExplore: false,
    get curLang() {
      if (!langGroups[lang.lang]) return langGroups.en;
      return langGroups[lang.lang];
    },
  }));

  return (
    <Box
      w="100%"
      px={{ base: "0.5rem", md: "1.125rem" }}
      py={{ base: "0.8rem", md: "0" }}
      boxSizing="border-box"
      position="absolute"
      top="0"
      left="0"
      zIndex="5"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Link to={"/"}>
          <Box w={{ base: "5rem", md: "6rem", "2xl": "10rem" }}>
            <img src="/images/logo.png" alt="" />
          </Box>
        </Link>
        <Flex
          flex="1"
          alignItems="center"
          justifyContent="flex-end"
          display={{ base: "none", md: "flex" }}
        >
          <Flex>
          <Box
              className="dropHoverText"
              position="relative"
              px={{ base: "0.5rem", lg: "1rem", xl: "1.25rem", "2xl": "1.5rem" }}
            >
              <Text
                as={Text}
                fontWeight="semibold"
                fontSize={{ base: "0.875rem", lg: "1rem", "2xl": "1.25rem" }}
                cursor="pointer"
                lineHeight={{ base: "0", md: "4rem" }}
                className="dropMenuText"
              >
                {lang.t("get.started")} <TriangleDownIcon w="12px" />
              </Text>
              <Box className="dropMenuUl">
                {startedConfig.map((item) => {
                  return (
                    <Box key={item.name} className="dropMenuItem" px={{ base: "0.5rem", lg: "1rem", xl: "1.25rem", "2xl": "1.5rem" }}>
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
                    lineHeight={{ base: "0", md: "4rem" }}
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
              ml={{ base: "0.5rem", lg: "1rem", xl: "1.25rem", "2xl": "1.5rem" }}
              px={{ base: "0.5rem", lg: "1rem", xl: "1.25rem", "2xl": "1.5rem" }}
            >
              <Text
                fontWeight="semibold"
                fontSize={{ base: "0.875rem", lg: "1rem", "2xl": "1.25rem" }}
                cursor="pointer"
                lineHeight={{ base: "0", md: "4rem" }}
                className="dropMenuText"
              >
                {lang.t("about")}  &nbsp;&nbsp;<TriangleDownIcon w="12px" />
              </Text>
              <Box className="dropMenuUl">
                {aboutConfig.map((item) => {
                  return (
                    <Box key={item.name} className="dropMenuItem" px={{ base: "0.5rem", lg: "1rem", xl: "1.25rem", "2xl": "1.5rem" }}>
                      <a href={item.path} target={item.blank ? "_blank" : ""}>
                        {item.name}
                      </a>
                    </Box>
                  );
                })}
              </Box>
            </Box>
            <Box>
              <Text
                as={Text}
                fontWeight="semibold"
                pl={{ base: "0.5rem", lg: "1rem", xl: "1.25rem", "2xl": "1.5rem" }}
                pr={{ base: "0.5rem", lg: "1rem", xl: "1.25rem", "2xl": "1.5rem" }}
                cursor="pointer"
                css={{
                  '&:hover': {
                    color: '#44FFB2'
                  },
                  userSelect: 'none',
                  color: store.isOpen ? "#44FFB2" : "#fff",
                  background: store.isOpen ? 'linear-gradient(147.16deg, rgba(255, 255, 255, 0.05) 14.71%, rgba(255, 255, 255, 0) 114.16%)' : 'transparent'
                }}
                lineHeight={{ base: "0", md: "4rem" }}
                onClick={() => (store.isOpen = !store.isOpen)}
                fontSize={{ base: "0.875rem", lg: "1rem", "2xl": "1.25rem" }}
              >
                {lang.t("explore.now")}
              </Text>
              {store.isOpen && (
                <Box
                  position="absolute"
                  top={{ base: "4rem", lg: "4rem" }}
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
                  <Image
                    boxSize="1.5rem"
                    src="/images/explore/close.png"
                    position="absolute"
                    right="2rem"
                    top="1.25rem"
                    opacity="0.5"
                    cursor="pointer"
                    onClick={() => (store.isOpen = false)}
                  ></Image>
                  <Flex justifyContent="center">
                    {exploreConfig.map((item, index) => {
                      return (
                        <Flex
                          flexDirection="column"
                          key={item.name}
                          mx={index === 1 ? "10%" : ""}
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
                </Box>
              )}
            </Box>
          </Flex>
          <Menu isLazy>
            <MenuButton
              ml={{ base: "0.5rem", lg: "1rem", xl: "1.25rem", "2xl": "1.5rem" }}
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
          </Menu>
        </Flex>
        <Box
          display={{ base: "block", md: "none" }}
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
          <Image boxSize="1.5rem" src="/images/menue.png" alt="" />
          <Box
            w="160px"
            position="absolute"
            right="0"
            pt="2rem"
            top="0"
            className="menusMobile"
          >
            {navConfig.map((item) => {
              return (
                <Link
                  to={item.path}
                  key={item.name}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <Box
                    color="#fff"
                    background="#110F1C"
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
                    background="#110F1C"
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
              background="#110F1C"
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
                {lang.t("explore.now")}
              </Text>
            </Box>
          </Box>
        </Box>
        {store.openExplore && <Flex
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
        </Flex>}
      </Flex>
    </Box>
  );
});
