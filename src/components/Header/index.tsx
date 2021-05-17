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
      {name: lang.t("get.started"), path: '/getStarted'},
      {name: lang.t("ecosystem"), path: '/ecosystem'},
      {name: lang.t("developers"), path: '/developers'},
      {name: lang.t("resources"),path: '/resources'},
      {name: lang.t("foundation"),path: '/foundation'},
    ]

    const store = useLocalStore(() => ({
      get curLang() {
        if (!langGroups[lang.lang]) return langGroups.en;
        return langGroups[lang.lang];
      },
    }));

    return (
        <Box w="100%" pt="1.125rem" px="1.25rem" boxSizing="border-box" position="absolute" top="0" left="0" zIndex="5">
            <Flex
                zIndex="999"
                justify={'center'}
            >
                <Link to={'/'} >
                    <Image src="/images/logo.png" alt="" objectFit="cover" style={{width: '13rem'}} />
                </Link>
                <Flex flex="1" alignItems="center" justifyContent="flex-end">
                  <Flex>
                    {
                      navConfig.map(item => {
                        return <Link key={item.name} to={item.path} style={{
                          textDecoration: 'none',
                          marginLeft:"5rem",
                          '&:hover': {
                            color: '#000  !important'
                          }
                          }} >
                          <Text color={location.pathname === item.path ? 'brandColor2' : 'white'} fontSize="xl" textDecoration="none" fontWeight="semibold" css={{
                            '&:hover': {
                              color: '#44FFB2 !important'
                            }
                          }}>
                            {item.name}
                          </Text>
                        </Link> 
                      })
                    }
                  </Flex>
                  <Menu isLazy>
                    <MenuButton ml="4rem" fontWeight="semibold" bg="transparent" color="white" border="none">{store.curLang.name}</MenuButton>
                    <MenuList color="mainColor" minWidth="60px" defaultValue={store.curLang.name}>
                        {Object.values(langGroups).map(item => {
                            return <MenuItem key={item.name}  css={{textAlign: 'center'}} value={item.name} onClick={() => lang.setLang(item.text)}>
                                <Center w="100%">{item.name}</Center>
                            </MenuItem>
                        })}
                    </MenuList>
                </Menu>
              </Flex>
            </Flex>
            <Box display={['block', 'none']}>
              <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<IoMenu />}
                    variant="ghost"
                    border="none"
                />
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
        </Box>
    );
});
