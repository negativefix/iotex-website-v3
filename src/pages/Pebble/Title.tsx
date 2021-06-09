import React from "react";
import {Text} from "@chakra-ui/react";
import * as CSS from "csstype";
import {TextProps} from "@chakra-ui/layout/dist/types/text";


interface TitlePropsInterface extends TextProps{
	text: string
	textAlign?: CSS.Property.TextAlign
}

export const Title = ({text, textAlign,...props}: TitlePropsInterface) => {
	return (
		<Text
			{...props}
			textAlign={textAlign}
			lineHeight={{base:'48px',md:'96px'}}
			fontSize={{base: '2.25rem', sm: '2.5rem', lg: '2.5rem', xl: '4rem', '2xl': '5rem'}}
			fontWeight={'semibold'}
		>
			{text}
		</Text>
	)
}
