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
      <Box mt={{base: "4rem", lg: "10rem", xl: "21.5rem"}} pb={{base: "2rem", lg: "10rem", xl: "21.375rem"}} css={{
        backgroundImage: 'url(/images/bulr_ball.png)',
        backgroundSize: '85%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100% 0%'
      }}>
        <Flex justifyContent="space-between" maxWidth={{base: "90%", "2xl": "1554px"}} mx="auto" direction={{base: "column-reverse", lg: "row"}}>
          <Box w={{base: "85%", lg: "35%", xl: "40%"}} mx={{base: "auto", lg: "initial"}}>
            <Box position="relative" pb="36%">
              <img src="/images/code.png" alt="" />
              <Box position="absolute" width="100%" height="100%" top="24%" left="10%">
                <img src="/images/code.png" alt="" />
              </Box>
            </Box>
            <Flex flexWrap="wrap"  justifyContent="space-between"  alignContent="space-between">
              {
                configs.map((item, index) => {
                  return <Flex key={index} w={{base: "100%", lg: "100%", xl: "48%"}}  h="48%" maxHeight="170px" justifyContent="space-between" direction="column" mb={{base: "3rem", xl: "6.25rem"}}>
                    <Image
                      boxSize={{base: "3rem", lg: "2.5rem", xl: "3.875rem"}}
                      objectFit="cover"
                      src={item.icon}
                      alt={item.name}
                    />
                    <Text fontSize={{base: "1.25rem", lg: "1.25rem", xl: "2rem"}} fontWeight="semibold" lineHeight="3.25rem" mb="0.5rem" mt="1rem">{item.name}</Text>
                    <a href={item.href} target="_blank">
                      <Text fontSize={{base: "1rem", lg: "0.875rem", xl: "1.125rem"}} color="brandColor" lineHeight="1.275rem">{item.desc} &gt;&gt;</Text>
                    </a>
                  </Flex>
                })
              }
            </Flex>
          </Box>
          <Box  w={{base: "100%", lg: "55%",  xl: "45%"}} pt={{base: "2rem", lg: "5rem", xl: "9.125rem"}}>
            <Text fontSize={{base: "1.5rem", md: "1.875rem", lg: "2.5rem", xl: "4rem", "2xl": "5rem"}} fontWeight="semibold" maxWidth="100%" mb="1.25rem">
              {lang.t("title4")}
            </Text>
            <Text fontSize={{base: "0.75rem", md: "1rem", lg: "1.25rem", xl: "1.5rem", "2xl": "1.8rem"}} fontWeight="medium"  mb={{base: "2rem", xl: "4.25rem"}} maxWidth={{base: "90%", xl: "75%"}} >
              {lang.t("subtitle4")}
            </Text>
            <Flex mt={{base: "5%", xl: "4.125rem"}} ml={{base: "0", lg: "10%", xl: "7.5rem"}} alignItems={{base: "flex-start", lg: "center"}} direction={{base: "column", lg: "row"}}>
              <a href="https://github.com/iotexproject" target="_blank">
                <Image
                  boxSize="3.75rem"
                  objectFit="fill"
                  src="/images/github_empty.png"
                  alt=""
                  mr="5vw"
                  mb={{base: "3rem", lg: 0}}
                />
              </a>
                <a href="https://docs.iotex.io/" style={{width: "100%"}}>
                  <Box bg="btnBgColor" className="commonBtn" borderRadius="10px" w={{base: "100%", lg: "375px"}} lineHeight={{base: "4rem", md: "6rem"}}  cursor="pointer">
                    <Text fontSize={{base: "1.25rem", md: "1.75rem"}} color="btnTextColor" fontWeight="bold" textAlign="center">{lang.t("read.documents")}</Text>
                  </Box>
                </a>
            </Flex>
            <Box mt={{base: "2rem", md: "3rem", xl: "5rem"}} borderRadius="15px" py={{base: "1rem", lg: "1.8rem"}} px={{base: "1rem", lg: "2.5rem"}} bg="url('/images/read_build_bg.png')" css={{
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat'
            }}>
              <Text fontSize={{base: "1rem", lg: "1.75rem"}} fontWeight="semibold" mb="0.875rem">{lang.t("ready.to.build")}</Text>
              <Text fontSize={{base: "1rem", lg: "1.25rem"}} mb="0.5rem">
                {lang.t("ready.to.build.desc")} <a style={{display: 'inline-block'}} href="https://iotex.io/halo" target="_blank">
                  <Text fontSize={{base: "1rem", lg: "1.25rem"}} color="brandColor" fontWeight="semibold" lineHeight="1.275rem">{lang.t("halo.href")}</Text>
                </a>
              </Text>
            </Box>
            <Image
              boxSize={{base: "8rem", lg: "14rem"}}
              objectFit="fill"
              src="/images/build_small_ball.png"
              alt=""
              mt={{base: "6rem", lg: "6.25rem"}}
              ml={{base: "60%", lg: "13.75rem"}}
              mb={{base: "4rem", lg: "0"}}
            />
          </Box>
        </Flex>
      </Box>
    );
});
