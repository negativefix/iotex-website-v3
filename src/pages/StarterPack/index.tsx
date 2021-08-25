import React from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "@/store/index";
import BasicLayout from "../../Layouts/BasicLayout";
import {Banner} from "@/pages/StarterPack/components/Banner";
import {Box, Divider, Flex, Image, Link, Text} from "@chakra-ui/react";
import IntroSection from "@/pages/StarterPack/components/IntroSection";
import {Footer} from "@/components/Footer";
import {Subscribe} from "@/pages/CmcStarterPack/components/Subscribe";
import {DownloadSection} from "@/pages/StarterPack/components/DownloadSection";
import ExchangeSection from "@/pages/StarterPack/components/ExchangeSection";
import MediaChannel from "@/pages/StarterPack/components/MediaChannel";
import Technology from "@/pages/StarterPack/components/Technology";
import LiveProject from "@/pages/StarterPack/components/LiveProject";
import MeetTeam from "@/pages/StarterPack/components/MeetTeam";
import {Button} from "@/components/Button";

const StarterPack = () => {
	const {lang} = useStore()

	return (
		<BasicLayout name={'starter-pack'}>
			<Banner/>

			<Box
				maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}}
				mx={'auto'}
				mt={{base: 20, md: 20, xl: 40}}
			>
				{/*5min intro*/}
				<IntroSection/>
				{/*<TechDeviceSection/>*/}

				{/*HOW TO GET YOUR FIRST NFT WITH IOTEX?*/}
				<Text
					id='how-to-get-your-first-nft-with-iotex'
					fontSize={{base: '1.15rem', xl: '2rem', '2xl': '3.5rem'}}
					fontWeight={600}
					mt={40}
				>
					{lang.t('starter.pack.title2')}
				</Text>

				<Divider mt={3} mb={10}/>
				<Text
					mt={10}
					fontSize={{'2xl': '1.25rem'}}
				>
					{lang.t('starter.pack.caption2')}
				</Text>
				<MediaChannel/>
				<Subscribe/>
				<DownloadSection/>

				<Text
					mt={40}
					fontWeight={600}
					fontSize={{base: '1.15rem', xl: '1.8rem', '2xl': '3.5rem'}}
				>
					{lang.t('starter.pack.title3')}
				</Text>
				<Divider mt={3} mb={10}/>
				<Text
					fontSize={{'2xl': '1.25rem'}}

				>
					{lang.t('starter.pack.caption3')}
				</Text>
				<Technology/>

				{/*IOTEX LIVE PROJECTS*/}
				<Text
					mt={40}
					fontWeight={600}
					fontSize={{base: '1.15rem', xl: '1.8rem', '2xl': '3.5rem'}}
				>
					{lang.t('starter.pack.title4')}
				</Text>
				<Divider mt={3} mb={10}/>
				<Text mt={10} fontSize={{'2xl': '1.25rem'}}>{lang.t('starter.pack.caption4')}</Text>
				<LiveProject/>
				<MeetTeam/>

				{/*ENGAGE WITH IOTEX*/}
				<Text
					mt={40}
					fontWeight={600}
					fontSize={{base: '1.15rem', xl: '1.8rem', '2xl': '3.5rem'}}
				>
					{lang.t('starter.pack.title5')}
				</Text>
				<Divider mt={3} mb={10}/>
				<Text mt={10} fontWeight={'500'} fontSize={'1.25rem'}
				      textAlign={'center'}
				>{lang.t('starter.pack.caption5')}</Text>
				<Flex mt={5} mx='auto' justifyContent={'center'}>
					<Button name={'Get Your First NFT on IoTeX [For Free]'} href='#how-to-get-your-first-nft-with-iotex'
					        size={{base: "90%", md: "80%", lg: "50%", "2xl": "50%"}} isBlank={false}
					/>
				</Flex>
				<ExchangeSection/>
			</Box>

			<Footer/>
		</BasicLayout>
	)
}
export default observer(StarterPack)
