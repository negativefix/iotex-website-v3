import React from "react";
import {Box, Text} from "@chakra-ui/react";

const IconCard = ({item}) => {
	return (
		<>
			<Box
				width={{base: "100%", lg: "100%"}}
				maxWidth={{base:'100%',lg:'90%'}}
				marginTop={{
					base:'3rem',
					md:'9rem',
				}}
				marginBottom='3.75rem'
				_first={{
					marginTop: '0'
				}}
			>
				<img src={item.icon}/>
			</Box>
			<Text fontSize={{base:'1rem',md:'2rem'}} fontWeight="semibold">{item.title}</Text>
			<Text fontSize={{base:'0.75rem',md:'1.25rem'}} marginTop={'24px'}>{item.desc}</Text>
			<a href={item.link} style={{color:'rgba(68, 255, 178, 1)', marginTop:'24px', fontSize:'18px'}}>Learn More {">>"}</a>

		</>
	)
}
export default IconCard
