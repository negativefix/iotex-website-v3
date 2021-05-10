import React from 'react';
import { Box, Flex, Menu, MenuButton, useDisclosure, MenuList, Heading, Image, Text,  IconButton, Center } from '@chakra-ui/react';
import {  useHistory } from 'react-router-dom';
import { Earth } from './earth';
import { useStore } from '../../store';
import { Link } from "@chakra-ui/react"
import { observer, useLocalStore } from 'mobx-react-lite';
import { IoMenu } from "react-icons/io5";

export const Banner = observer(() => {
  const { lang } = useStore();

    return (
        <Box position="relative">
            <img src="/images/animation.svg" alt="" />
            <Box position="absolute" zIndex="2" w="100%" h="100%" top="0" left="0" css={{
              backgroundImage: 'url(/images/bigball.png), url(/images/smallball.png)',
              backgroundSize: '35rem 35rem, 13rem 13rem',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '10% 10%, 90% 50%'
            }}></Box>
          <Flex position="absolute" zIndex="3" w="100%" h="100%"  top="0" left="0" alignItems="center" justifyContent="center" direction="column">
            <Text fontSize={{xl: "5rem", "2xl": "6.25rem"}} fontWeight="semibold" color="white" w="70%" textAlign="center" mb="3.125rem">
              {lang.t("title")}
            </Text>
            <Text fontSize={{xl: "1.5rem", "2xl": "2rem"}} fontWeight="medium" color="white" w="70%" textAlign="center" mb="3rem">
              {lang.t("subtitle")}
            </Text>
            <Box w="20rem" cursor="pointer">
              <img src="/images/getStarted.png" alt="" />
            </Box>
          </Flex>
        </Box>
    );
});
