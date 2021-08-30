import {observer} from "mobx-react-lite";
import React from "react";
import {Box, Flex, Image, Link, Text} from "@chakra-ui/react";
import {useStore} from "@/store/index";
import {Button} from "@/components/Button";

const HelpUsGrow=()=>{
	const {lang} = useStore()
	return(
		<>
			<Box
				bgRepeat={'no-repeat'}
				mt={{base:10,md:40}}
				pb={{base:20,md:48}}
				pt={{base:20,md:0}}
				position="relative"
				_after={{
					top: '0',
					left: {
						base:'15rem',
						md:'-6rem'
					},
					right: 0,
					bottom: 0,
					position: "absolute",
					content: `""`,
					backgroundImage: `url(images/hackathon/round.png)`,
					opacity: '0.5',
					bgRepeat:"no-repeat",
					zIndex: -1,
					bgSize:{
						base:'200%',
						md:'43%'
					},
				}}
			>
				<Flex
					maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}}
					alignItems={'center'}
					flexDirection={'column'}
					mx={'auto'}

				>
					<Text
						textAlign={{base:'unset',md:'center'}}
						whiteSpace={'pre-line'}
						fontSize={{
							base: "2.2rem",
							sm: "3rem",
							lg: "3rem",
							xl: "3.5rem",
							"2xl": "5.5rem",
						}}
						fontWeight={'semibold'}
					>
						{lang.t('hackathon.grow.title')}
					</Text>

					<Text
						textAlign={{base:'unset',md:'center'}}
						whiteSpace={'pre-line'}
						fontWeight={'semibold'}
						opacity={0.85}
						fontSize={{base:'1rem',xl:'1.25rem','2xl':'2rem'}}
					>
						{lang.t('hackathon.grow.caption')}
					</Text>

					<Flex justifyContent={'center'} mt={20} w={'100%'}>
						<Button name={lang.t('register.now')} href={'https://xathon.mettl.com/event/IotexHackathonIndia'} size={{base: "100%", lg: "16rem",xl:'30rem'}} boxHeight={{base:'4rem',md:'5rem'}}/>
					</Flex>
				</Flex>

			</Box>
		</>
	)
}

export default observer(HelpUsGrow)
