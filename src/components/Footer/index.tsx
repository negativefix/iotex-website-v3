import React from 'react';
import { Box, Flex, Menu, MenuButton, useDisclosure, MenuList, MenuItem, Image, Text,  IconButton, Center } from '@chakra-ui/react';
import {  useHistory } from 'react-router-dom';
import { useStore } from '../../store';
import { Link } from "@chakra-ui/react"
import { observer, useLocalStore } from 'mobx-react-lite';
import { IoMenu } from "react-icons/io5";

export const Footer = observer(() => {
  const { lang } = useStore();

  const config = [
    {
      name: lang.t("resources"),
      list: [
        {name: lang.t("ecosystem"), href: ""},
        {name: lang.t("secure.hardware"), href: ""},
        {name: lang.t("community"), href: ""},
        {name: lang.t("research.papers"), href: ""},
        {name: lang.t("delegate.program"), href: ""},
        {name: lang.t("charity.program"), href: ""},
      ]
    },
    {
      name: lang.t("develop"),
      list: [
        {name: lang.t("github"), href: ""},
        {name: lang.t("documentations"), href: ""},
        {name: lang.t("explorer"), href: ""},
        {name: lang.t("wallet"), href: ""},
        {name: lang.t("tools"), href: ""},
      ]
    },
    {
      name: lang.t("team"),
      list: [
        {name: lang.t("team"), href: ""},
        {name: lang.t("brand"), href: ""},
        {name: lang.t("ambassador"), href: ""},
        {name: lang.t("forum"), href: ""},
      ]
    }
  ]

    return (
      <Box mt="15rem" maxWidth={{base: "90%", md: '80%', "2xl": "1554px"}} mx="auto">
        <Flex justifyContent="space-between" flexWrap="wrap">
          {
            config.map(item => {
              return <Box key={item.name} w={{base: "100%", md: "auto"}} mb={{base: "2rem", md: "0"}}>
                <Text fontSize="1.125rem" fontWeight="medium"  mb="1.5rem">{item.name}</Text>
                <Flex direction="column">
                  {
                    item.list.map(option => {
                      return <Text key={option.name} fontSize="1rem" color="textColor"  cursor="pointer">{option.name}</Text>
                    })
                  }
                </Flex>
              </Box>
            })
          }
        </Flex>
        <Text fontSize={{base: "0.875rem", lg: "1rem"}} lineHeight="1.875rem" mt="8.125rem" textAlign="center">©2021 IoTeX&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{lang.t("footer.tips")}</Text>
      </Box>
    );
});
