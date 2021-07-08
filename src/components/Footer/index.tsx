import React from "react";
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  useDisclosure,
  MenuList,
  MenuItem,
  Image,
  Text,
  IconButton,
  Center,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useStore } from "../../store";
import { Link } from "@chakra-ui/react";
import { observer, useLocalStore } from "mobx-react-lite";
import { IoMenu } from "react-icons/io5";

export const Footer = observer(() => {
  const { lang } = useStore();

  const config = [
    {
      name: lang.t("GET.STARTED"),
      lists: [
        {
          name: lang.t("What.is.IoTeX"),
          path: "https://onboard.iotex.io/introduction",
          blank: true,
          icon: "/images/explore/icon_wallet_n.png",
          icon_active: "/images/explore/icon_wallet_s.png",
        },
        {
          name: lang.t("vision"),
          path: "https://iott.network/about",
          blank: true,
          icon: "/images/explore/icon_getiotx_n.png",
          icon_active: "/images/explore/icon_getiotx_n.png",
        },
        {
          name: lang.t("roadmap"),
          path: "https://medium.com/iotex/iotex-2021-the-year-ahead-acf743e2df03",
          blank: true,
          icon: "/images/explore/icon_map_n.png",
          icon_active: "/images/explore/icon_map_s.png",
        },
        {
          name: lang.t("onboarding.Pack"),
          path: "https://onboard.iotex.io/",
          blank: true,
          icon: "/images/explore/icon_getiotx_n.png",
          icon_active: "/images/explore/icon_getiotx_n.png",
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
      icon: "/images/explore/icon_telegram_n.png",
      icon_active: "/images/explore/icon_telegram_s.png",
    },
  ];

  return (
    <Box
      mt={{ base: "5rem", md: "10rem", lg: "15rem" }}
      maxWidth={{ base: "90%", md: "80%", "2xl": "1554px" }}
      mx="auto"
    >
      <Flex
        justifyContent="space-between"
        alignItems="flex-start"
        flexWrap={{ base: "wrap", lg: "nowrap" }}
      >
        {config.map((item, index) => {
          return (
            <Box
              key={item.name}
              w={{ base: "100%", md: "auto" }}
              mb={{ base: "2rem", md: "0" }}
            >
              <Text
                fontSize={{
                  base: "1rem",
                  md: "1rem",
                  lg: "0.875rem",
                  xl: "1.125rem",
                  "2xl": "1.25rem",
                }}
                fontWeight="semibold"
                color="grayColor3"
              >
                {item.name}
              </Text>
              <Flex direction="column">
                {item.lists.map((option) => {
                  return (
                    <a href={option.path}  key={option.name}  target={option.blank ? "_blank" : ""}>
                      <Text
                        key={option.name}
                        fontSize={{
                          base: "1rem",
                          md: "0.875rem",
                          lg: "0.75rem",
                          xl: "1rem",
                          "2xl": "1.125rem",
                        }}
                        color="discord"
                        cursor="pointer"
                        mt="1rem"
                        letterSpacing="1px"
                        fontWeight="medium"
                      >
                      {option.name}
                      </Text>
                    </a>
                  );
                })}
                {index === 3 && (
                  <Flex mt="1rem">
                    {links.map((item) => {
                      return (
                        <Image
                          boxSize="1.5rem"
                          mr={{base: "0.5rem", xl: "1rem"}}
                          key={item.icon}
                          src={item.icon_active}
                          cursor="pointer"
                        ></Image>
                      );
                    })}
                  </Flex>
                )}
              </Flex>
            </Box>
          );
        })}
        <Box maxWidth="464px" w={{base: "max-content", lg: "27%", "2xl": "max-content"}}>
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
                      base: "1rem",
                      md: "1rem",
                      lg: "0.875rem",
                      xl: "1rem",
                      "2xl": "1.125rem",
                    }}
                    fontWeight="semibold"
                  >
                    SUBSCRIBE TO RECEIVE OUR LATEST UPDATES
                  </Text>
                </label>
                <Flex mt="2rem" css={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 5,
                  height: '50px',
                  '&:hover': {
                    borderColor: '#44FFB2'
                  }
                }}>
                  <input
                    type="email"
                    name="EMAIL"
                    className="email"
                    id="mce-EMAIL"
                    placeholder="email address"
                    required
                  />
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
                  <div className="clear">
                    <input
                      type="submit"
                      value="Submit"
                      name="Submit"
                      id="mc-embedded-subscribe"
                      className="button"
                    />
                  </div>
                </Flex>
              </div>
            </form>
          </div>
        </Box>
      </Flex>
      <Text
        fontSize={{ base: "0.875rem", lg: "1rem" }}
        lineHeight="1.875rem"
        mt="8.125rem"
        textAlign="center"
        mb="1rem"
      >
        ©2021 IoTeX&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {lang.t("footer.tips")}
      </Text>
    </Box>
  );
});
