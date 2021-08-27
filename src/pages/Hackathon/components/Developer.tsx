import {observer} from "mobx-react-lite";
import {Box, Flex, Image, Link, Text} from "@chakra-ui/react";
import React from "react";
import {useStore} from "@/store/index";

const Developer = () => {
	const {lang} = useStore()
	return (
		<>
			<Flex
				maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}}
				mx={'auto'}
				mt={40}
				alignItems={'center'}
				justifyContent={'space-between'}
				flexDirection={{base:'column',md:'row'}}
			>
				<Image src={'images/hackathon/img_developer_support.png'} w={'40%'}/>

				<Box w={{base:'100%',md:'45%'}} mt={{base:5,md:0}}>
					<Text
						fontSize={{
							base: "2.2rem",
							sm: "3rem",
							lg: "3rem",
							xl: "5.5rem",
							"2xl": "7.5rem",
						}}
						fontWeight={'600'}
						textAlign={{base:'center',md:'unset'}}
					>
						{lang.t('hackathon.developer.title')}
					</Text>
					<Box
						mt={10}
						height={{ "2xl": "6rem" }}
						position="relative"
					>
						<Box
							w="100%"
							position="absolute"
							top="0"
							css={{
								transition: "all 0.6s",
								marginTop: 0,
								opacity: 0.8,
								"&:hover": {
									marginTop: "-10px",
									opacity: 1,
								},
							}}
						>
							<Link _hover={{}} _focus={{}} href={'https://iotex.gitbook.io/pebble-docs-for-hackathon/lumos-labs-hackathon/start'} isExternal>
								<Image src={'images/hackathon/resource_doc.png'} w={'70%'} mx={{base:'auto',md:'none'}}/>
							</Link>
						</Box>
					</Box>
				</Box>
			</Flex>
		</>
	)
}

export default observer(Developer)
