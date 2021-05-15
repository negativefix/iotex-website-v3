import React from 'react';
import { observer, useLocalStore } from 'mobx-react-lite';
import { useStore } from '../store/index';
import { Flex, Box, Text, Image, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,} from '@chakra-ui/react';
import BasicLayout from '../Layouts/BasicLayout'
import {Banner} from '@/components/Banner/index'
import {DropCard} from '@/components/DropCardItem/index'
import {AwardWinning} from '@/components/AwardWinning/index'
import {NextGen} from '@/components/NextGen/index'
import {BuildOnIotex} from '@/components/BuildOnIotex/index'
import {IotexToken} from '@/components/IotexToken/index'
import {JoinRevolution} from '@/components/JoinRevolution/index'

export const Home = observer(() => {
  const { lang } = useStore();
  const analysis = [
    {name: lang.t("devices"), amount: 5000, coin: '+' },
    {name: lang.t("dapps"), amount: 150, coin: '+' },
    {name: lang.t("users"), amount: 200, coin: 'K+' },
    {name: lang.t("delegates"), amount: 300, coin: '+' },
  ]

  const advantages = [
    {title: lang.t("advantage1"), icon: "/images/evm-icon.png", desc: lang.t("advantage1.tips")},
    {title: lang.t("advantage2"), icon: "/images/cross.png", desc: lang.t("advantage2.tips")},
    {title: lang.t("advantage3"), icon: "/images/roll.png", desc: lang.t("advantage3.tips")},
    {title: lang.t("advantage4"), icon: "/images/scalable.png", desc: lang.t("advantage4.tips")},
  ]

  const store = useLocalStore(() => ({
    isOpen: false,
    open() {
      store.isOpen = true
    },
    onClose() {
      store.isOpen = false
    }
  }));
  
  return (
    <BasicLayout>
      <Banner />
      <Flex color="white" justifyContent="center" alignItems="center">
        {
          analysis.map(item => {
            return <Box key={item.name} w="24rem" textAlign="center">
              <Text fontWeight="medium" fontSize="4rem">
                {item.amount}{item.coin}
              </Text>
              <Text fontSize="1.25rem" fontWeight="medium">{item.name}</Text>
            </Box>
          })
        }
      </Flex>
      <Box mt="4rem" maxWidth={{base: "90%", "2xl": "1554px"}} mx="auto" position="relative">
        <Image
          boxSize="5.25rem"
          objectFit="cover"
          src="/images/img_circular3.png"
          alt="img_circular3"
          mx="10%"
        />
      </Box>
      <Box mt="3.3rem" mx="auto">
        <Text fontSize={{base: '3rem', xl: "5rem", "2xl": "5.25rem"}} fontWeight="semibold" color="white" textAlign="center" mb="1.75rem">
          {lang.t("title2")}
        </Text>
        <Text fontSize={{base: '1.125rem', xl: "1.5rem", "2xl": "1.75rem"}} fontWeight="medium" color="white" textAlign="center" mb="4.1875rem" maxWidth="1154px" mx="auto">
          {lang.t("subtitle2")}
        </Text>
      </Box>
      <Box pb="4.5rem" maxWidth={{base: '90%', "2xl": "1554px"}} mx="auto" css={{
        backgroundImage: 'url(/images/award_wing_bg.png)',
        backgroundSize: '80%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '30% 100%'
      }}>
        <Box mx="auto" position="relative">
          <Box onClick={store.open}>
            <img src="/images/video.png" alt="" />
            <Flex w="100%" h="100%" justifyContent="center" alignItems="center" position="absolute" top="0" left="0">
              <Image
                boxSize="12.5rem"
                objectFit="cover"
                src="/images/play-icon.png"
                alt="img_circular3"
                mx="10%"
              />
            </Flex>
          </Box>
            <Modal isOpen={store.isOpen} onClose={store.onClose} size="6xl">
              <ModalOverlay />
              <ModalContent w="90%" h="80vh"> 
                <ModalBody  p="0.5rem">
                  <iframe 
                    width="100%" height="100%" 
                    src="https://www.youtube.com/embed/gIVskvgzG9M" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </ModalBody>
              </ModalContent>
            </Modal>
        </Box>
        <Flex maxWidth={{base: '90%', "2xl": "1554px"}} mx="auto" h="337px" mb="8.56rem">
          {
            advantages.map(item => {
              return <DropCard title={item.title} icon={item.icon} desc={item.desc}  />
            })
          }
        </Flex>
        <AwardWinning />
      </Box>
      <NextGen />
      <BuildOnIotex />
      <IotexToken />
      <JoinRevolution />
    </BasicLayout>
  );
});
