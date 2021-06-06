import React from "react";
import BasicLayout from "../../Layouts/BasicLayout";
import {useStore} from "@/store/index";
import {observer} from "mobx-react-lite";
import {
	Box,
	Heading,
	Flex,
	Text, SimpleGrid,
} from "@chakra-ui/react";
import {Button} from "@/components/Button";
import IconCard from "./components/IconCard";
import {Footer} from "@/components/Footer";
import ContactForm from "./components/ContactForm";

const Enterprise = () => {
	const {lang} = useStore()
	const iconCardItems = [
		{
			icon: 'images/icon-logo1.png',
			title: lang.t('enterprise.group1.case1'),
			desc: lang.t('enterprise.group1.desc1'),
			link: 'https://medium.com/iotex/iotex-amazon-and-huawei-selected-as-co-chairs-of-the-iic-blockchain-task-group-9032b7b7443f'
		},
		{
			icon: 'images/icon-logo2.png',
			title: lang.t('enterprise.group1.case2'),
			desc: lang.t('enterprise.group1.desc2'),
			link: 'https://medium.com/iotex/iotex-publishes-ieee-reports-on-blockchain-iot-c6650c26f443'
		},
		{
			icon: 'images/icon-logo3.png',
			title: lang.t('enterprise.group1.case3'),
			desc: lang.t('enterprise.group1.desc3'),
			link: 'https://www.coindesk.com/facebook-iotex-and-r3-among-new-members-of-confidential-computing-consortium'
		}
	]

	return (
		<BasicLayout>
			<Flex marginTop={{base: '5rem', md: '15rem'}} maxWidth={{base: '90%', md: '80%'}} display={'row'}
			      justifyContent={'center'} mx="auto">
				<Box
				>
					<Box
						position='absolute'
						marginTop={{base: '-10rem', md: '-15rem'}}
						width='90%'
						height={{base: '10%', md: 'auto'}}
					>
						<img src='images/bg_enterprise_1.png' style={{height: '100%'}}/>
					</Box>
					<Heading
						as={'h1'}
						textAlign="center"
						fontSize={{base: '1.75rem', md: '5rem'}}
						lineHeight={{base:'70px',md:'100px'}}
					>
						{lang.t("enterprise.lager.title")}
					</Heading>
					<Heading
						fontSize={{base: '0.88rem', sm: '1.5rem'}}
						textAlign="center"
						padding={{sm: '64px'}}
						marginTop={{base: '1rem', sm: '0'}}
					>
						{lang.t("enterprise.sub.title")}
					</Heading>
					<Flex
						flexDirection={{base: 'column', md: 'row'}}
						justifyContent={'space-around'}
						marginTop={{base: '1rem', md: '0'}}
						minHeight={'200px'}
					>
						<Button
							href="#form1"
							name={lang.t("enterprise.banner.btn1")}
							size={{base: "100%", xl: "40%", "2xl": "40%"}}
							isBlank={false}
						/>

						<Button
							href="https://iotex.io/reference-architecture"
							name={lang.t("enterprise.banner.btn2")}
							size={{base: "100%", xl: "40%", "2xl": "40%"}}
						/>
					</Flex>
				</Box>

				<Box marginTop={'10rem'} width={'100%'}>
					<Flex flexDirection={{base: 'column', md: 'row'}} justifyContent={'space-between'}>
						<Flex flexDirection={'column'} width={{base: '100%', md: '45%'}}>
							{
								iconCardItems.map((item) => {
									return (
										<IconCard item={item} key={item.icon}/>
									)
								})
							}
						</Flex>
						<Box width={{base: '100%', md: '50%'}} marginTop={{base: '1rem', md: '0'}} maxWidth='760px'>
							<Box>
								<Text fontSize={{md: '5rem', base: '2rem'}}
								      fontWeight={'semibold'}>{lang.t('enterprise.group1.title')}</Text>
								<Text marginTop={'1rem'}
								      fontSize={{md: "1.75rem", base: '1rem'}}>{lang.t('enterprise.group1.subtitle')}</Text>
							</Box>
							<img src='images/bg_enterprise_2.png' alt='bg_enterprise_2'
							     style={{position: 'absolute', right: '0', zIndex: 0, marginTop: '1rem', width: '55%'}}/>
						</Box>
					</Flex>
				</Box>

				<Box marginTop={'15rem'} padding={{base: '0', md: '1rem'}} maxWidth='927px'>
					<Text fontSize={{md: '5rem', base: '2rem'}} fontWeight={'semibold'}>
						{lang.t('enterprise.group2.title')}
					</Text>
					<Text padding={'1rem 0'} fontSize={{md: "1.75rem", base: '1rem'}}>
						{lang.t('enterprise.group2.subtitle')}
					</Text>
					<Box marginTop='5rem'>
						<Button href="https://docs.iotex.io/" size={{base: "100%", lg: "16rem"}} name={lang.t("learn.more")}/>
					</Box>
				</Box>

				<Box marginTop={'5rem'}>
					<Flex justifyContent={'space-between'} flexDirection={{base: 'column', md: 'row'}}>
						<Flex flexDirection={'column'} width={{base: '100%', md: '40%'}}>
							<Box maxWidth='420px'>
								<img src='images/icon_hardware.png' alt='icon_hardware' width={'60px'} height={'60px'}/>
								<Text fontSize={'2rem'} marginTop='20px'>{lang.t('enterprise.group2.core1.title')}</Text>
								<Text fontSize={'1.12rem'}>{lang.t('enterprise.group2.core1.desc')}</Text>
							</Box>
							<Box marginTop={'4rem'} maxWidth='420px'>
								<img src='images/icon_cloud.png' width={'60px'} height={'60px'}/>
								<Text fontSize={'2rem'} marginTop='20px'>{lang.t('enterprise.group2.core2.title')}</Text>
								<Text fontSize={'1.12rem'}>{lang.t('enterprise.group2.core2.desc')}</Text>
							</Box>
							<Box marginTop={'4rem'} maxWidth='420px'>
								<img src='images/icon_blockchain.png' width={'60px'} height={'60px'}/>
								<Text fontSize={'2rem'} marginTop='20px'>{lang.t('enterprise.group2.core3.title')}</Text>
								<Text fontSize={'1.12rem'}>{lang.t('enterprise.group2.core3.desc')}</Text>
							</Box>
						</Flex>
						<Box width={{base: '100%', md: '60%'}} marginTop={{base: '1rem', md: '0'}}>
							<img src="images/core_right.png" alt=""/>
						</Box>
					</Flex>
				</Box>
				<Box>
				</Box>
			</Flex>
			<Flex
				marginTop={{base:'0',md:'-20rem'}}
				background='url(images/bg_enterprise_3.png) no-repeat'
				paddingTop={{base:'0',md:'30rem'}}
				minHeight='1500px'
				justifyContent='center'
				backgroundSize={{base:'contain',md:'80% 90%'}}
			>
				<Flex maxWidth={{base: '90%', md: '80%'}}  flexDirection='column'>
					<Heading textAlign={'center'} fontSize={{base:'1.75rem',md:'5rem'}}
					         fontWeight={'semibold'}>{lang.t('enterprise.group3.title')}</Heading>
					<SimpleGrid columns={[1,3]} spacing='24px' marginTop='5rem'>
						<Flex alignItems='center' flexDirection='column'>
							<img src='images/icon_supply_chain.png' width={'120px'} height={'120px'}/>
							<Text fontSize='1.75rem' fontWeight="semibold">{lang.t('enterprise.group3.case1.title')}</Text>
							<Text fontSize='1.12rem'>{lang.t('enterprise.group3.case1.desc')}</Text>
						</Flex>
						<Flex alignItems='center' flexDirection='column'>
							<img src='images/icon_trust.png' width={'120px'} height={'120px'}/>
							<Text fontSize='1.75rem' fontWeight="semibold">{lang.t('enterprise.group3.case2.title')}</Text>
							<Text fontSize='1.12rem'>{lang.t('enterprise.group3.case2.desc')}</Text>
						</Flex>
						<Flex alignItems='center' flexDirection='column'>
							<img src='images/icon_camera.png' width={'120px'} height={'120px'}/>
							<Text fontSize='1.75rem' fontWeight="semibold">{lang.t('enterprise.group3.case3.title')}</Text>
							<Text fontSize='1.12rem'>{lang.t('enterprise.group3.case3.desc')}</Text>
						</Flex>
					</SimpleGrid>
				</Flex>
			</Flex>
			<ContactForm/>
			<Footer/>
		</BasicLayout>
	)
}
export default observer(Enterprise)
