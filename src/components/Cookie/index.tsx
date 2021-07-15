import React, {useEffect} from "react";
import CookieConsent, {Cookies, getCookieConsentValue} from "react-cookie-consent";
import * as ReactGA from "react-ga";
import {hotjar} from 'react-hotjar';
import {CloseIcon} from "@chakra-ui/icons";
import {CloseButton, Flex, Text, useBreakpointValue} from "@chakra-ui/react";

const Cookie = () => {
	const handleDeclineCookie = () => {
		Cookies.remove("_ga");
		Cookies.remove("_gat");
		Cookies.remove("_gid");
		Cookies.remove("_hjid");
	}
	const handleAcceptCookie = () => {
		ReactGA.initialize('UA-111756489-1');
		hotjar.initialize(2494554, 6);
	};
	useEffect(() => {
		const isConsent = getCookieConsentValue();
		if (isConsent === "true") {
			handleDeclineCookie();
		}
	}, []);

	const buttonHeight= useBreakpointValue({base:'3rem',md:'3.5rem'})

	return (
		<CookieConsent
			enableDeclineButton
			onAccept={handleAcceptCookie}
			onDecline={handleDeclineCookie}
			style={{
				background: "linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)",
				borderRadius:'20px',
				width:"80%",
				backdropFilter: 'blur(100px)',
				left:'10%',
				bottom:'1rem'
			}}
			flipButtons
			buttonStyle={{
				background:'linear-gradient(92.18deg, #44FFB2 19.21%, #00D3DC 105.06%)',
				borderRadius:'10px',
				width:'11.25rem',
				height:buttonHeight,
				marginRight:'8rem'
			}}
			buttonText={'Allow'}
			declineButtonText={<CloseButton />}
			declineButtonStyle={{background:'none', position:'absolute',padding:'0px',margin:'0px',right:'8px',top:'8px'}}
		>
			<Flex flexDirection={'row'} alignItems={'center'}>
				<Text fontSize={'1.25rem'}>This website uses cookies to enhance the user experience.</Text>
			</Flex>

		</CookieConsent>
	)
}

export default Cookie;
