import {observer} from "mobx-react-lite";
import {Box, Text, Image, Flex, Link} from "@chakra-ui/react";
import React from "react";
import {useStore} from "@/store/index";
import {Button} from "@/components/Button";
import {helper} from "@/utils/helper";

const Banner = () => {
	const {lang} = useStore()

	return (
		<>
			<Box
				background={{base: 'url(images/hackathon/banner_bg.png) no-repeat'}}
				bgSize={'contain'}
				bgPos={'top'}
				pt={96}
				position={'relative'}
				pb={{base: 40, '2xl': 52}}
			>
				<Flex
					maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}}
					mx={'auto'}
					flexDirection={'column'}
					alignItems={'center'}
					mt={-40}
				>
					<Text
						fontSize={{
							base: "2.25rem",
							sm: "3rem",
							lg: "3rem",
							xl: "5.5rem",
							"2xl": "7.5rem",
						}}
						textAlign={'center'}
						fontWeight={'semibold'}
					>
						{lang.t('hackathon.banner.title')}
					</Text>
					<Text
						mt={2}
						textAlign={'center'}
						fontWeight={'600'}
						whiteSpace={{xl: 'pre-line'}}
						fontSize={{
							base: "1rem",
							md: "1.25rem",
							xl: "1.25rem",
							"2xl": "2rem",
						}}
					>{lang.t('hackathon.banner.caption')}</Text>


					<Text fontSize={'1.2rem'} mt={{base: 5, md: 10}}
					      fontWeight={'600'}
					>{lang.t('powered.by')}</Text>
					<Image src={'images/hackathon/lumos.png'} w={{base: '40%', md: '18%'}}/>

					<Flex justifyContent={'center'} mt={5} w={'100%'}>
						<Button name={lang.t('register.now')} href='https://xathon.mettle.com/event/IotexHackathonIndia'
						        size={{base: "100%", lg: "16rem", xl: '30rem'}} boxHeight={{base: '4rem', md: '4.7rem'}}/>
					</Flex>
					<Link href={'https://discord.gg/CVburMW5bd'} isExternal _focus={{}}>
						<Image mt={2} src={'images/hackathon/join_community.png'} w={{base: '80%', md: '40%'}} mx={'auto'}/>
					</Link>
					<Text mt={-5} fontSize={{base: '0.9rem', '2xl': '1rem'}}
					      dangerouslySetInnerHTML={{__html: lang.t('hackathon.paw.access')}}/>
				</Flex>
			</Box>
		</>
	)
}

export default observer(Banner)
