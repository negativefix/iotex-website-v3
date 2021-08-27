import {observer} from "mobx-react-lite";
import {useStore} from "@/store/index";
import React from "react";
import {Box,Image,Text} from "@chakra-ui/react";

const Timeline=()=>{
	const {lang} = useStore();
	return(
		<>
			<Box
				maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}}
				mx={'auto'}
				mt={28}
			>
				<Text
					fontSize={{
						base: "2.2rem",
						sm: "3rem",
						lg: "3rem",
						xl: "3.8rem",
						"2xl": "7.5rem",
					}}
					fontWeight={'semibold'}
				>
					{lang.t('hackathon.timeline')}
				</Text>
				<Image mt={20} src={'images/hackathon/img_timeline.png'}/>
			</Box>
		</>
	)
}

export default observer(Timeline)
