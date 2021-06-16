import React from 'react';
import { Box, Flex, Input, MenuButton, useDisclosure, MenuList, Heading, Image, Text,  IconButton, Center } from '@chakra-ui/react';
import {  useHistory } from 'react-router-dom';
import { Earth } from './earth';
import { useStore } from '../../store';
import { Link } from "@chakra-ui/react"
import { observer, useLocalStore } from 'mobx-react-lite';
import { useMediaQuery } from "@chakra-ui/react"
// @ts-ignore
import bannerMobileBg from '@/assets/images/dev/banner_mobile_bg.png?webp'
export const DevBanner = observer(() => {
  const { lang } = useStore();
  const [isMaxThan468] = useMediaQuery("(min-width: 468px)")

    return (
        <Box position="relative" height={{base: "700px", sm: "470px", md: "700px", lg: "850px", xl: "1156px", "2xl": "1290px"}}>
          <img src={!isMaxThan468 ? bannerMobileBg : "/images/banner_bg.png"} style={{opacity: 0}} alt="" />
          <Box  position="absolute" top={{base: "5.5rem", sm: "6.25rem"}} left=" 0" w="100%" h="60%" zIndex="2">
            <Flex  alignItems="left" justifyContent="center" direction="column" w="100%" h="100%" maxWidth={{base: '90%', lg: "80%", "2xl": "1554px"}} mx="auto">
              <Text  fontSize={{base: "2.25rem", sm: "2.5rem", lg: "2.5rem", xl: "4rem", "2xl": "5rem"}}
                mb={{base: "1rem", md: "2rem", xl: "3rem", "2xl": "4rem"}}
                textAlign={{base: "center", sm: "left"}}
                fontWeight="semibold" whiteSpace={{base: "inherit", md: "pre-line"}}>
                {lang.t("dev.title")}
              </Text>
              <Text
                fontSize={{base: "0.75rem", sm: "1rem", lg: "1.25rem", xl: "1.5rem", "2xl": "1.75rem"}}
                mb={{base: "7rem", sm: "2rem", xl: "3rem", "2xl": "4rem"}} opacity="0.85"
                textAlign={{base: "center", sm: "left"}} whiteSpace="pre-line" wordBreak="break-word"
                w={{base: "100%", md: 'max-content'}} fontWeight="medium">
                {lang.t("dev.subtitle")}
              </Text>
              <Text
                fontSize={{base: "0.75rem", sm: "1rem", lg: "1.25rem", "2xl": "1.25rem"}}
                textAlign={{base: "center", sm: "left"}}
                opacity="0.5" mb="0.5rem">
                {lang.t("dev.banner.desc")}
              </Text>
              <Box position="relative" w={{base: "100%", sm: "60%", md: "40%", xl: "35vw", "2xl": "25vw"}}>
                <Input placeholder="Email"
                  fontSize={{base: "0.75rem", sm: "0.875rem", "xl": "1.375rem"}} fontWeight="medium" pr="20%"
                  h={{base: "3rem", sm: "2.5rem", md: "3rem", "xl": "4.5rem"}}
                  css={{
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&::placholder': {
                      opacity: 0.5
                    }
                  }} />
                <Box bg='brandColor2' position="absolute" zIndex="2" right="0" top="0"
                    h={{base: "3rem", sm: "2.5rem", md: "3rem",  "xl": "4.5rem"}} w={{base: "5rem", md: "6rem", "xl": "8.125rem"}}
                    textAlign="center" borderRadius="10px" cursor="pointer">
                  <Text fontSize={{base: "0.75rem", sm: "0.875rem", "xl": "1.375rem"}} fontWeight="semibold" color="btnTextColor" lineHeight={{base: "3rem", sm: "2.5rem", md: "3rem", "xl": "4.5rem"}}> {lang.t("submit")}</Text>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
    );
});
