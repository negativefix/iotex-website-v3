import React from 'react';
import { Box, Flex, Menu, MenuButton, Input, MenuList, MenuItem, Image, Text,  IconButton, Center } from '@chakra-ui/react';
import {  useHistory } from 'react-router-dom';
import { useStore } from '../../store';
import { Link } from "@chakra-ui/react"
import { observer, useLocalStore } from 'mobx-react-lite';
import { IoMenu } from "react-icons/io5";

export const JoinRevolution = observer(() => {
  const { lang } = useStore();

  const infos = [
    {title: lang.t("telegram"), icon: "/images/icon_telegram.png", desc: lang.t("telegram.desc")},
    {title: lang.t("twitter"), icon: "/images/icon_twitter.png", desc: lang.t("twitter.desc")},
    {title: lang.t("github"), icon: "/images/icon_gitHub.png", desc: lang.t("github.desc")},
    {title: lang.t("youtube"), icon: "/images/icon_youtube.png", desc: lang.t("youtube.desc")},
  ]

    return (
      <Box pb="30rem">
        <Box  maxWidth={{base: '90%', "2xl": "1554px"}} mx="auto" borderRadius="1.125rem" css={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 133.06%)',
            boxShadow: 'inset -1px -1px 0px rgba(172, 208, 254, 0.25)',
          }}>
            <Flex direction="column" pt="5rem" pb="7.5rem" alignItems="center">
              <Text fontSize={{xl: "3rem", "2xl": "4rem"}} lineHeight="6rem" fontWeight="semibold" maxWidth="100%" mb="1rem">
                {lang.t("title6")}
              </Text>
              <Text fontSize={{xl: "1rem", "2xl": "1.25rem"}} fontWeight="medium" lineHeight="2.25rem"  mb="4.685rem" textAlign="center" maxWidth="55%" >
                {lang.t("subtitle6")}
              </Text>
              <Flex w="55%" mb="8.56rem" justifyContent="space-between">
                {
                  infos.map(item => {
                    return <Box key={item.title} textAlign="center" maxWidth="9.5rem">
                      <Image
                        boxSize="4.5rem"
                        objectFit="cover"
                        src={item.icon}
                        alt={item.title}
                        mx="auto"
                        mb="2rem"
                      />
                      <Text fontSize="1.25rem" fontWeight="semibold" lineHeight="3.25rem">{item.title}</Text>
                      <Text fontSize="1rem" color="grayColor2" fontWeight="medium" lineHeight="1.375rem">{item.desc}</Text>
                    </Box>
                  })
                }
              </Flex>
              <Text fontSize="2.25rem" fontWeight="semibold" lineHeight="2rem" mb="1rem">{lang.t("stay.updated")}</Text>
              <Text fontSize="1.125rem" fontWeight="medium" lineHeight="1.375rem" mb="2.5rem">{lang.t("stay.updated.desc")}</Text>
              <Box position="relative" w="28%">
                <Input css={{
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  height: '4.5rem'
                }} />
                <Box bg='brandColor2' position="absolute" right="0" top="0" height="4.5rem" px="1.25rem" borderRadius="10px" cursor="pointer">
                  <Text fontSize="1.375rem" fontWeight="semibold" color="btnTextColor" lineHeight="4.5rem"> {lang.t("submit")}</Text>
                </Box>
              </Box>
            </Flex>
          </Box>
      </Box>
    );
});
