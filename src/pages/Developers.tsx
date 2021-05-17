import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store/index';
import { Flex, Box, Text, Image} from '@chakra-ui/react';
import BasicLayout from '../Layouts/BasicLayout'
import {DevBanner} from '@/components/Banner/DevBanner'
import {LogoCardItem} from '@/components/LogoCardItem/index'
import {Footer} from '@/components/Footer/index'



export const Developers = observer(() => {
  const { lang } = useStore();
  const tools = [
    {name: lang.t("tool1"), icon: ''},
    {name: lang.t("tool2"), icon: ''},
    {name: lang.t("tool3"), icon: ''},
    {name: lang.t("tool4"), icon: ''},
    {name: lang.t("tool5"), icon: ''},
    {name: lang.t("tool6"), icon: ''},
    {name: lang.t("tool7"), icon: ''},
  ]

  const products = [
    {title: lang.t("pebble.tracker"), icon: "/images/evm-icon.png", desc: lang.t('pebble.tracker.desc')},
    {title: lang.t("arduino"), icon: "/images/cross.png", desc: lang.t("arduino.desc")},
    {title: lang.t("raspberry.pi"), icon: "/images/roll.png", desc: lang.t("raspberry.desc")},
  ]

  const physical = [
    {title: lang.t("launch.dapp"), icon: "/images/evm-icon.png", desc: lang.t("launch.dapp.desc")},
    {title: lang.t("launch.token"), icon: "/images/evm-icon.png", desc: lang.t("launch.token.desc")},
    {title: lang.t("run.node"), icon: "/images/evm-icon.png", desc: lang.t("run.node.desc")},
    {title: lang.t("intergrate.iot.devices"), icon: "/images/evm-icon.png", desc: lang.t("intergrate.iot.devices.desc")},
    {title: lang.t("go.cross.chain"), icon: "/images/evm-icon.png", desc: lang.t("go.cross.chain.desc")},
    {title: lang.t("trad.assets"), icon: "/images/evm-icon.png", desc: lang.t("trad.assets.desc")},
    {title: lang.t("mine.tracker"), icon: "/images/evm-icon.png", desc: lang.t("mine.tracker.desc")},
  ]

  const logos = [
    {icon: '/images/icon-logo1.png', iocn_active: '/images/icon-logo1_s.png'},
    {icon: '/images/icon-logo1.png', iocn_active: '/images/icon-logo1_s.png'},
    {icon: '/images/icon-logo1.png', iocn_active: '/images/icon-logo1_s.png'},
    {icon: '/images/icon-logo1.png', iocn_active: '/images/icon-logo1_s.png'},
    {icon: '/images/icon-logo1.png', iocn_active: '/images/icon-logo1_s.png'},
    {icon: '/images/icon-logo1.png', iocn_active: '/images/icon-logo1_s.png'},
    {icon: '/images/icon-logo1.png', iocn_active: '/images/icon-logo1_s.png'},
    {icon: '/images/icon-logo1.png', iocn_active: '/images/icon-logo1_s.png'},
    {icon: '/images/icon-logo1.png', iocn_active: '/images/icon-logo1_s.png'},
  ]

  const awards = [
    {icon: '/images/icon-logo1.png', iocn_active: '/images/icon-logo1_s.png'},
    {icon: '/images/icon-logo2.png', iocn_active: '/images/icon-logo2_s.png'},
    {icon: '/images/icon-logo3.png', iocn_active: '/images/icon-logo3_s.png'},
    {icon: '/images/icon-logo4.png', iocn_active: '/images/icon-logo4_s.png'},
  ]

  const apps = [
    {name: lang.t("app1"), desc: lang.t("app1"), icon: '/images/user.png',selectedIcon: '/images/card1.png'},
    {name: lang.t("app2"), desc: lang.t("app2"), icon: '/images/user.png',selectedIcon: '/images/card3.png'},
    {name: lang.t("app3"), desc: lang.t("app3"), icon: '/images/user.png',selectedIcon: '/images/card2.png'},
  ]
  

  return (
    <BasicLayout>
      <Box css={{
          backgroundImage: 'url(/images/dev_banner_bg1.png), url(/images/dev_banner_bg3.png), url(/images/dev_banner_bg2.png)',
          backgroundSize: '100%, 100% 100%, 100% 65%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '-5vw 0, 100% 0, 35vw 8%'
        }}>
        <Box maxWidth={{base: "90%", "2xl": "1554px"}} mx="auto" >
          <DevBanner />
          <Flex justifyContent="space-between" alignItems="center" mt="21.25rem">
            {
              tools.map(item => {
                return <Flex key={item.name} direction="column" justifyContent="center" alignItems="center">
                  <Image
                      boxSize="4rem"
                      objectFit="cover"
                      src="/images/evm-icon.png"
                      alt="img_circular3"
                      mb="1rem"
                    />
                  <Text fontSize="0.875rem">{item.name}</Text>
                </Flex>
              })
            }
          </Flex>
          <Image
            boxSize="9.6rem"
            objectFit="cover"
            src="/images/dev_ball.png"
            alt="img_circular3"
            ml="10%"
            mt="13.25rem"
          />
          <Flex justifyContent="space-between">
            <Box w="20vw" pt="2rem">
              {
                products.map(item => {
                  return <Flex key={item.title} direction="column" justifyContent="center" alignItems="flex-start" mb="4rem">
                    <Image
                        boxSize="4rem"
                        objectFit="cover"
                        src="/images/evm-icon.png"
                        alt="img_circular3"
                        mb="2rem"
                      />
                    <Text fontSize="1.75rem" fontWeight="semibold" mb="2rem">{item.title}</Text>
                    <Text fontSize="1.125rem" fontWeight="medium">{item.desc}</Text>
                  </Flex>
                })
              }
            </Box>
            <Box w="50%">
              <Text fontSize={{xl: "5rem", "2xl": "5rem"}} lineHeight="6rem" fontWeight="semibold" mb="1.8rem" whiteSpace="pre-line">
                {lang.t("dev.title2")}
              </Text>
              <Text fontSize={{xl: "1.5rem", "2xl": "1.75rem"}} fontWeight="medium" mb="5.125rem" opacity="0.8">
                {lang.t("dev.subtitle2")}
              </Text>
              <Box bg="btnBgColor" className="commonBtn" borderRadius="10px" width="16rem" height="93px" px="1rem"  py="1.6rem" cursor="pointer">
                <Text fontSize="1.75rem" color="btnTextColor" fontWeight="bold" textAlign="center">{lang.t("learn.more")}</Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Flex  maxWidth={{base: "90%", "2xl": "1554px"}} mx="auto"  mt="16rem" mb="30rem" justifyContent="space-between">
        <Box w="55%">
            <Text fontSize={{base: "2rem", "2xl": "3rem"}} lineHeight="6rem" fontWeight="semibold" mb="1.8rem" whiteSpace="pre-line">
              {lang.t("dev.mini.title")}
            </Text>
            <Text fontSize={{base: "5rem", "2xl": "5rem"}} lineHeight="6rem" fontWeight="semibold" mb="1.8rem" whiteSpace="pre-line">
              {lang.t("dev.title3")}
            </Text>
            <Text fontSize={{base: "1.5rem", "2xl": "1.75rem"}} w="74%" fontWeight="medium" mb="6.25rem" opacity="0.8">
              {lang.t("dev.subtitle3")}
            </Text>
            <a href="">
              <Box bg="btnBgColor" className="commonBtn" borderRadius="10px" width="50%" height="93px" px="1rem"  py="1.6rem" cursor="pointer">
                <Text fontSize="1.75rem" color="btnTextColor" fontWeight="bold" textAlign="center" >{lang.t("read.documents")}</Text>
              </Box>
            </a>
          </Box>
          <Flex flexWrap="wrap" w="38%"  justifyContent="space-between" direction="column">
            {
                apps.map((item, index) => {
                  return <Flex key={item.name} w="100%"  direction="column" height="20rem" mb="5.25rem" justifyContent="center" alignItems="center"
                    css={{
                        background: 'url(/images/next_card.png)',
                        mixBlendMode: 'normal',
                        borderRadius: '0.625rem',
                        backgroundSize: '100% 100%',
                        '&:hover': {
                          background: `url(${item.selectedIcon})`,
                          backgroundSize: '100% 100%'
                        }
                    }}>
                      <Image
                        boxSize="7.5rem"
                        objectFit="cover"
                        src={item.icon}
                        alt={item.name}
                      />
                      <Text fontSize="2rem" fontWeight="semibold" lineHeight="2.625rem">{item.name}</Text>
                      <Text fontSize="1.125rem" fontWeight="semibold" lineHeight="2.5rem">{item.desc}</Text>
                  </Flex>
                })
              }
          </Flex>
      </Flex>

      <Box  maxWidth={{base: "90%", "2xl": "1554px"}} mx="auto" mt="9.6rem">
        <Flex justifyContent="space-between" mb="9.6rem">
          <Box w="20vw">
            {
               physical.map(item => {
                return <Flex key={item.title} direction="column" justifyContent="center" alignItems="flex-start" mb="4.375rem">
                  <Image
                      boxSize="4rem"
                      objectFit="cover"
                      src="/images/evm-icon.png"
                      alt="img_circular3"
                      mb="1rem"
                    />
                  <Text fontSize="1.75rem" fontWeight="semibold" >{item.title}</Text>
                  <Text fontSize="1.125rem" color="grayColor2" fontWeight="medium" maxWidth="420px">{item.desc}</Text>
                </Flex>
              })
            }
          </Box>
          <Box w="50%">
            <Text fontSize={{xl: "5rem", "2xl": "5rem"}} lineHeight="6rem" fontWeight="semibold" mb="1.8rem" whiteSpace="pre-line">
              {lang.t("dev.title4")}
            </Text>
            <Text fontSize={{xl: "1.5rem", "2xl": "1.75rem"}} fontWeight="medium" mb="6.25rem" opacity="0.8">
              {lang.t("dev.subtitle4")}
            </Text>
            <a href="">
              <Box bg="btnBgColor" className="commonBtn" borderRadius="10px" width="80%" height="93px" px="1rem"  py="1.6rem" cursor="pointer">
                <Text fontSize="1.75rem" color="btnTextColor" fontWeight="bold" textAlign="center" >{lang.t("touch.us")}</Text>
              </Box>
            </a>
          </Box>
        </Flex>
        <Text fontSize={{xl: "5rem", "2xl": "5.25rem"}} fontWeight="semibold" color="white" textAlign="center" mb="1.75rem">
          {lang.t("dev.title5")}
        </Text>
        <Text fontSize={{xl: "1.5rem", "2xl": "1.75rem"}} opacity="0.85" fontWeight="medium" textAlign="center" mb="7.5rem" mx="auto">
          {lang.t("dev.subtitle5")}
        </Text>

        <Flex flexWrap="wrap" justifyContent="space-between"  alignContent="space-between">
            {
              logos.map((item, index) => {
                return <Box key={index} mb="3rem"  width="30%">
                  <LogoCardItem item={item} width="100%" height="11.625rem" />
                </Box>
              })
            }
          </Flex>
          <Text fontSize={{xl: "1.5rem", "2xl": "1.5rem"}} opacity="0.85" fontWeight="medium" textAlign="center" mt="3.5rem" mb="2rem">
            {lang.t("dev.title5.desc")}
          </Text>
          <Box bg="btnBgColor" className="commonBtn" mx="auto" borderRadius="10px" width="38%" height="93px" px="1rem"  py="1.6rem" cursor="pointer">
            <Text fontSize="1.75rem" color="btnTextColor" fontWeight="bold" textAlign="center" >{lang.t("power.by.iotex")}</Text>
          </Box>

          <Text fontSize={{xl: "5rem", "2xl": "5.25rem"}} fontWeight="semibold" color="white" textAlign="center" mt="15rem" mb="1.75rem">
            {lang.t("dev.title6")}
          </Text>
          <Text fontSize={{xl: "1.5rem", "2xl": "1.75rem"}} opacity="0.85" fontWeight="medium" textAlign="center" mb="7.5rem" mx="auto">
            {lang.t("dev.subtitle6")}
          </Text>

          <a href="/">
            <Box bg="btnBgColor" className="commonBtn" mx="auto" borderRadius="10px" width="38%" height="93px" px="1rem"  py="1.6rem" cursor="pointer">
              <Text fontSize="1.75rem" color="btnTextColor" fontWeight="bold" textAlign="center" >{lang.t("power.by.iotex")}</Text>
            </Box>
          </a>

          <Box w="65%" mx="auto" mt="7.5rem">
            <img src="/images/screen6_banner.png" alt="" />
          </Box>

          <Flex justifyContent="space-between" alignItems="flex-end" mt="15rem">
              <Flex flexWrap="wrap" maxWidth="50%" justifyContent="space-between">
                {
                  awards.map(item => {
                    return <Box key={item.iocn_active} w="47%" mt="3rem">
                      <LogoCardItem item={item} width="100%" height="8.75rem" />
                    </Box>
                  })
                }
              </Flex>
              <Box maxWidth={{base: '45%', "2xl": "35%"}}>
                <Text fontSize="4rem" fontWeight="semibold" lineHeight="5.5rem">{lang.t("dev.title7")}</Text>
                <Text fontSize="1.125rem" opacity="0.85" fontWeight="medium" lineHeight="2.25rem" mb="2.5rem">{lang.t("dev.subtitle7")}</Text>
                <Box bg="btnBgColor" className="commonBtn" borderRadius="10px" maxWidth="448px" px="1rem"  py="1.6rem" cursor="pointer">
                  <Text fontSize="1.75rem" color="btnTextColor" fontWeight="extrabold" textAlign="center">{lang.t("Interact with Dapps")}</Text>
                </Box>
              </Box>
          </Flex>
      </Box>
      <Box pb="20rem"  mt="15rem"  css={{
        backgroundImage: 'url(/images/join_bg2.png)',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '34vw 57%'
      }}>
        <Box  maxWidth={{base: '90%', "2xl": "1554px"}} mx="auto" borderRadius="1.125rem" css={{
            backgroundImage: 'url(/images/join_bg.png),url(/images/join_bg3.png)',
            backgroundSize: '100% 100%, 100% 100%',
            backgroundRepeat: 'no-repeat'
          }}>
            <Flex pt="5rem" pb="7.5rem" alignItems="center" justifyContent="center">
              <Text fontSize={{xl: "3rem", "2xl": "4rem"}} lineHeight="6rem" fontWeight="semibold" maxWidth="50%"  mr="10%">
                {lang.t("dev.join")}
              </Text>
              <Box textAlign="center" maxWidth="9.5rem">
                  <Image
                    boxSize="7.5rem"
                    objectFit="cover"
                    src="/images/icon_discord.png"
                    alt=""
                    mx="auto"
                  />
                  <Text fontSize="1.25rem" fontWeight="semibold" lineHeight="3.25rem">{lang.t("discord")}</Text>
                  <Text fontSize="1rem" color="grayColor2" fontWeight="medium" lineHeight="1.375rem">{lang.t("discord.desc")}</Text>
                </Box>
            </Flex>
        </Box>
        <Footer />
      </Box>      
    </BasicLayout>
  );
});
