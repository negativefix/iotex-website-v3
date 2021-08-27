import {observer} from "mobx-react-lite";
import {useStore} from "@/store/index";
import React from "react";
import {Box, Flex, Text, Image, UnorderedList, ListItem} from "@chakra-ui/react";

const Tracks = () => {
	const {lang} = useStore()
	return (
		<>
			<Box
				maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}}
				mx={'auto'}
				mt={{base:10,md:20}}
			>
				<Text
					fontSize={{
						base: "2.2rem",
						sm: "3rem",
						lg: "3rem",
						xl: "3.8rem",
						"2xl": "5.5rem",
					}}
					fontWeight={'semibold'}
				>
					{lang.t('hackathon.track.title')}
				</Text>

				<Flex
					justifyContent={'space-between'}
					mt={20}
					flexDirection={{base:'column-reverse',md:'row'}}
				>
					<Box
						w={{base:'100%',md:'55%','2xl':'65%'}}
					>
						<Text
							fontSize={{
								base: "2rem",
								lg: "2.8rem",
								xl: "3rem",
								"2xl": "5.5rem",
							}}
							whiteSpace={'pre-line'}
							fontWeight={'semibold'}
							mt={{base:5}}
						>
							{lang.t("hackathon.track.subtitle1")}
						</Text>
						<UnorderedList mt={5} fontSize={{base:'1rem',md:'1.5rem','2xl':'2rem'}} fontWeight={'500'} opacity={'85.26%'}>
							<ListItem>{lang.t('hackathon.track.caption1')}</ListItem>
							<ListItem>{lang.t('hackathon.track.caption1_1')}</ListItem>
							<ListItem mt={1}>{lang.t('hackathon.track.caption1_2')}</ListItem>
							<ListItem mt={1}>{lang.t('hackathon.track.caption1_3')}</ListItem>
							<ListItem mt={1}>{lang.t('hackathon.track.caption1_4')}</ListItem>
						</UnorderedList>
					</Box>
					<Image src={'images/hackathon/img_tracks1.png'} w={{base:'50%',md:'40%'}} h={{base:'50%',md:'40%'}} mx={{base:'auto',md:"unset"}}/>
				</Flex>

				<Flex
					justifyContent={'space-between'}
					mt={20}
					flexDirection={{base:'column',md:'row'}}
					alignItems={'center'}
				>
					<Image src={'images/hackathon/img_tracks2.png'} w={{base:'50%',md:'30%'}} h={{base:'50%',md:'30%'}} mx={{base:'auto',md:'unset'}}/>
					<Box
						w={{base:'100%',md:'55%'}}
					>
						<Text
							fontSize={{
								base: "2rem",
								lg: "2.8rem",
								xl: "3rem",
								"2xl": "5.5rem",
							}}
							fontWeight={'semibold'}
							mt={{base:5}}
						>
							{lang.t("hackathon.track.subtitle2")}
						</Text>
						<UnorderedList mt={5} fontSize={{base:'1rem',md:'1.5rem','2xl':'2rem'}} fontWeight={'500'} opacity={'85.26%'}>
							<ListItem>{lang.t('hackathon.track.caption2_1')}</ListItem>
							<ListItem mt={1}>{lang.t('hackathon.track.caption2_2')}</ListItem>
							<ListItem mt={1}>{lang.t('hackathon.track.caption2_3')}</ListItem>
						</UnorderedList>
					</Box>
				</Flex>

				<Flex
					justifyContent={'space-between'}
					mt={20}
					flexDirection={{base:'column-reverse',md:'row'}}
				>
					<Box
						w={{base:'100%',md:'55%'}}

					>
						<Text
							fontSize={{
								base: "2rem",
								lg: "2.8rem",
								xl: "3rem",
								"2xl": "5.5rem",
							}}
							fontWeight={'semibold'}
							mt={{base:5}}
							whiteSpace={{base:'normal',md:'pre-line'}}
						>
							{lang.t("hackathon.track.subtitle3")}
						</Text>
						<UnorderedList mt={5} fontSize={{base:'1rem',md:'1.5rem','2xl':'2rem'}} fontWeight={'500'} opacity={'85.26%'}>
							<ListItem>{lang.t('hackathon.track.caption3_1')}</ListItem>
							<ListItem mt={1}>{lang.t('hackathon.track.caption3_2')}</ListItem>
							<ListItem mt={1}>{lang.t('hackathon.track.caption3_3')}</ListItem>
							<ListItem mt={1}>{lang.t('hackathon.track.caption3_4')}</ListItem>
							<ListItem mt={1}>{lang.t('hackathon.track.caption3_5')}</ListItem>
						</UnorderedList>
					</Box>
					<Image mt={10} src={'images/hackathon/img_tracks3.png'} w={{base:'50%',md:'40%'}} h={{base:'50%',md:'40%'}} mx={{base:'auto',md:'unset'}}/>
				</Flex>
			</Box>
		</>
	)
}

export default observer(Tracks)
