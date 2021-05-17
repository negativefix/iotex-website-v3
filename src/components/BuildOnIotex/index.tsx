import React from 'react';
import { Box, Flex, Menu, MenuButton, useDisclosure, MenuList, MenuItem, Image, Text,  IconButton, Center } from '@chakra-ui/react';
import {  useHistory } from 'react-router-dom';
import { useStore } from '../../store';
import { Link } from "@chakra-ui/react"
import { observer, useLocalStore } from 'mobx-react-lite';
import { IoMenu } from "react-icons/io5";

export const BuildOnIotex = observer(() => {
  const { lang } = useStore();

  const configs =   [
    {name: lang.t("evm.compatible"), desc: lang.t("deploy.contract"), icon: '/images/build1.png', href: "" },
    {name: lang.t("evm.compatible"), desc: lang.t("deploy.contract"), icon: '/images/build2.png', href: "" },
    {name: lang.t("evm.compatible"), desc: lang.t("deploy.contract"), icon: '/images/build3.png', href: "" },
    {name: lang.t("evm.compatible"), desc: lang.t("deploy.contract"), icon: '/images/build4.png', href: "" },
  ]
    return (
      <Box mt="21.5rem" pb="21.375rem" css={{
        backgroundImage: 'url(/images/bulr_ball.png)',
        backgroundSize: '85%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100% 0%'
      }}>
        <Flex justifyContent="space-between" maxWidth={{base: "90%", "2xl": "1554px"}} mx="auto">
          <Box w="40%">
            <Box position="relative" pb="36%">
              <img src="/images/code.png" alt="" />
              <Box position="absolute" width="100%" height="100%" top="24%" left="10%">
                <img src="/images/code.png" alt="" />
              </Box>
            </Box>
            <Flex flexWrap="wrap"  justifyContent="space-between"  alignContent="space-between">
              {
                configs.map((item, index) => {
                  return <Flex key={index} w="48%" h="48%" maxHeight="170px" justifyContent="space-between" direction="column" mb="6.25rem">
                    <Image
                      boxSize="3.875rem"
                      objectFit="cover"
                      src={item.icon}
                      alt={item.name}
                    />
                    <Text fontSize="2rem" fontWeight="semibold" lineHeight="3.25rem" mb="0.5rem" mt="1rem">{item.name}</Text>
                    <a href={item.href} target="_blank">
                      <Text fontSize="1.125rem" color="brandColor" lineHeight="1.275rem">{item.desc} &gt;&gt;</Text>
                    </a>
                  </Flex>
                })
              }
            </Flex>
          </Box>
          <Box  w="45%" pt="9.125rem">
            <Text fontSize={{xl: "5rem", "2xl": "5rem"}} lineHeight="6rem" fontWeight="semibold" maxWidth="100%" mb="1.25rem">
              {lang.t("title4")}
            </Text>
            <Text fontSize={{xl: "1.5rem", "2xl": "1.75rem"}} fontWeight="medium"  mb="4.25rem"maxWidth="75%" >
              {lang.t("subtitle4")}
            </Text>
            <Flex mt="4.125rem" ml="7.5rem" alignItems="center">
              <Image
                  boxSize="3.75rem"
                  objectFit="fill"
                  src="/images/github_empty.png"
                  alt=""
                  mr="3.45rem"
                />
                <a href="https://docs.iotex.io/">
                  <Box bg="btnBgColor" className="commonBtn" borderRadius="10px" width="22rem" height="93px" px="1rem"  py="1.6rem" cursor="pointer">
                    <Text fontSize="1.75rem" color="btnTextColor" fontWeight="bold" textAlign="center">{lang.t("read.documents")}</Text>
                  </Box>
                </a>
            </Flex>
            <Box mt="5rem" borderRadius="1.25rem" py="1.8rem" px="2.5rem" bg="url('/images/read_build_bg.png')" css={{
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat'
            }}>
              <Text fontSize="1.75rem" fontWeight="semibold" lineHeight="2rem" mb="0.875rem">{lang.t("ready.to.build")}</Text>
              <Text fontSize="1.25rem" lineHeight="2rem" mb="0.5rem">
                {lang.t("ready.to.build.desc")} <a style={{display: 'inline-block'}} href="https://iotex.io/halo" target="_blank">
                  <Text fontSize="1.125rem" color="brandColor" fontWeight="semibold" lineHeight="1.275rem">{lang.t("halo.href")}</Text>
                </a>
              </Text>
            </Box>
            <Image
                  boxSize="14rem"
                  objectFit="fill"
                  src="/images/build_small_ball.png"
                  alt=""
                  mt="6.25rem"
                  ml="13.75rem"
                />
          </Box>
        </Flex>
      </Box>
    );
});
