import React from "react";
import BasicLayout from "../../Layouts/BasicLayout";
import {useStore} from "@/store/index";
import {observer} from "mobx-react-lite";
import {
	Box,
	Flex,
	Text, SimpleGrid, Image,
} from "@chakra-ui/react";
import {Button} from "@/components/Button";
import IconCard from "./components/IconCard";
import {Footer} from "@/components/Footer";
import ContactForm from "./components/ContactForm";
import Caption from "./components/Caption";
import SubTitle from "./components/SubTitle";
// @ts-ignore
import bg3 from '@/assets/images/enterprise/bg_enterprise_3.png'
// @ts-ignore
import coreRight from '@/assets/images/enterprise/core_right.png'
// @ts-ignore
import bgOne from '@/assets/images/enterprise/bg_enterprise_1.png'
import {Title} from "../Pebble/Title";
const Enterprise = () => {
	const {lang} = useStore()
	const iconCardItems = [
		{
			icon: 'images/icon-logo1.png',
			title: lang.t('enterprise.group1.case1'),
			desc: lang.t('enterprise.group1.desc1'),
			link: 'https://medium.com/iotex/iotex-amazon-and-huawei-selected-as-co-chairs-of-the-iic-blockchain-task-group-9032b7b7443f',
			linkText:'Learn More >>'
		},
		{
			icon: 'images/icon-logo2.png',
			title: lang.t('enterprise.group1.case2'),
			desc: lang.t('enterprise.group1.desc2'),
			link: 'https://medium.com/iotex/iotex-publishes-ieee-reports-on-blockchain-iot-c6650c26f443',
			linkText:'Discover More >>'
		},
		{
			icon: 'images/icon-logo3.png',
			title: lang.t('enterprise.group1.case3'),
			desc: lang.t('enterprise.group1.desc3'),
			link: 'https://www.coindesk.com/facebook-iotex-and-r3-among-new-members-of-confidential-computing-consortium',
			linkText: 'More Details >>'
		}
	]

	return (
		<BasicLayout>
			<Box
				backgroundImage={'url(images/enterprise/form_bg.png)'}
				backgroundPosition={{base:'right bottom 80rem',md:'right 5rem bottom 15rem'}}
				backgroundSize={{base:'100%',md:'50%'}}
				backgroundRepeat={"no-repeat"}
			>
				<Box

					bgImg={`url(${bgOne})`}
					backgroundRepeat={'no-repeat'}
					backgroundPosition={{base:'top 5% center',md:'top'}}
					backgroundSize={"contain"}
					pt={{base:20,md:40}}
				>
					<Box
						maxWidth={{ base: "90%", md: "80%", "2xl": "1554px" }}
						mx="auto"
					>
						<Text fontSize={{base: "2.25rem", sm: "3rem", lg: "3.5rem", xl: "5.5rem", "2xl": "7.5rem"}}
						      fontWeight="semibold" color="white" textAlign="center" whiteSpace={{base: "inherit", md: "pre-line"}}>
							{lang.t("enterprise.lager.title")}
						</Text>
						<Text
							fontSize={{base: '0.88rem', sm: '1.5rem', md: "2.5rem"}}
							textAlign="center"
							py={{base: "2rem", "2xl": "1.5rem"}}
							fontWeight="medium"
							marginTop={{base: '1rem', sm: '0'}}
						>
							{lang.t("enterprise.sub.title")}
						</Text>
						<Flex
							flexDirection={{base: 'column', md: 'column'}}
							justifyContent={'center'}
							alignItems={'center'}
							pt={2}
						>
							<Button
								href="#form1"
								name={lang.t("enterprise.banner.btn1")}
								size={{base: "100%",md:'45%', xl: "35%", "2xl": "30%"}}
								isBlank={false}
							/>

							<Text color={'#44FFB2'} fontSize={{base:'0.9rem',md:'1.25rem'}} fontWeight="medium" marginTop={'2rem'} onClick={()=>window.open('https://iotex.io/reference-architecture')}>{lang.t("enterprise.banner.btn2")}</Text>
						</Flex>

					</Box>

					{/*part 2*/}
					<Box
						marginTop={'10rem'} width={'100%'}
						backgroundImage={{base:'none',md:'url(images/bg_enterprise_2.png)'}}
						backgroundRepeat={'no-repeat'}
						backgroundPosition={{md:'right 230% center',lg:'right -30rem top 40rem'}}
					>
						<Flex
							maxWidth={{ base: "90%", md: "80%", "2xl": "1554px" }}
							flexDirection={{base: 'column-reverse', md: 'row'}}
							mx="auto"
							justifyContent={'space-between'}>
							<Flex flexDirection={'column'} width={{base: '100%', md: '45%'}} mt={{base:14}}>
								{
									iconCardItems.map((item) => {
										return (
											<IconCard item={item} key={item.icon}/>
										)
									})
								}
							</Flex>
							<Box width={{base: '100%', md: "48%", "2xl": '39%'}} marginTop={{base: '1rem', md: '0'}} >
								<Box>
									<Title text={lang.t('enterprise.group1.title')} textAlign={'left'}/>
									<Caption marginTop={'1rem'} text={lang.t('enterprise.group1.subtitle')}/>
								</Box>
							</Box>
						</Flex>
					</Box>
				</Box>


				{/* <Box mt="6.25rem"> */}
				{/*part3*/}
				{/* <Box marginTop={'15rem'} padding={{base: '0', md: '1rem'}} maxWidth='927px'>
					<Title text={lang.t('enterprise.group2.title')} textAlign={'left'}/>
					<Caption text={lang.t('enterprise.group2.subtitle')}/>
					<Box marginTop='5rem'>
						<Button href="https://docs.iotex.io/" size={{base: "100%", lg: "16rem"}} name={lang.t("learn.more")}/>
					</Box>
				</Box> */}

				{/*part4*/}
				{/* <Box marginTop={'5rem'}>
					<Flex justifyContent={'space-between'} flexDirection={{base: 'column', md: 'row'}}>
						<Flex flexDirection={'column'} width={{base: '100%', md: '40%'}}>
							<Box maxWidth='420px'>
								<img src='images/enterprise/icon_hardware.png' alt='icon_hardware' width={'60px'} height={'60px'}/>
								<SubTitle marginTop='36px' text={lang.t('enterprise.group2.core1.title')}/>
								<Caption text={lang.t('enterprise.group2.core1.desc')}/>
							</Box>
							<Box marginTop={'4rem'} maxWidth='420px'>
								<img src='images/enterprise/icon_cloud.png' width={'60px'} height={'60px'}/>
								<Text fontSize={'2rem'} marginTop='36px'>{lang.t('enterprise.group2.core2.title')}</Text>
								<Text fontSize={'1.12rem'}>{lang.t('enterprise.group2.core2.desc')}</Text>
							</Box>
							<Box marginTop={'4rem'} maxWidth='420px'>
								<img src='images/enterprise/icon_blockchain.png' width={'60px'} height={'60px'}/>
								<Text fontSize={'2rem'} marginTop='36px'>{lang.t('enterprise.group2.core3.title')}</Text>
								<Text fontSize={'1.12rem'}>{lang.t('enterprise.group2.core3.desc')}</Text>
							</Box>
						</Flex>
						<Box width={{base: '100%', md: '60%'}} marginTop={{base: '1rem', md: '0'}}>
							<Image src={coreRight} alt="core_right"/>
						</Box>
					</Flex>
				</Box> */}
				{/* </Box> */}

				{/*part5*/}
				<Flex
					justifyContent='center'
					backgroundSize={{base:'contain',md:'80% 90%'}}
					backgroundImage={`url(${bg3})`}
					backgroundRepeat={'no-repeat'}
					flexDirection="column"
					mt="6.25rem"
				>
					<Box mb="20rem">
						<img src="/images/enterprise/logos.png" alt="" />
					</Box>
					<Flex maxWidth={{base: '90%', md: '80%'}}  flexDirection='column' mx="auto" mt="2rem">

						<Title text={lang.t('enterprise.group3.title')} textAlign={'center'}/>
						<SimpleGrid columns={[1,3]} spacing={{base:'5rem',md:'2rem',lg:'2rem','xl':'2.5rem'}} marginTop='5rem'>
							<Flex alignItems='center' flexDirection='column'>
								<Image src='images/icon_supply_chain.png' width={'7.5rem'} height={'7.5rem'}/>
								<SubTitle fontSize='1.75rem' text={lang.t('enterprise.group3.case1.title')} textAlign={'center'}/>
								<Caption text={lang.t('enterprise.group3.case1.desc')} fontSize={'1.125rem'} textAlign={'center'}/>
							</Flex>
							<Flex alignItems='center' flexDirection='column'>
								<Image src='images/icon_trust.png' width={'7.5rem'} height={'7.5rem'}/>
								<SubTitle fontSize='1.75rem'  text={lang.t('enterprise.group3.case2.title')} textAlign={'center'}/>
								<Caption text={lang.t('enterprise.group3.case2.desc')} fontSize={'1.125rem'} textAlign={'center'}/>
							</Flex>
							<Flex alignItems='center' flexDirection='column'>
								<Image src='images/icon_camera.png' width={'7.5rem'} height={'7.5rem'}/>
								<SubTitle fontSize='1.75rem'  text={lang.t('enterprise.group3.case3.title')} textAlign={'center'}/>
								<Caption text={lang.t('enterprise.group3.case3.desc')} fontSize={'1.125rem'} textAlign={'center'}/>
							</Flex>
						</SimpleGrid>
					</Flex>
				</Flex>
				<ContactForm/>
				<Footer/>
			</Box>
		</BasicLayout>
	)
}
export default observer(Enterprise)
