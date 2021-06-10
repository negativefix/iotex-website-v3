import {Text} from "@chakra-ui/react";
import React from "react";
import {CaptionProps} from "./Caption";

const SubTitle = ({text, ...props}: CaptionProps) => {
	return (
		<Text
			{...props}
			fontWeight={'600px'}
			fontSize={{base: '1rem', md: '2rem'}}
		>
			{text}
		</Text>
	)
}

export default SubTitle
