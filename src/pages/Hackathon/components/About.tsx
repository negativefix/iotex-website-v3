import {observer} from "mobx-react-lite";
import {useStore} from "@/store/index";
import {Box, Flex, Text, Image} from "@chakra-ui/react";
import React from "react";

const About = () => {
	const {lang} = useStore()
	return (
		<>
			<Box
				position="relative"
				_after={{
					top: '0',
					left: {
						base:"30%",
						md:'65%'
					},
					right: 0,
					bottom: 0,
					position: "absolute",
					content: `""`,
					backgroundImage: `url(images/hackathon/round.png)`,
					opacity: '0.5',
					bgRepeat: "no-repeat",
					zIndex: -1,
					bgSize: {
						base:'140%',
						md:'140%'
					},
				}}
			>
				<Flex
					maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}}
					mt={{base:0,md:20}}
					mx={'auto'}
					justifyContent={'space-between'}
					py={{base:0,md:40}}
					flexDirection={{base:'column-reverse',md:'row'}}

				>
					<Box
						w={{base: '100%', md: '55%'}}
						mt={{base:10,md:0}}
					>
						<Text
							fontSize={{
								base: "2.2rem",
								sm: "3rem",
								lg: "3rem",
								xl: "3.8rem",
								"2xl": "7.5rem",
							}}
							fontWeight={'600'}
						>{lang.t('hackathon.about.title')}</Text>
						<Text fontWeight={'500'} fontSize={{base:'1rem',md:'1.35rem'}} opacity={'0.85'}
						      mt={5}>{lang.t('hackathon.about.caption')}</Text>
					</Box>
					<Image src={'images/hackathon/iotex_logo.png'} mt={{base:40,md:28}} w={{base: '60%', md: '35%'}} h={{base: '100%', md: '35%'}}
					       mx={{base:'auto',md:'none'}}
					/>
				</Flex>
			</Box>
		</>
	)
}

export default observer(About)
