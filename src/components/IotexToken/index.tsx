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
          <Text fontSize={{xl: "5rem", "2xl": "5rem"}} lineHeight="6rem" fontWeight="semibold" maxWidth="100%" mb="1.25rem">
            {lang.t("title5")}
          </Text>
          <Text fontSize={{xl: "1.5rem", "2xl": "1.75rem"}} fontWeight="medium"  mb="4.25rem"maxWidth="55%" >
            {lang.t("subtitle5")}
          </Text>
          <Box bg="btnBgColor" className="commonBtn" borderRadius="10px" width="16rem" height="93px" px="1rem"  py="1.6rem" cursor="pointer">
            <Text fontSize="1.75rem" color="btnTextColor" fontWeight="bold" textAlign="center">{lang.t("learn.more")}</Text>
          </Box>
          <Box mt="7.25rem">
            <Flex maxWidth={{base: '90%', "2xl": "1554px"}} mx="auto" h="330px" mb="8.56rem" justifyContent="space-between">
              {
                advantages.map(item => {
                  return <DropLinkItem key={item.title} title={item.title} icon={item.icon} desc={item.desc}  />
                })
              }
            </Flex>
          </Box>
      </Box>
    );
});
