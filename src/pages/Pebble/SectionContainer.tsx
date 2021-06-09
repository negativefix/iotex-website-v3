import React from "react";
import {Box} from "@chakra-ui/react";

export const SectionContainer=({children})=>{
	return(
		<Box
			maxWidth={{base: '90%', md: '80%', lg: '90%', '2xl': '1554px'}}
			mx={'auto'}
		>
			{children}
		</Box>
	)
}
