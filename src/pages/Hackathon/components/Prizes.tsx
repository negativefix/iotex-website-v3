import React from "react";
import {useStore} from "@/store/index";
import {observer} from "mobx-react-lite";
import {Box, Flex, Text, Image, Link, SimpleGrid} from "@chakra-ui/react";
import {Button} from "@/components/Button";

const Prizes = () => {
	const {lang} = useStore()
	return (
		<>
			<Box
				maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}}
				mx={'auto'}
				mt={40}
			>
				<Text
					whiteSpace={'pre-line'}
					fontSize={{
						base: "2.2rem",
						sm: "3rem",
						lg: "3rem",
						xl: "3.8rem",
						"2xl": "7.5rem",
					}}
					fontWeight={'semibold'}
				>
					{lang.t('hackathon.prizes.title')}
				</Text>
				<Flex
					mt={20}
					flexDirection={{base:'column-reverse',md:'row'}}
					justifyContent={'space-between'}
					alignItems={'center'}
				>
					<Box w={{base:'100%',md:'45%'}} mt={{base:20,md:0}}>
						<Image src={'images/hackathon/prize_1.png'}/>
					</Box>
					<Box w={{base:'100%',md:'44%','2xl':'30%'}}>
						<Text
							fontWeight={'600'}
							fontSize={{xl:'2.2rem'}}
							dangerouslySetInnerHTML={{__html:lang.t('hackathon.prizes.caption')}}
						/>

					</Box>
				</Flex>
				<Box mx={'auto'} mt={20}>
					<SimpleGrid columns={[1,3]} mt={14} spacingX={5} spacingY={10}>
						<Box>
							<Text textAlign={'center'} fontSize={'1.5rem'} fontWeight={'600'}>{'Data as a Trigger'}</Text>
							<Image src={'images/hackathon/prize_trigger.png'} mt={5}/>
						</Box>
						<Box>
							<Text textAlign={'center'} fontSize={'1.5rem'} fontWeight={'600'}>{'Data as a Service'}</Text>
							<Image src={'images/hackathon/prize_service.png'} mt={5}/>
						</Box>
						<Box>
							<Text textAlign={'center'} fontSize={'1.5rem'} fontWeight={'600'}>{'IoT Data Pools'}</Text>
							<Image src={'images/hackathon/prize_data.png'} mt={5}/>
						</Box>
					</SimpleGrid>
					<Flex alignItems={'center'} justifyContent={'center'} mt={24} w={'100%'}>
						<Button name={lang.t('register.now')} href='https://xathon.mettl.com/event/IotexHackathonIndia' size={{base: "100%", lg: "16rem",xl:'30rem'}} boxHeight={'4.5rem'}/>
					</Flex>
				</Box>
			</Box>
		</>
	)
}

export default observer(Prizes)
