import React from 'react';
import { Box, Flex, Menu, MenuButton, useDisclosure, MenuList, MenuItem, Image, Text,  IconButton, Center } from '@chakra-ui/react';
import {  useHistory } from 'react-router-dom';
import { useStore } from '../../store';
import { Link } from "@chakra-ui/react"
import { observer, useLocalStore } from 'mobx-react-lite';
import {DropLinkItem} from '@/components/DropLinkItem/index'




export const IotexToken = observer(() => {
  const { lang } = useStore();

  const advantages = [
    {title: lang.t("stake.earn"), icon: "/images/stake.png", desc: lang.t("stake.earn.desc")},
    {title: lang.t("Interact with Dapps"), icon: "/images/Interact.png", desc: lang.t("Interact with Dapps.desc")},
    {title: lang.t("decentralized.exchange"), icon: "/images/decentralized.png", desc: lang.t("decentralized.exchange.desc")},
    {title: lang.t('burn.drop.tokenomics'), icon: "/images/burn.png", desc: lang.t("burn.drop.tokenomics.desc")},
  ]

    return (
      <Box  maxWidth={{base: '90%', "2xl": "1554px"}} mx="auto">
          <Text fontSize={{base: "1.5rem", md: "1.875rem", lg: "2.5rem", xl: "4rem", "2xl": "5rem"}}  fontWeight="semibold" maxWidth="100%" mb={{base: "1rem", lg: "1.25rem"}}>
            {lang.t("title5")}
          </Text>
          <Text fontSize={{base: "0.75rem", md: "1rem", lg: "1.25rem", xl: "1.5rem", "2xl": "1.8rem"}}  fontWeight="medium"   mb={{base: "2rem", lg: "4.25rem"}} maxWidth={{base: "90%", xl: "55%"}} >
            {lang.t("subtitle5")}
          </Text>
          <a href="/">
            <Box bg="btnBgColor" className="commonBtn" borderRadius="10px" w={{base: "100%", lg: "16rem"}} lineHeight={{base: "4rem", md: "6rem"}} cursor="pointer">
              <Text fontSize={{base: "1.25rem", md: "1.75rem"}}  color="btnTextColor" fontWeight="bold" textAlign="center">{lang.t("learn.more")}</Text>
            </Box>
          </a>
          <Box mt={{base: "4rem", lg: "7.25rem"}}>
            <Flex flexWrap={{base: "warp", lg: "nowrap"}} h={{base: "480px", lg: "330px"}} mb="8.56rem" justifyContent="space-between">
              {
                advantages.map(item => {
                  return <Box  key={item.title} h={{base: "240px", lg: "330px"}} w={{base: "48%", lg: "100%"}}>
                    <DropLinkItem title={item.title} icon={item.icon} desc={item.desc}  />
                  </Box>
                })
              }
            </Flex>
          </Box>
      </Box>
    );
});
