import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { useStore } from '../../store';
import { observer, useLocalStore } from 'mobx-react-lite';
import { Link } from "@chakra-ui/react"

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
      {name: lang.t("ucam"), desc: lang.t("ucam.desc"), icon: "/images/ucam.png", href: "https://ucam.iotex.io/" },
      {name: lang.t("pebble"), desc: lang.t("pebble.desc"), icon: "/images/pebble.png", href: "https://iotex.io/pebble" },
      {name: lang.t("smart.lock"), desc: lang.t("smart.lock.desc"), icon: "/images/logo_samrtlock.png", href: "https://ecosystem.iotex.io/post/840" },
    ],
    dapps2: [
      {name: lang.t("ioTube"), desc: lang.t("ioTube.desc"), icon: "/images/logo_iotube.png", href: "https://tube.iotex.io/" },
      {name: lang.t("mimo"), desc: lang.t("mimo.desc"), icon: "/images/mimo.png", href: "https://mimo.finance/" },
      {name: lang.t("cyclone"), desc: lang.t("cyclone.desc"), icon: "/images/cyc.png", href: "https://cyclone.xyz/" },
    ],
    dapps3: [
      {name: lang.t("IoTT.portal"), desc: lang.t("IoTT.portal.desc"), icon: "/images/logo_iott.png", href: "https://iott.network/" },
      {name: lang.t("hermes"), desc: lang.t("hermes.desc"), icon: "/images/logo_hermes.png", href: "https://hermes.to/" },
      {name: lang.t("minttoken"), desc: lang.t("minttoken.desc"), icon: "/images/logo_minttoken.png", href: "https://minttoken.io/" },
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
      <Box mt={{base: "", lg: "16rem" }} css={{
        backgroundImage: 'url(/images/next-gen-bg.png)',
        backgroundSize: '30%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0% 80%'
      }}>
        <Box maxWidth={{base: '90%', "2xl": "1554px"}} mx="auto">
          <Text fontSize={{base: "1.5rem", md: "1.875rem", lg: "2.5rem", xl: "4rem", "2xl": "5rem"}} fontWeight="semibold" maxWidth="75%" mb="1.25rem">
            {lang.t("title3")}
          </Text>
          <Text fontSize={{base: "0.75rem", md: "1rem", lg: "1.25rem", xl: "1.5rem", "2xl": "1.8rem"}} fontWeight="medium"  mb={{base: "2rem", lg: "4.25rem"}}  maxWidth={{base: "100%", lg: "45%"}} >
            {lang.t("subtitle3")}
          </Text>
          <Flex justifyContent="space-between" flexDirection={{base: "column", xl: "row"}}>
            <a href="https://ecosystem.iotex.io/">
              <Box bg="btnBgColor" className="commonBtn" borderRadius="10px" w={{base: "100%", md: "375px"}} lineHeight={{base: "4rem", md: "6rem"}} cursor="pointer">
                <Text fontSize={{base: "1.25rem", md: "1.75rem"}} color="btnTextColor" fontWeight="bold" textAlign="center">{lang.t("explore.ecosystem")}</Text>
              </Box>
            </a>
            <Flex flexWrap="wrap" maxWidth={{base: "100%", xl: "60%"}} justifyContent="space-between"  alignContent="space-between" mt={{base: "3rem", xl: 0}}>
              {
                store.configs.map((item, index) => {
                  return <Flex key={item.name} w={{base: "100%", md: "48%", lg: "48%"}} h={{base: "7.875rem", lg: "46%"}}  mb={{base: "2rem", xl: 0}} maxHeight="254px" p={{base: "1.25rem", lg: "2.5rem"}} justifyContent="space-between" 
                    css={{
                        background: 'url(/images/next_card.png)',
                        mixBlendMode: 'normal',
                        borderRadius: '0.625rem',
                        backgroundSize: '100% 100%',
                        transition: 'background 0.6s',
                        '&:hover': {
                          background: `url(${item.selectedIcon})`,
                          backgroundSize: '100% 100%'
                        }
                    }}
                    onClick={() => store.changeCard(item, index)}>
                    {
                      item.show ? <>
                      <Text fontSize={{base: "1rem", lg: "1.2rem"}} fontWeight="semibold" lineHeight={{base: "1.8rem", lg: "2.625rem"}}>{item.desc}</Text>
                      </> : <>
                        <Text fontSize={{base: "1rem", lg: "2rem"}} w={{base: "40%", lg:"max-content"}} fontWeight="semibold" >{item.name}</Text>
                        <Image
                          boxSize={{base: "5rem", lg: "10rem"}}
                          objectFit="cover"
                          src={item.icon}
                          alt={item.name}
                          css={{
                            filter: 'drop-shadow(0px 256px 200px rgba(0, 24, 0, 0.15)), drop-shadow(0px 110px 80px rgba(0, 1, 0, 0.07)), drop-shadow(0px 60px 55px rgba(0, 1, 0, 0.09)), drop-shadow(0px 35px 30px rgba(0, 21, 0, 0.0329042)), drop-shadow(0px 20px 16px rgba(0, 1, 0, 0.1))'
                          }}
                        />
                      </>
                    }
                  </Flex>
                })
              }
            </Flex>
          </Flex>
        </Box>
        <Box mt="12.75rem" textAlign="right" position="relative" height="28.25rem" display={{base: 'none', xl: "block"}}>
            <Box position="absolute" height="7.5rem"  mb="2.875rem" maxWidth="1446px" top="0" right="-15%">
              <Flex justifyContent="space-between">
                {
                  store.dapps1.map((item, index) => {
                    return <Flex  key={index} p="1.25rem" cursor="pointer" w="30%" maxWidth="450px"  css={{
                        background: 'linear-gradient(147.16deg, rgba(255, 255, 255, 0.2) 14.71%, rgba(255, 255, 255, 0) 114.16%)',
                        mixBlendMode: 'normal',
                        borderRadius: '1.25rem',
                        boxShadow: 'inset -1px -1px 0px rgba(255, 255, 255, 0.25)',
                        backdropFilter: 'blur(100px)'
                      }}>
                        <a href={item.href} style={{display: 'flex'}} target="_blank">
                          <Image
                            boxSize="3.75rem"
                            objectFit="cover"
                            src={item.icon}
                            alt={item.name}
                            mr="1.25rem"
                          />
                          <Box textAlign="left">
                            <Text fontSize="1.125rem" lineHeight="1.25rem" fontWeight="semibold" mb="0.5rem">{item.name}</Text>
                            <Text fontSize="1rem" lineHeight="1.25rem" className="showTwoLine">{item.desc}</Text>
                          </Box>
                        </a>
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
                       <a href={item.href} style={{display: 'flex'}} target="_blank">
                        <Image
                          boxSize="3.75rem"
                          objectFit="cover"
                          src={item.icon}
                          alt={item.name}
                          mr="1.25rem"
                        />
                        <Box textAlign="left">
                          <Text fontSize="1.125rem" lineHeight="1.25rem" fontWeight="semibold" mb="0.5rem">{item.name}</Text>
                          <Text fontSize="1rem" lineHeight="1.25rem" className="showTwoLine">{item.desc}</Text>
                        </Box>
                      </a>
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
                       <a href={item.href} style={{display: 'flex'}} target="_blank">
                          <Image
                            boxSize="3.75rem"
                            objectFit="cover"
                            src={item.icon}
                            alt={item.name}
                            mr="1.25rem"
                          />
                          <Box textAlign="left">
                            <Text fontSize="1.125rem" lineHeight="1.25rem" fontWeight="semibold" mb="0.5rem">{item.name}</Text>
                            <Text fontSize="1rem" lineHeight="1.25rem" className="showTwoLine">{item.desc}</Text>
                          </Box>
                        </a>
                    </Flex>
                  })
                }
              </Flex>
            </Box>
        </Box>
        <Box display={{base: "block", xl: "none"}} w="90%" mx="auto">
            {
              [store.dapps1, store.dapps2, store.dapps3].map((item, index) => {
                return <Flex key={`dapps${index}`} justifyContent="space-between" mb="2rem">
                  {
                    item.map(option => {
                      return <a href={option.href}  key={option.name} style={{
                        width: "31%",
                        padding: "1rem 0.5rem",
                        display: 'flex', 
                        alignItems: "center",
                        justifyContent: "center",
                        background: 'linear-gradient(147.16deg, rgba(255, 255, 255, 0.2) 14.71%, rgba(255, 255, 255, 0) 114.16%)',
                        mixBlendMode: 'normal',
                        borderRadius: '10px',
                        boxShadow: 'inset -1px -1px 0px rgba(255, 255, 255, 0.25)',
                        backdropFilter: 'blur(100px)'}} target="_blank">
                      <Image
                        boxSize="1.5rem"
                        objectFit="cover"
                        src={option.icon}
                        alt={option.name}
                        mr="0.5rem"
                      />
                      <Text fontSize={{base: "0.75rem", md: "1.2rem"}} fontWeight="semibold">{option.name}</Text>
                    </a>
                    })
                  }
                </Flex>
              })
            }
        </Box>
      </Box>
    );
});
