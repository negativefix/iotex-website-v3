import React from 'react';
import { Box, Flex, Input, Image, Text } from '@chakra-ui/react';
import { useStore } from '../../store';
import { observer } from 'mobx-react-lite';
import {Footer} from '@/components/Footer/index'

export const JoinRevolution = observer(() => {
  const { lang } = useStore();

  const infos = [
    {title: lang.t("telegram"), icon: "/images/icon_telegram.png", desc: lang.t("telegram.desc"), href: "https://t.me/iotexchannel"},
    {title: lang.t("twitter"), icon: "/images/icon_twitter.png", desc: lang.t("twitter.desc"), href: "https://twitter.com/iotex_io"},
    {title: lang.t("github"), icon: "/images/icon_gitHub.png", desc: lang.t("github.desc"), href: "https://github.com/iotexproject"},
    {title: lang.t("youtube"), icon: "/images/icon_youtube.png", desc: lang.t("youtube.desc"), href: "https://www.youtube.com/c/IoTeXOfficialChannel/"},
  ]

    return (
      <Box pb={{base: "4rem", lg: "10rem"}}  css={{
        backgroundImage: 'url(/images/join_bg2.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '40vw 27rem'
      }}>
        <Box  maxWidth={{base: "90%", md: '80%', "2xl": "1554px"}} mx="auto" borderRadius="1.125rem" css={{
            backgroundImage: 'url(/images/join_bg.png),url(/images/join_bg3.png)',
            backgroundSize: '100% 100%, 100% 100%',
            backgroundRepeat: 'no-repeat'
          }}>
            <Flex direction="column" pt={{base: "3rem", lg: "5rem"}} pb={{base: "3rem", lg: "7.5rem"}} alignItems="center">
              <Text fontSize={{base: "1.5rem", md: "1.875rem", lg: "2.5rem", xl: "4rem", "2xl": "5rem"}} fontWeight="semibold" maxWidth="100%" mb="1rem">
                {lang.t("title6")}
              </Text>
              <Text fontSize={{base: "0.75rem", md: "1rem", lg: "1.25rem", xl: "1.5rem", "2xl": "1.8rem"}} fontWeight="medium" mb="4.685rem" textAlign="center" maxWidth={{base: "90%", lg: "55%"}} >
                {lang.t("subtitle6")}
              </Text>
              <Flex w={{base: "95%", lg: "70%"}} mb={{base: "4rem", lg: "8.56rem"}} justifyContent="space-between" flexWrap="wrap">
                {
                  infos.map(item => {
                    return <Box key={item.title} textAlign="center" maxWidth="9.5rem" cursor="pointer" mb={{base: "2rem", lg: 0}}>
                      <a href={item.href} target="_blank">
                        <Image
                          boxSize={{base: "1.5rem", lg: "4.5rem"}}
                          objectFit="cover"
                          src={item.icon}
                          alt={item.title}
                          mx="auto"
                          mb={{base: "1rem", lg: "2rem"}}
                          css={{
                            filter: 'drop-shadow(0px 256px 200px rgba(0, 24, 0, 0.15)), drop-shadow(0px 110px 80px rgba(0, 1, 0, 0.07)), drop-shadow(0px 60px 55px rgba(0, 1, 0, 0.09)), drop-shadow(0px 35px 30px rgba(0, 21, 0, 0.0329042)), drop-shadow(0px 20px 16px rgba(0, 1, 0, 0.1))'
                          }}
                        />
                        <Text fontSize={{base: "1rem", lg: "1.25rem"}} fontWeight="semibold" lineHeight="3.25rem">{item.title}</Text>
                        <Text fontSize={{base: "0.75rem", lg: "1rem"}} color="grayColor2" fontWeight="medium" lineHeight="1.375rem">{item.desc}</Text>
                      </a>
                    </Box>
                  })
                }
              </Flex>
              <Text fontSize={{base: "1.5rem", lg: "2.25rem"}} fontWeight="semibold" lineHeight="2rem" mb="1rem">{lang.t("stay.updated")}</Text>
              <Text fontSize={{base: "0.875rem", lg: "1.125rem"}} fontWeight="medium" lineHeight="1.375rem" mb="2.5rem">{lang.t("stay.updated.desc")}</Text>
              <Box position="relative" w={{base: "90%", md: "40vw"}}>
                <Input h={{base: "3rem", lg: "4.5rem"}} css={{
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }} />
                <Box bg='brandColor2' position="absolute" right="0" top="0" height={{base: "3rem", lg: "4.5rem"}} px="1.25rem" borderRadius="10px" cursor="pointer">
                  <Text fontSize={{base: "1rem", lg: "1.375rem"}} fontWeight="semibold" color="btnTextColor" lineHeight={{base: "3rem", lg: "4.5rem"}}> {lang.t("submit")}</Text>
                </Box>
              </Box>
            </Flex>
          </Box>
        <Footer />
      </Box>
    );
});
