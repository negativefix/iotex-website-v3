import React, {useEffect} from "react";
import {Cookies} from "react-cookie-consent";
import * as ReactGA from "react-ga";
import {hotjar} from 'react-hotjar';
import {Box, Button, CloseButton, Flex, Text} from "@chakra-ui/react";
import {observer, useLocalObservable} from "mobx-react-lite";

const Cookie = () => {
	const getCookieConsentValue=()=>{
		return Cookies.get('CookieConsent')
	}

	const store= useLocalObservable(()=>({
		isShowCookie:false,
		setShowCookie(value:boolean){
			this.isShowCookie = value
		}
	}))

	const handleDeclineCookie = () => {
		Cookies.remove("_ga");
		Cookies.remove("_gat");
		Cookies.remove("_gid");
		Cookies.remove("_hjid");
		store.setShowCookie(false)

	}
	const handleAcceptCookie = () => {
		ReactGA.initialize('UA-111756489-1');
		hotjar.initialize(2494554, 6);
		Cookies.set('CookieConsent',true)
		store.setShowCookie(false)
	};

	useEffect(() => {
		const isConsent = getCookieConsentValue();
		if (isConsent === "true") {
			store.setShowCookie(false)
			handleAcceptCookie();
		}else {
			store.setShowCookie(true)
		}
	}, []);
	return (
		<Box
			style={{
				background: "linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)",
				borderRadius:'20px',
				width:"80%",
				backdropFilter: 'blur(100px)',
				left:'10%',
				bottom:'1rem'
			}}
			py={5}
			px={5}
			position={'fixed'}
			zIndex={'10002'}
			display={store.isShowCookie?'block':'none'}
		>

			<Flex flexDirection={'row'} alignItems={'center'}>
				<Text w={'80%'} fontSize={'1.25rem'}>This website uses cookies to enhance the user experience.</Text>
					<Button _hover={{}} onClick={handleAcceptCookie}  borderRadius={'10px'} w={'11.25rem'} h={{base:'3rem',md:'3.5rem'}} bg={'linear-gradient(92.18deg, #44FFB2 19.21%, #00D3DC 105.06%)'}>{'Allow'}</Button>
				<CloseButton position={'absolute'} right={'8px'} top={'8px'} onClick={handleDeclineCookie}/>
			</Flex>

		</Box>
	)
}

export default observer(Cookie);
