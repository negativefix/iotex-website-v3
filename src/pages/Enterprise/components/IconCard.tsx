import React from "react";
import {LogoCardItem} from "@/components/LogoCardItem";
import {Box, Text} from "@chakra-ui/react";

const IconCard = ({item}) => {
	return (
		<>
			<Box
				mb="3rem"
				width={{base: "100%", lg: "100%"}}
				maxWidth={{base:'100%',lg:'90%'}}
				height={{
					base: "6rem",
					sm: "8rem",
					md: "9rem",
					"2xl": "11.625rem",
				}}
				marginTop={{
					base:'1rem',
					sm: '80px',
				}}
				_first={{
					marginTop: '0'
				}}
			>
				<LogoCardItem
					item={item}
					width="100%"
					height="100%"/>
			</Box>
			<Text fontSize={{base:'1rem',md:'2rem'}} fontWeight="semibold">{item.title}</Text>
			<Text fontSize={{base:'0.75rem',md:'1.25rem'}} marginTop={'24px'}>{item.desc}</Text>
		</>
	)
}
export default IconCard
