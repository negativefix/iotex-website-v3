import {Text, TextProps} from "@chakra-ui/react";
import React from "react";

export interface CaptionProps extends TextProps{
	text:string
}

const Caption=({text,...props}:CaptionProps)=>{
	return(
		<Text
			color={'#CCCCCC'}
			fontWeight={'500'}
			fontSize={'20px'}
			{...props}
		>
			{text}
		</Text>
	)
}

export default Caption
