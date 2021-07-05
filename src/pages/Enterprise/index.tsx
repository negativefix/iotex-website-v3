import React from "react";
import BasicLayout from "../../Layouts/BasicLayout";
import {useStore} from "@/store/index";
import {observer} from "mobx-react-lite";
import {
	Box,
	Heading,
	Flex,
	Text, SimpleGrid, Image, Img,
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
			width:'170.67px',
			height:'67px'
		},
		{
			icon: 'images/icon-logo2.png',
			title: lang.t('enterprise.group1.case2'),
			desc: lang.t('enterprise.group1.desc2'),
			link: 'https://medium.com/iotex/iotex-publishes-ieee-reports-on-blockchain-iot-c6650c26f443',
			width:'170.67px',
			height:'67px'
		},
		{
			icon: 'images/icon-logo3.png',
			title: lang.t('enterprise.group1.case3'),
			desc: lang.t('enterprise.group1.desc3'),
			link: 'https://www.coindesk.com/facebook-iotex-and-r3-among-new-members-of-confidential-computing-consortium',
			width:'170.67px',
			height:'67px'
		}
	]

	return (
		<BasicLayout>
			<Flex marginTop={{base: '5rem', md: '15rem'}} maxWidth={{base: '90%', md: '80%'}} flexDirection="column"
			      justifyContent={'center'} mx="auto">
				{/*part1*/}
				<Box
				>
					<Box
						position='absolute'
						marginTop={{base: '-10rem', md: '-15rem'}}
						width='90%'
						height={{base: '10%', md: 'auto'}}
					>
						<Image src={bgOne} style={{height: '100%'}} alt={'bg_enterprise_1'}/>
					</Box>
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
						minHeight={'200px'}
					>
						<Button
							href="#form1"
							name={lang.t("enterprise.banner.btn1")}
							size={{base: "100%",md:'40%', xl: "40%", "2xl": "30%"}}
							isBlank={false}
						/>

						<Text color={'#44FFB2'} fontSize={{base:'1rem',md:'1.25rem'}} fontWeight="medium" marginTop={'2rem'} onClick={()=>window.open('https://iotex.io/reference-architecture')}>{lang.t("enterprise.banner.btn2")}</Text>
					</Flex>
				</Box>

				{/*part2*/}
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
						<Box width={{base: '100%', md: "45", "2xl": '39%'}} marginTop={{base: '1rem', md: '0'}} maxWidth='760px'>
							<Box>
								<Title text={lang.t('enterprise.group1.title')} textAlign={'left'}/>
								<Caption marginTop={'1rem'} text={lang.t('enterprise.group1.subtitle')}/>
							</Box>
							<img src='images/bg_enterprise_2.png' alt='bg_enterprise_2'
							     style={{position: 'absolute', right: '0', zIndex: 0, marginTop: '5rem', width: '46%'}}/>
						</Box>
					</Flex>
				</Box>
			</Flex>
      

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
				minHeight='1500px'
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
					<SimpleGrid columns={[1,3]} spacing={{md:'35px',lg:'35px','xl':'40px'}} marginTop='5rem'>
						<Flex alignItems='center' flexDirection='column'>
							<img src='images/icon_supply_chain.png' width={'120px'} height={'120px'}/>
							<SubTitle fontSize='1.75rem' text={lang.t('enterprise.group3.case1.title')} textAlign={'center'}/>
							<Caption text={lang.t('enterprise.group3.case1.desc')} fontSize={'18px'} textAlign={'center'}/>
						</Flex>
						<Flex alignItems='center' flexDirection='column'>
							<img src='images/icon_trust.png' width={'120px'} height={'120px'}/>
							<SubTitle fontSize='1.75rem'  text={lang.t('enterprise.group3.case2.title')} textAlign={'center'}/>
							<Caption text={lang.t('enterprise.group3.case2.desc')} fontSize={'18px'} textAlign={'center'}/>
						</Flex>
						<Flex alignItems='center' flexDirection='column'>
							<img src='images/icon_camera.png' width={'120px'} height={'120px'}/>
							<SubTitle fontSize='1.75rem'  text={lang.t('enterprise.group3.case3.title')} textAlign={'center'}/>
							<Caption text={lang.t('enterprise.group3.case3.desc')} fontSize={'18px'} textAlign={'center'}/>
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
