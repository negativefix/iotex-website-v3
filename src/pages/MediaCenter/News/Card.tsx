import {Box, Divider, Flex, Image, Text} from "@chakra-ui/react";
import React, {useState} from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "@/store/index";
import {ChevronDownIcon} from "@chakra-ui/icons";

interface CardProps{
	icon:string,
	iconActive:string
	bgColorActive:string
	text:string
	date:string
	link:string
	maxWidth?:string
	width:object
}

const Card = ({icon, iconActive, bgColorActive, text, date, link,maxWidth='30rem',width}:CardProps) => {
	const [isHover, setHover] = useState(false);
	return (
		<Flex
			css={{
				background: 'linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%);',
				cursor: 'pointer'
			}}
			flexDirection={'column'}
			width={width}
			height={'100%'}
			padding={'50px'}
			borderRadius={'20px'}
			maxWidth={maxWidth}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			position={'relative'}
			overflow={"hidden"}
			onClick={() => window.open(link)}
		>
			<Box
				position={'absolute'}
				height={'100px'}
				left={'0'}
				top={'0'}
				backgroundColor={isHover ? bgColorActive : 'none'}
				filter={{md: 'blur(40px)', lg: 'blur(50px)'}}
				width={'100px'}
			>
			</Box>
			<Flex flexDirection={'column'} justifyContent={'space-between'} h={'100%'}>
				<Box>
					<Flex minH={{md: '85px', lg: '99px'}} alignItems={'center'} justifyContent={'center'}>
						<Image src={isHover ? iconActive : icon}/>
					</Flex>
					<Divider marginTop={'20px'} opacity={'0.2'}/>
					<Text
						marginTop={'22px'}
						fontSize={{base: '1rem', sm: '1rem', lg: '1.25rem', xl: '1.5rem', '2xl': '1.75rem'}}
						fontWeight={'600px'}
					>
						{text}
					</Text>
				</Box>
				<Box>
					<Text color={'rgba(255,255,255,0.8)'} marginTop={'16px'} fontSize={'1rem'}>{date}</Text>
				</Box>
			</Flex>
		</Flex>
	)
}
export default observer(Card)
