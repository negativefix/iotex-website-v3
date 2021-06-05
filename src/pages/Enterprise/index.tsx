import React from "react";
import BasicLayout from "../../Layouts/BasicLayout";
import {useStore} from "@/store/index";
import {observer} from "mobx-react-lite";
import {
	Box,
	Heading,
	Flex,
	Text,
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
			iocn_active: 'images/icon-logo1_s.png',
			title: lang.t('enterprise.group1.case1'),
			desc: lang.t('enterprise.group1.desc1')
		},
		{
			icon: 'images/icon-logo2.png',
			iocn_active: 'images/icon-logo2_s.png',
			title: lang.t('enterprise.group1.case2'),
			desc: lang.t('enterprise.group1.desc2')
		},
		{
			icon: 'images/icon-logo3.png',
			iocn_active: 'images/icon-logo3_s.png',
			title: lang.t('enterprise.group1.case3'),
			desc: lang.t('enterprise.group1.desc3')
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
						fontSize={{base: '1.75rem', sm: '3.75rem'}}
					>
						{lang.t("enterprise.lager.title")}
					</Heading>
					<Heading
						fontSize={{base: '0.88rem', sm: '1.5rem'}}
						textAlign="center"
						padding={{sm: '120px'}}
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
						<Flex flexDirection={'column'} width={{base: '100%', md: '40%'}}>
							{
								iconCardItems.map((item) => {
									return (
										<IconCard item={item} key={item.icon}/>
									)
								})
							}
						</Flex>
						<Box width={{base: '100%', md: '50%'}} marginTop={{base: '1rem', md: '0'}}>
							<Box>
								<Text fontSize={{md: '4rem', base: '2rem'}}
								      fontWeight={'semibold'}>{lang.t('enterprise.group1.title')}</Text>
								<Text marginTop={'1rem'}
								      fontSize={{md: "2rem", base: '1rem'}}>{lang.t('enterprise.group1.subtitle')}</Text>
							</Box>
							<img src='images/bg_enterprise_2.png' alt='bg_enterprise_2' style={{position: 'absolute'}}/>
						</Box>
					</Flex>
				</Box>

				<Box marginTop={'1rem'} padding={{base: '0', md: '1rem'}} width={{base: '100%', md: '50%'}}>
					<Text fontSize={{md: '4rem', base: '2rem'}} fontWeight={'semibold'}>
						{lang.t('enterprise.group2.title')}
					</Text>
					<Text padding={'1rem 0'} fontSize={{md: "2rem", base: '1rem'}}>
						{lang.t('enterprise.group2.subtitle')}
					</Text>
					<Button href="https://docs.iotex.io/" size={{base: "100%", lg: "16rem"}} name={lang.t("learn.more")}/>
				</Box>

				<Box marginTop={'5rem'}>
					<Flex justifyContent={'space-between'} flexDirection={{base: 'column', md: 'row'}}>
						<Flex flexDirection={'column'} width={{base: '100%', md: '40%'}}>
							<Box>
								<img src='images/icon_hardware.png' alt='icon_hardware' width={'40px'} height={'40px'}/>
								<Text fontSize={'2rem'}>{lang.t('enterprise.group2.core1.title')}</Text>
								<Text fontSize={'1.2rem'}>{lang.t('enterprise.group2.core1.desc')}</Text>
							</Box>
							<Box marginTop={'1rem'}>
								<img src='images/icon_cloud.png' width={'40px'} height={'40px'}/>
								<Text fontSize={'2rem'}>{lang.t('enterprise.group2.core2.title')}</Text>
								<Text fontSize={'1.2rem'}>{lang.t('enterprise.group2.core2.desc')}</Text>
							</Box>
							<Box marginTop={'1rem'}>
								<img src='images/icon_blockchain.png' width={'40px'} height={'40px'}/>
								<Text fontSize={'2rem'}>{lang.t('enterprise.group2.core3.title')}</Text>
								<Text fontSize={'1.2rem'}>{lang.t('enterprise.group2.core3.desc')}</Text>
							</Box>
						</Flex>
						<Box width={{base: '100%', md: '50%'}} marginTop={{base: '1rem', md: '0'}}>
							<img src="images/core_right.png" alt=""/>
						</Box>
					</Flex>
					<Box
						position='absolute'
						left='0'
						marginTop={{
							base: '-5rem',
							md: '-20rem'
						}}
						height={{base: '15%', md: '20%'}}
						width='90%'
					>
						<img src='images/bg_enterprise_3.png' width={'100%'}
						     style={{
							     height: '100%'
						     }}
						/>
					</Box>
				</Box>
				<Box>
				</Box>
				<Box marginTop={'20rem'}>
					<Heading textAlign={'center'} fontSize={'2rem'}
					         fontWeight={'semibold'}>{lang.t('enterprise.group3.title')}</Heading>
					<Flex marginTop={'5rem'} flexDirection={{base: 'column', md: 'row'}}>
						<Flex flexDirection={'column'} alignItems={'center'} padding={'1rem'}>
							<img src='images/icon_supply_chain.png' width={'120px'} height={'120px'}/>
							<Text>{lang.t('enterprise.group3.case1.title')}</Text>
							<Text>{lang.t('enterprise.group3.case1.desc')}</Text>
						</Flex>
						<Flex flexDirection={'column'} alignItems={'center'} padding={'1rem'}>
							<img src='images/icon_trust.png' width={'120px'} height={'120px'}/>
							<Text>{lang.t('enterprise.group3.case2.title')}</Text>
							<Text>{lang.t('enterprise.group3.case2.desc')}</Text>
						</Flex>
						<Flex flexDirection={'column'} alignItems={'center'} padding={'1rem'}>
							<img src='images/icon_camera.png' width={'120px'} height={'120px'}/>
							<Text>{lang.t('enterprise.group3.case3.title')}</Text>
							<Text>{lang.t('enterprise.group3.case3.desc')}</Text>
						</Flex>
					</Flex>
				</Box>
				<ContactForm/>
				<Footer/>
			</Flex>
		</BasicLayout>
	)
}
export default observer(Enterprise)
