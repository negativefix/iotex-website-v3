import React from "react";
import {Text} from "@chakra-ui/react";
import {TextProps} from "@chakra-ui/layout/dist/types/text";

interface CaptionProps extends TextProps{
	text:string
}

export const Caption = ({text,...props}: CaptionProps) => {
	return (
		<Text
			{...props}
			fontSize={{base: '1rem', sm: '1rem', lg: '1.25rem', xl: '1.5rem', '2xl': '1.75rem'}}
			fontWeight={'500px'}
		>
			{text}
		</Text>
	)
}
