import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";

export const Card = ({url, text}) => {
	return (
		<Flex width={{md:'200px',xl:'292px',base:'292px'}}
		      height={{md:'166px',xl:'240px',base:'240px'}}
		      borderRadius={'20px'}
		      background={'linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)'}
		      boxShadow='inset -1px -1px 0px rgba(255, 255, 255, 0.25)'
		      justifyContent='center'
		      alignItems='center'
		      direction={'column'}
		      marginTop={{base:'16px',md:0}}
		>
			<img src={url} alt={text} width={'96px'} height={'96px'}/>
			<Text textAlign='center' fontSize='1.12rem' fontWeight={'semibold'}>{text}</Text>
		</Flex>
	)
}
