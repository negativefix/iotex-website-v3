import React from 'react';
import { Box, Flex, Input, MenuButton, useDisclosure, MenuList, Heading, Image, Text,  IconButton, Center } from '@chakra-ui/react';
import {  useHistory } from 'react-router-dom';
import { Earth } from './earth';
import { useStore } from '../../store';
import { Link } from "@chakra-ui/react"
import { observer, useLocalStore } from 'mobx-react-lite';
import { IoMenu } from "react-icons/io5";

export const DevBanner = observer(() => {
  const { lang } = useStore();

    return (
        <Box pt="14rem">
          <Flex  alignItems="left" justifyContent="center" direction="column">
            <Text fontSize={{xl: "5rem", "2xl": "5rem"}} w="70%" fontWeight="semibold" mb="2.5rem">
              {lang.t("dev.title")}
            </Text>
            <Text fontSize={{xl: "1.25rem", "2xl": "1.75rem"}} w="50%" fontWeight="medium" mb="5rem">
              {lang.t("dev.subtitle")}
            </Text>
            <Box position="relative" w="32%">
              <Input placeholder="Email" fontSize="1.75rem" fontWeight="medium"  css={{
                borderColor: 'rgba(255, 255, 255, 0.1)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                height: '4.5rem'
              }} />
              <Box bg='brandColor2' position="absolute" right="0" top="0" height="4.5rem" px="1.5rem" borderRadius="10px" cursor="pointer">
                <Text fontSize="1.375rem" fontWeight="semibold" color="btnTextColor" lineHeight="4.5rem"> {lang.t("submit")}</Text>
              </Box>
            </Box>
          </Flex>
        </Box>
    );
});
