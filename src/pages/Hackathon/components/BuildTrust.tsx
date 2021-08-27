import {observer} from "mobx-react-lite";
import React from "react";
import {Box, Flex, Image, Text} from "@chakra-ui/react";
import {useStore} from "@/store/index";

const BuildTrust =()=>{
	const {lang} = useStore()

	return(
		<>
			<Box
				maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}}
				mt={{base:-5,md:-5,'2xl':-8}}
				mx={'auto'}
				bgImg={{base:'',xl:'url(images/hackathon/img_hackathon.png)'}}
				bgPos={'right bottom'}
				bgRepeat={'no-repeat'}
				bgSize={'48%'}
			>
				<Image src={'images/hackathon/img_hackathon.png'} display={{base:'block',xl:'none'}} w={'50%'} mx={'auto'}/>
				<Box w={{base:'100%',xl:'80%'}}>
					<Text
						fontSize={{
							base: "2.2rem",
							sm: "3rem",
							lg: "3rem",
							xl: "3.8rem",
							"2xl": "5.5rem",
						}}
						fontWeight={'semibold'}
						whiteSpace={{base:'normal',xl:'pre-line'}}

					>
						{lang.t('hackathon.build.trust.title')}
					</Text>
					<Box w={{base:'100%',xl:'60%'}}
					     fontSize={{base:'1rem',xl:'1.25rem','2xl':'2rem'}}
					     fontWeight={'500'}
					     opacity={0.85}
					>
						<Text mt={5}>
							{lang.t("hackathon.build.trust.caption1")}
						</Text>
						<Text mt={5} >
							{lang.t("hackathon.build.trust.caption2")}
						</Text>
						<Text mt={5} color={'#44FFB2'}>
							{lang.t("hackathon.build.trust.caption3")}
						</Text>
						<Text mt={5} dangerouslySetInnerHTML={{__html:lang.t("hackathon.build.trust.caption4")}}/>
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default observer(BuildTrust)
