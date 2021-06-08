import React from 'react';
import { Box, Flex, Menu, MenuButton, useDisclosure, MenuList, MenuItem, Image, Text,  IconButton, Center } from '@chakra-ui/react';
import {  Link, useHistory } from 'react-router-dom';
import { MobileNav } from '@/components/Header/MobileNav';
import { useStore } from '../../store';
// import { Link } from "@chakra-ui/react"
import { observer, useLocalStore } from 'mobx-react-lite';
import { IoMenu } from "react-icons/io5";

const langGroups = {
	en: { name: 'EN', src: '/images/EN.png', text: 'en' },
	zh_CN: { name: 'CN', src: '/images/CN.png', text: 'zh_CN' },
};


export const Header = observer(() => {
  const { lang } = useStore();
  const history = useHistory();
  const { location } = history

    const navConfig = [
      {name: lang.t("get.started"), path: 'https://onboard.iotex.io', blank: true},
      {name: lang.t("developers"), path: '/developers', blank: false},
      {name: lang.t("iotx"),path: 'https://iotex.io/token', blank: true},
      {name: lang.t("ecosystem"), path: 'https://ecosystem.iotex.io', blank: true},
      {name: lang.t("press"),path: '/media-center', blank: false},
    ]

    const store = useLocalStore(() => ({
      get curLang() {
        if (!langGroups[lang.lang]) return langGroups.en;
        return langGroups[lang.lang];
      },
    }));

    return (
        <Box w="100%" p={{base: "0.5rem", md: "1.125rem"}} boxSizing="border-box" position="absolute" top="0" left="0" zIndex="5">
            <Flex justifyContent="space-between">
                <Link to={'/'}>
                    <Box w={{base: "5rem", md: "6rem",  "2xl": "10rem"}}>
                      <img src="/images/logo.png" alt="" />
                    </Box>
                </Link>
                <Flex flex="1" alignItems="center" justifyContent="flex-end" display={{base: 'none', md: 'flex'}}>
                  <Flex>
                    {
                      navConfig.map(item => {
                        return <a key={item.name} href={item.path} target="">
                          <Text color={location.pathname === item.path ? 'brandColor2' : 'white'} 
                            letterSpacing="0.5px"
                            ml={{ base: "1rem", lg: "3.5rem", "2xl": "3rem" }}
                            fontSize={{ base: "0.875rem", lg: "1rem", "2xl": "1.25rem" }} 
                            textDecoration="none" fontWeight="semibold" css={{
                            '&:hover': {
                              color: '#44FFB2 !important'
                            }
                          }}>
                            {item.name}
                          </Text>
                        </a> 
                      })
                    }
                  </Flex>
                  <Menu isLazy>
                    <MenuButton  ml={{ base: "1rem", lg: "4rem", "2xl": "3rem" }} letterSpacing="1px" fontWeight="semibold" bg="transparent" color="white" border="none"  fontSize={{ base: "0.875rem", lg: "1rem", '2xl': "1.25rem" }} >
                      {store.curLang.name}
                    </MenuButton>
                    <MenuList color="black" minWidth="60px" defaultValue={store.curLang.name}>
                        {Object.values(langGroups).map(item => {
                            return <MenuItem key={item.name}  css={{textAlign: 'center'}} value={item.name} onClick={() => lang.setLang(item.text)}>
                                <Center w="100%">{item.name}</Center>
                            </MenuItem>
                        })}
                    </MenuList>
                </Menu>
              </Flex>
              <Box display={{base: 'block', md: 'none'}}>
                <Menu>
                    <MenuButton
                      aria-label="Options"
                      variant="ghost"
                      border="none"
                      boxSize="1.5rem"
                  >
                    <Image src="/images/menue.png" alt="" />
                  </MenuButton>
                  <MenuList color="white">
                      {
                        navConfig.map(item => {
                          return<Link to={item.path} key={item.name} style={{textDecoration: 'none'}}> 
                              <MenuItem color="black">
                                <Text css={{userSelect: 'none'}}>{item.name}</ Text>
                              </MenuItem>
                          </Link>
                          })
                      }
                  </MenuList>
                </Menu>
              </Box>
            </Flex>
           
        </Box>
    );
});
