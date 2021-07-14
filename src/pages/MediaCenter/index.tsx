import React from "react";
import BasicLayout from "../../Layouts/BasicLayout";
import {observer, useLocalStore} from "mobx-react-lite";
import {ARTICLES, NEWS} from "./constants";
import {Title} from "../Pebble/Title";
import {Footer} from "@/components/Footer";
import {SectionContainer} from "../Pebble/SectionContainer";
import {Box, Flex, Image} from "@chakra-ui/react";
import NewsTab from "./News";
import TabButton from "./TabButton";
import {useStore} from "@/store/index";
import ContentTab from "./Content";
//@ts-ignore
import bg1 from '@/assets/images/media-center/bg_1.png'
enum Tab {
	NEWS = 'NEWS',
	CONTENT = 'CONTENT'
}

const MediaCenter = () => {

	// const store = useLocalStore(() => ({
	// 	tabIndex: Tab.NEWS
	// }))
	return (
		<BasicLayout name="media-center">
			<Box
				bgImg={`url(${bg1})`}
				bgPosition={'top'}
				bgSize={'100%'}
				bgRepeat={'no-repeat'}
				pt={3}
			>
				<SectionContainer marginTop={{base:'10rem',md:'11rem',lg:'13rem'}}>
					<Title text={'IoTeX In The Media'} textAlign={'center'}/>
					<Flex marginTop={{base: '3rem', md: '4.8rem'}} justifyContent={'space-evenly'}>
						{/*<TabButton text={'IoTeX In the News'} isActive={true}*/}
						{/*           onClick={() => {}}/>*/}
						{/*<TabButton text={'IoTeX Content'} isActive={Tab.CONTENT === store.tabIndex}*/}
						{/*           onClick={() => store.tabIndex = Tab.CONTENT}/>*/}
					</Flex>
				</SectionContainer>
				<NewsTab/>

			</Box>

			{/*{*/}
			{/*	store.tabIndex === Tab.NEWS ? <NewsTab/> : <ContentTab/>*/}
			{/*}*/}
			<Footer/>
		</BasicLayout>
	)
}

export default observer(MediaCenter)
