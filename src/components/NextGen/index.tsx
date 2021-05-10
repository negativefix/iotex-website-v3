import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { useStore } from '../../store';
import { observer, useLocalStore } from 'mobx-react-lite';

export const NextGen = observer(() => {
  const { lang } = useStore();

  const store = useLocalStore(() => ({
    configs: [
      {name: lang.t("digital.identity"), desc: lang.t("advantage1.tips"), icon: '/images/user.png',selectedIcon: '/images/card1.png', show: false },
      {name: lang.t("mining.machines"), desc: lang.t("advantage1.tips"), icon: '/images/mining.png',selectedIcon: '/images/card2.png', show: false },
      {name: lang.t("real.world.oracles"), desc: lang.t("advantage1.tips"), icon: '/images/real.png',selectedIcon: '/images/card3.png', show: false },
      {name: lang.t("dEFIoT"), desc: lang.t("advantage1.tips"), icon: '/images/deflot.png',selectedIcon: '/images/card4.png', show: false },
    ],
    dapps1: [
      {name: lang.t("ucam"), desc: lang.t("ucam.desc"), icon: "/images/ucam.png" },
      {name: lang.t("pebble"), desc: lang.t("pebble.desc"), icon: "/images/pebble.png" },
      {name: lang.t("ucam"), desc: lang.t("ucam.desc"), icon: "/images/ucam.png" },
    ],
    dapps2: [
      {name: lang.t("cyclone"), desc: lang.t("cyclone.desc"), icon: "/images/cyc.png" },
      {name: lang.t("mimo"), desc: lang.t("mimo.desc"), icon: "/images/mimo.png" },
      {name: lang.t("cyclone"), desc: lang.t("cyclone.desc"), icon: "/images/cyc.png" },
    ],
    changeCard (item, index)  {
      let isShowArr = store.configs.filter(item => item.show === true)
      const arr = [...store.configs]
      console.log(isShowArr, item)
      if(isShowArr.length === 0) {
        arr[index].show = true
        store.configs = arr
        return false
      } else {
        if(item.name === isShowArr[0].name) {
          arr[index].show = false
        } else {
          arr.filter(item => item.show = false)
          arr[index].show = true
        }
        console.log(arr)
        store.configs = arr
      }
    },
  }));

    return (
      <Box mt="16rem" css={{
        backgroundImage: 'url(/images/next-gen-bg.png)',
        backgroundSize: '30%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0% 80%'
      }}>
        <Box maxWidth={{base: '90%', "2xl": "1554px"}} mx="auto">
          <Text fontSize={{xl: "5rem", "2xl": "5rem"}} lineHeight="6rem" fontWeight="semibold" maxWidth="76%" mb="1.25rem">
            {lang.t("title3")}
          </Text>
          <Text fontSize={{xl: "1.5rem", "2xl": "1.75rem"}} fontWeight="medium"  mb="4.25rem"maxWidth="45%" >
            {lang.t("subtitle3")}
          </Text>
          <Flex justifyContent="space-between">
            <Box bg="btnBgColor" borderRadius="10px" width="375px" height="93px" px="1rem"  py="1.6rem" cursor="pointer">
              <Text fontSize="1.75rem" color="btnTextColor" fontWeight="bold" textAlign="center">{lang.t("explore.ecosystem")}</Text>
            </Box>
            <Flex flexWrap="wrap" maxWidth="60%" justifyContent="space-between"  alignContent="space-between">
              {
                store.configs.map((item, index) => {
                  return <Flex key={item.name} w="48%" h="48%" maxHeight="254px" p="2.5rem" justifyContent="space-between" 
                    css={{
                        background: 'url(/images/next_card.png)',
                        mixBlendMode: 'normal',
                        borderRadius: '0.625rem',
                        backgroundSize: '100% 100%',
                        '&:hover': {
                          background: `url(${item.selectedIcon})`,
                          backgroundSize: '100% 100%'
                        }
                    }}
                    onClick={() => store.changeCard(item, index)}>
                    {
                      item.show ? <>
                      <Text fontSize="1.2rem" fontWeight="semibold" lineHeight="2.625rem">{item.desc}</Text>
                      </> : <>
                        <Text fontSize="2rem" fontWeight="semibold" lineHeight="2.625rem">{item.name}</Text>
                        <Image
                          boxSize="10rem"
                          objectFit="cover"
                          src={item.icon}
                          alt={item.name}
                        />
                      </>
                    }
                  </Flex>
                })
              }
            </Flex>
          </Flex>
        </Box>
        <Box mt="12.75rem" textAlign="right" position="relative" height="28.25rem">
            <Box position="absolute" height="7.5rem"  mb="2.875rem" maxWidth="1446px" top="0" right="-15%">
              <Flex justifyContent="space-between">
                {
                  store.dapps1.map((item, index) => {
                    return <Flex p="1.25rem" maxWidth="450px" w="30%" key={index} cursor="pointer" css={{
                      background: 'linear-gradient(147.16deg, rgba(255, 255, 255, 0.2) 14.71%, rgba(255, 255, 255, 0) 114.16%)',
                      mixBlendMode: 'normal',
                      borderRadius: '1.25rem',
                      boxShadow: 'inset -1px -1px 0px rgba(255, 255, 255, 0.25)',
                      backdropFilter: 'blur(100px)'
                    }}>
                      <Image
                        boxSize="3.75rem"
                        objectFit="cover"
                        src={item.icon}
                        alt={item.name}
                        mr="1.25rem"
                      />
                      <Box textAlign="left">
                        <Text fontSize="1.125rem" lineHeight="1.25rem" fontWeight="semibold" mb="0.5rem">{item.name}</Text>
                        <Text fontSize="1rem" lineHeight="1.25rem">{item.desc}</Text>
                      </Box>
                    </Flex>
                  })
                }
              </Flex>
            </Box>
            <Box height="7.5rem"  mb="2.875rem" position="absolute"  maxWidth="1446px"  top="10.375rem" right="-5%">
              <Flex justifyContent="space-between" maxWidth="1446px"  mb="2.875rem">
                {
                  store.dapps2.map((item, index) => {
                    return <Flex p="1.25rem" maxWidth="450px" w="30%" key={index} cursor="pointer"  css={{
                      background: 'linear-gradient(147.16deg, rgba(255, 255, 255, 0.2) 14.71%, rgba(255, 255, 255, 0) 114.16%)',
                      mixBlendMode: 'normal',
                      borderRadius: '1.25rem',
                      boxShadow: 'inset -1px -1px 0px rgba(255, 255, 255, 0.25)',
                      backdropFilter: 'blur(100px)'
                    }}>
                      <Image
                        boxSize="3.75rem"
                        objectFit="cover"
                        src={item.icon}
                        alt={item.name}
                        mr="1.25rem"
                      />
                      <Box>
                        <Text fontSize="1.125rem" lineHeight="1.25rem" fontWeight="semibold" mb="0.5rem">{item.name}</Text>
                        <Text fontSize="1rem" lineHeight="1.25rem">{item.desc}</Text>
                      </Box>
                    </Flex>
                  })
                }
              </Flex>
            </Box>
            <Box height="7.5rem"  mb="2.875rem" position="absolute"  maxWidth="1446px"  top="20.75rem" right="1.6875rem">
              <Flex justifyContent="space-between" maxWidth="1446px">
                {
                  store.dapps1.map((item, index) => {
                    return <Flex p="1.25rem" maxWidth="450px" w="30%" key={index} cursor="pointer"  css={{
                      background: 'linear-gradient(147.16deg, rgba(255, 255, 255, 0.2) 14.71%, rgba(255, 255, 255, 0) 114.16%)',
                      mixBlendMode: 'normal',
                      borderRadius: '1.25rem',
                      boxShadow: 'inset -1px -1px 0px rgba(255, 255, 255, 0.25)',
                      backdropFilter: 'blur(100px)'
                    }}>
                      <Image
                        boxSize="3.75rem"
                        objectFit="cover"
                        src={item.icon}
                        alt={item.name}
                        mr="1.25rem"
                      />
                      <Box>
                        <Text fontSize="1.125rem" lineHeight="1.25rem" fontWeight="semibold" mb="0.5rem">{item.name}</Text>
                        <Text fontSize="1rem" lineHeight="1.25rem">{item.desc}</Text>
                      </Box>
                    </Flex>
                  })
                }
              </Flex>
            </Box>
        </Box>
      </Box>
    );
});
