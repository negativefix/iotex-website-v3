import {Box, Flex, Text} from "@chakra-ui/react";
import React from "react";
import {useStore} from "@/store/index";
import {helper} from "@/utils/helper";
import {Button} from "@/components/Button";

export const Banner=()=>{
	const {lang} = useStore()
	return(
		<Box
			css={{
				backgroundImage: `url(${helper.cdn('images/starter-pack/banner_bg.png')})`,
				backgroundSize: "100% 80%",
				backgroundRepeat: "no-repeat",
				backgroundPosition: 'top 3rem center'
			}}
		>
			<Box
				mt={14}
				mx={'auto'}
				maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}}
			>
				<Flex
					alignItems="center"
					direction="column"
					pt={{
						base: "5rem",
						sm: "8rem",
						md: "8rem",
						lg: "14rem",
						xl: "16rem",
						"2xl": "22rem",
					}}
					pb={{
						base: "8rem",
						sm: "8rem",
						md: "8rem",
						lg: "14rem",
						xl: "20rem",
						"2xl": "32rem",
					}}
				>
					<Text
						fontSize={{
							base: "2.25rem",
							sm: "3rem",
							lg: "3rem",
							xl: "4rem",
							"2xl": "6rem",
						}}
						mt={5}
						fontWeight="semibold"
						color="white"
						w="90%"
						textAlign="center"
						whiteSpace={{base: "inherit", md: "pre-line"}}
					>
						{lang.t("cmc.starter.pack.title")}
					</Text>
					<Text
						mt={5}
						fontSize={{
							base: "0.875rem",
							sm: "1rem",
							lg: "1.125rem",
							xl: "1.6rem",
							"2xl": "2.3rem",
						}}
						fontWeight="medium"
						color="white"
						w="80%"
						textAlign="center"
						whiteSpace={{base: "inherit", md: "pre-line"}}
						mb={10}
						dangerouslySetInnerHTML={{__html:lang.t("cmc.starter.pack.subtitle")}}
					/>
					<Button name={lang.t('cmc.banner.btn')} href={'/cmc-staking'} size={{base: "100%", lg: "16rem",xl:'30rem'}} boxHeight={{base:'4rem',md:'5rem'}}/>
				</Flex>
			</Box>
		</Box>
	)
}
