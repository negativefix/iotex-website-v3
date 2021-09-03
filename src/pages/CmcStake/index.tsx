import React, {useEffect} from "react"
import {
	Box, Button,
	Divider,
	Flex,
	Image, Link,
	ListItem, Modal,
	ModalBody, ModalCloseButton, ModalContent, ModalFooter,
	ModalOverlay,
	SimpleGrid,
	Text,
	UnorderedList
} from "@chakra-ui/react";
import {useStore} from "@/store/index";
import BasicLayout from "../../Layouts/BasicLayout";
import {Footer} from "@/components/Footer";
import HighLight from "@/components/HighLight";
import {observer, useLocalObservable} from "mobx-react-lite";
import {subgraphAPI} from "@/lib/iotexGraphApi";
import {numberWithCommas} from "@/utils/index";


const StatItem = ({text, value}) => (
	<Box textAlign={'center'}>
		<Text fontWeight={'500'} fontSize={{base: '2rem', md: '3rem', xl: '3rem', '2xl': '3.5rem'}}>{value}</Text>
		<Text fontSize={{base: '1rem', md: '1.25rem'}} mt={2}>{text}</Text>
	</Box>
)

const CardItem = ({img, text}) => (
	<Flex
		flexDirection={'column'}
		background={'linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)'}
		borderRadius={'20px'}
		alignItems={'center'}
		py={{base: 5, lg: 10}}
	>
		<Image src={img} w={{base: '50%', lg: '50%'}}/>
		<Text fontSize={{base: '1rem', md: '1.25rem'}} fontWeight={'600'} mt={5}>{text}</Text>
	</Flex>
)

const CmcStake = () => {
	const {lang} = useStore()

	const store = useLocalObservable(() => ({
		isOpen: false,
		imgUrl: '',
		stakers: 0,
		transactions: 0,
		onClose: () => {
			store.isOpen = false
		},
		onOpen: (imgUrl) => {
			store.isOpen = true
			store.imgUrl = imgUrl
		},
		getAnalysisData: async () => {
			const response = await subgraphAPI.query({
				KV: [
					{
						where: {
							key: {
								_in: ["deviceCount", "transactions", "commiunity", "stakers"],
							},
						},
					},
					{
						key: true,
						value: true,
					},
				],
			});
			response.data.KV.forEach((item) => {
				store[`${item.key}`] = Number(item.value);
			});
		},
	}))
	useEffect(() => {
		store.getAnalysisData();
	}, []);
	const STATS = [
		{text: 'DELEGATES', value: '70+'},
		{text: 'STAKERS', value: numberWithCommas(store.stakers)},
		{text: 'TOTAL IOTX STAKED', value: '27%'},
		{text: 'TRANSACTIONS', value: numberWithCommas(store.transactions)}
	]

	const CARD_CONTENT = [
		{img: 'images/cmc-stake/NFT.png', text: 'Exclusive NFT'},
		{img: 'images/cmc-stake/IOTX.png', text: '20 IOTX'},
		{img: 'images/cmc-stake/APY.png', text: '11% APY'},
		{img: 'images/cmc-stake/other_perks.png', text: 'Other Perks'},
	];

	return (
		<>
			<BasicLayout name={'cmc-stake'}>
				{/*	section 1*/}
				<Flex
					maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}} mx="auto"
					mt={40}
					justifyContent={{lg: 'space-between'}}
					flexDirection={{base: 'column-reverse', xl: 'row'}}
				>
					<Box width={{base: '100%', xl: '50%'}}>
						<Text fontWeight={'600'} fontSize={{base: '2rem', lg: '3rem', xl: '4rem', '2xl': '5rem'}}
						      lineHeight={{xl: '5.5rem', '2xl': '6.5rem'}}
						      whiteSpace={{xl: 'pre-line'}}>
							{lang.t("cmc.stake.title")}
						</Text>
						<Text fontWeight={'500'} fontSize={{md: '1.25rem', '2xl': '2rem'}} mt={5} pb={10}>
							{lang.t("cmc.stake.desc")}
						</Text>
					</Box>
					<Image src={'images/cmc-stake/section1_right.png'} width={{lg: "45%", xl: '54%'}}
					       height={{lg: "45%", xl: '45%'}}/>
				</Flex>
				<SimpleGrid
					maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}} mx="auto"
					mt={28}
					columns={[2, 2, 2, 2, 4]}
					spacingY={10}
				>
					{
						STATS.map(item => <StatItem text={item.text} key={item.text} value={item.value}/>)
					}
				</SimpleGrid>

				{/*section2*/}
				<Box
					mt={28}
					maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}} mx="auto"
				>
					<Text
						fontWeight={'600'}
						fontSize={{base: '1.15rem', xl: '1.8rem', '2xl': '3.5rem'}}
					>
						{lang.t('cmc.stake.before.start')}
					</Text>
					<Divider mt={3} mb={10}/>
					<Text
						fontWeight={'600'}
						fontSize={{base: '0.9rem', xl: '1.2rem', '2xl': '3rem'}}
					>{lang.t('cmc.stake.what.stake')}</Text>
					<Flex
						mt={5}
						background={'linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)'}
						boxShadow={'inset -1px -1px 0px rgba(255, 255, 255, 0.25)'}
						borderRadius={'20px'}
						css={{
							backdropFilter: 'blur(100px)'
						}}
						p={8}
						alignItems={'center'}
						flexDirection={{base: 'column', lg: 'row'}}
					>
						<Image src={'images/cmc-stake/img_staking.png'} w={{base: '50%', lg: '30%'}}/>
						<Box mt={{base: 10, lg: 0}}>
							<Text ml={{base: 0, lg: 10}} fontSize={{'2xl': '1.25rem'}}
							      dangerouslySetInnerHTML={{__html: lang.t('cmc.stake.what.stake.desc1')}}/>
							<Text ml={{base: 0, lg: 10}} fontSize={{'2xl': '1.25rem'}}
							      dangerouslySetInnerHTML={{__html: lang.t('cmc.stake.what.stake.desc2')}} mt={{base: 5, '2xl': 10}}/>
						</Box>
					</Flex>

					<Text
						mt={28}
						fontWeight={'600'}
						fontSize={{base: '0.9rem', xl: '1.2rem', '2xl': '3rem'}}
					>{lang.t('cmc.stake.with.IOTX')}</Text>
					<Text mt={5} dangerouslySetInnerHTML={{__html: lang.t('cmc.stake.with.IOTX.caption')}} whiteSpace={'pre-line'}
					      fontSize={{base: '0.9rem', xl: '1.2rem', '2xl': '3rem'}}/>
					<SimpleGrid columns={[2, 2, 2, 4]} mt={10} spacingX={10} spacingY={10}>
						{
							CARD_CONTENT.map((card, index) => <CardItem text={card.text} img={card.img} key={index}/>)
						}
					</SimpleGrid>
				</Box>

				<Box
					mt={28}
					maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}} mx="auto"
				>
					<Box
						fontSize={{base: '0.9rem', xl: '1.2rem', '2xl': '3rem'}}
						fontWeight={'600'}
					>

						<Text fontSize={{'2xl': '1.25rem'}} dangerouslySetInnerHTML={{__html: lang.t('cmc.stake.eligible')}}/>
					</Box>
					<Flex
						mt={5}
						background={'linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)'}
						boxShadow={'inset -1px -1px 0px rgba(255, 255, 255, 0.25)'}
						borderRadius={'20px'}
						css={{
							backdropFilter: 'blur(100px)'
						}}
						p={{base: 8, '2xl': 12}}
						alignItems={'center'}
						flexDirection={{base: 'column', lg: 'row'}}
					>
						<Image src={'images/cmc-stake/img_staking_91_days.png'} w={{base: '40%', lg: '25%'}} mx={5}/>
						<Box mt={{base: 10, lg: 0}} ml={{base: 0, lg: 10}}>
							<Text
								fontWeight={'600'}
								fontSize={{base: '1.2rem', xl: '1.5rem', '2xl': '3.5rem'}}
							>{lang.t('cmc.stake.eligible.title1')}</Text>
							<Text
								mt={5}
								fontWeight={'500'}
								fontSize={{base: '1rem', xl: '1.25rem', '2xl': '3rem'}}
							>{'Stake for 91+ days to maximize your IOTX rewards'}</Text>
							<Text fontSize={{'2xl': '1.25rem'}} mb={5}
							      dangerouslySetInnerHTML={{__html: lang.t('cmc.stake.eligible.caption1_1')}} mt={5}/>

							<Link href={'https://coinmarketcap.com/earn/token-distribution-status'} isExternal _hover={{}}>
								<Button _active={{}} _hover={{}} _focus={{}} background={'linear-gradient(92.18deg, #44FFB2 19.21%, #00D3DC 105.06%)'} color={'black'}>Check If You Won Here</Button>
							</Link>

							<Text fontSize={{'2xl': '1.25rem'}} mt={5}
							      dangerouslySetInnerHTML={{__html: lang.t('cmc.stake.eligible.caption1_2')}}/>
							<UnorderedList color={'#44FFB2'} fontWeight={'500'}>
								<ListItem>
									<Link href={'https://iotex.io/iopay'} isExternal _hover={{}} _focus={{}}>{'Download ioPay >>'}</Link>
								</ListItem>
								{/*<ListItem>*/}
								{/*	<Link isExternal _hover={{}} _focus={{}}>{'How to check prestaked bucket in ioPay >>'}</Link>*/}
								{/*</ListItem>*/}
								{/*<ListItem>*/}
								{/*	<Link isExternal _hover={{}} _focus={{}}>{'I am staking with Trust Wallet >>'}</Link>*/}
								{/*</ListItem>*/}
							</UnorderedList>
							<Text
								fontSize={{base: '1.2rem', xl: '1.5rem', '2xl': '3.5rem'}}
								fontWeight={'500'} mt={14}>{lang.t("cmc.stake.eligible.title2")}</Text>
							<Text fontSize={{'2xl': '1.25rem'}}
							      dangerouslySetInnerHTML={{__html: lang.t('cmc.stake.eligible.caption2_1')}} mt={5}/>

						</Box>
					</Flex>

				</Box>

				<Box
					mt={28}
					maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}} mx="auto"
				>
					<Text
						fontWeight={'600'}
						fontSize={{base: '1.15rem', xl: '1.8rem', '2xl': '3.5rem'}}
					>
						BEGIN STAKING
					</Text>
					<Divider mt={3} mb={10}/>

					{/*step1*/}
					<Box fontSize={{base: '0.9rem', xl: '1.2rem', '2xl': '3rem'}} fontWeight={'500'}>
						<HighLight sourceStr={'STEP 1. PREPARE TO STAKE'} keyArr={[{word: 'STEP 1.', link: ''}]}
						           markActiveStyle={{color: 'rgba(68, 255, 178, 1)'}}/>
					</Box>
					<Flex
						mt={5}
						background={'linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)'}
						boxShadow={'inset -1px -1px 0px rgba(255, 255, 255, 0.25)'}
						borderRadius={'20px'}
						css={{
							backdropFilter: 'blur(100px)'
						}}
						p={8}
						alignItems={'center'}
						flexDirection={{base: 'column', lg: 'row'}}
					>
						<Image src={'images/cmc-stake/img_staking2.png'} p={10} w={{base: '80%', lg: '40%'}}/>
						<Box>
							<Text dangerouslySetInnerHTML={{__html: lang.t('cmc.stake.setp1.desc1')}} fontSize={{'2xl': '1.25rem'}}/>
							<Text
								mt={12}
								fontWeight={'700'}
								fontSize={{base: '1.2rem', xl: '1.5rem', '2xl': '3.5rem'}}
							>{lang.t('cmc.stake.step1.title')}</Text>
							<Text mt={5} fontSize={{'2xl': '1.25rem'}}>IOTX is easy to acquire on the largest exchanges in the world.
								Here is two recommended exchanges where you can get IOTX:</Text>
							<Link href={'https://www.binance.com/en/trade/IOTX_USDT?theme=dark&type=spot'} isExternal _focus={{}} _hover={{}}>
								<Text fontWeight={'700'}
								      color={'#44FFB2'}
								      fontSize={{'2xl': '1.25rem'}}>{'Binance >>'}</Text>
							</Link>
							<Link href={'https://www.bitmart.com/trade/en?symbol=IOTX_USDT&layout=basic'} isExternal _focus={{}} _hover={{}}>
								<Text fontWeight={'700'}
								      color={'#44FFB2'}
								      fontSize={{'2xl': '1.25rem'}}>{'BitMart >>'}</Text>
							</Link>
							<Link href={'https://trade.kucoin.com/IOTX-BTC'} isExternal _focus={{}} _hover={{}}>
								<Text fontWeight={'700'}
								      color={'#44FFB2'}
								      fontSize={{'2xl': '1.25rem'}}>{'Kucoin >>'}</Text>
							</Link>
							<Link href={'https://www.coinbase.com/price/iotex'} isExternal _focus={{}} _hover={{}}>
								<Text fontWeight={'700'} color={'#44FFB2'} fontSize={{'2xl': '1.25rem'}}>{'Coinbase >>'}</Text>
							</Link>
							<Text mt={5} fontSize={{'2xl': '1.25rem'}}> If you are a winner, your bucket is already prestaked.
								You can see it in your panel.</Text>
						</Box>
					</Flex>

					{/*step 2*/}
					<Box fontSize={{base: '0.9rem', xl: '1.2rem', '2xl': '3rem'}} fontWeight={'500'} mt={20}>
						<HighLight sourceStr={'STEP 2. LOGIN TO IOPAY WALLET ON DESKTOP OR MOBILE'}
						           keyArr={[{word: 'STEP 2.', link: ''}]}
						           markActiveStyle={{color: 'rgba(68, 255, 178, 1)'}}/>
					</Box>

					<Flex
						background={'linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)'}
						boxShadow={'inset -1px -1px 0px rgba(255, 255, 255, 0.25)'}
						borderRadius={'20px'}
						css={{
							backdropFilter: 'blur(100px)'
						}}
						flexDirection={'row'} py={{base: 5, md: 10}} px={{base: 5, md: 20}} mt={10} justifyContent={'space-between'}
						alignItems={'center'}>
						<Image src={'images/cmc-stake/step2.png'} onClick={() => store.onOpen('images/cmc-stake/step2.png')}
						       cursor={'pointer'}/>
					</Flex>

					{/*step 3*/}
					<Box fontSize={{base: '0.9rem', xl: '1.17rem', '2xl': '3rem'}} fontWeight={'500'} mt={20}>
						<HighLight
							sourceStr={'STEP 3. IOTEX STAKEHOLDERS CAN STAKE/VOTE USING EITHER THE DESKTOP OR MOBILE IOPAY APPLICATION'}
							keyArr={[{word: 'STEP 3.', link: ''}]} markActiveStyle={{color: 'rgba(68, 255, 178, 1)'}}/>
					</Box>
					<Box
						background={'linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)'}
						boxShadow={'inset -1px -1px 0px rgba(255, 255, 255, 0.25)'}
						borderRadius={'20px'}
						css={{
							backdropFilter: 'blur(100px)'
						}}
						py={{base: 5, md: 10}} px={{base: 5, md: 20}} mt={10}
					>
						<Flex flexDirection={{base: 'column', md: 'row'}} justifyContent={'space-between'}>
							<Box w={{base: '100%', md: '60%'}}>
								<Image src={'images/cmc-stake/step3_1.png'}
								       onClick={() => store.onOpen('images/cmc-stake/step3_1.png')}/>
								<Image src={'images/cmc-stake/step3_2.png'} mt={3}
								       onClick={() => store.onOpen('images/cmc-stake/step3_2.png')}/>
							</Box>
							<Box w={{base: '100%', md: '35%'}}>
								<Text
									color={'#44FFB2'}
									fontWeight={'600'}
									mt={{base: 10, md: 0}}
									fontSize={{'2xl': '1.25rem'}}
								>
									For Desktop users
								</Text>
								<Text mt={{base: 5, md: 10}} fontSize={{'2xl': '1.25rem'}}
								      dangerouslySetInnerHTML={{__html: lang.t('cmc.stake.step3.desc')}}/>
							</Box>
						</Flex>

						<Flex flexDirection={{base: 'column', md: 'row'}} justifyContent={'space-between'} mt={10}>
							<Box w={{base: '100%', md: '60%'}}>
								<Image src={'images/cmc-stake/step3_3.png'}
								       onClick={() => store.onOpen('images/cmc-stake/step3_3.png')}/>
							</Box>
							<Box w={{base: '100%', md: '35%'}}>
								<Text
									fontSize={{'2xl': '1.25rem'}}
									color={'#44FFB2'}
									fontWeight={'600'}
									mt={{base: 10, md: 0}}
								>
									For Mobile users

								</Text>
								<Text fontSize={{'2xl': '1.25rem'}} mt={{base: 5, md: 10}}
								      dangerouslySetInnerHTML={{__html: lang.t('cmc.stake.step3.desc2')}}/>
							</Box>
						</Flex>
					</Box>

					{/*	step 4*/}
					<Box fontSize={{base: '0.9rem', xl: '1.17rem', '2xl': '3rem'}} fontWeight={'500'} mt={20}>
						<HighLight
							sourceStr={'STEP 4. SELECT YOUR STAKING DELEGATE'}
							keyArr={[{word: 'STEP 4.', link: ''}]} markActiveStyle={{color: 'rgba(68, 255, 178, 1)'}}/>
					</Box>
					<Flex
						background={'linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)'}
						boxShadow={'inset -1px -1px 0px rgba(255, 255, 255, 0.25)'}
						borderRadius={'20px'}
						css={{
							backdropFilter: 'blur(100px)'
						}}
						py={{base: 5, md: 10}} px={{base: 5, md: 20}} mt={10}
						justifyContent={'space-between'}
						fontSize={{base: '0.9rem', xl: '1rem', '2xl': '1.25rem'}}
						flexDirection={{base: 'column', lg: 'row'}}
					>
						<Box w={{base: '100%', lg: '50%'}}>
							<Image src={'images/cmc-stake/step4_1.png'} onClick={() => store.onOpen('images/cmc-stake/step4_1.png')}/>
							<Image src={'images/cmc-stake/step4_2.png'} onClick={() => store.onOpen('images/cmc-stake/step4_2.png')}
							       mt={10}/>
						</Box>
						<Box w={{base: '100%', lg: '45%'}}>
							<Text
								mt={{base: 10, lg: 0}}
							>
								After clicking “New Stake” you can create a new staking bucket by defining the following options:
							</Text>
							<UnorderedList mt={10} fontWeight={'500'}>
								<ListItem>
									<Text><span style={{color: '#44FFB2', fontWeight: 600}}>Delegate</span>: Choose your prefered
										delegate.</Text>
									<Text fontStyle={'italic'}>Quick tip: Choose top 36, and the fewer staked votes they have the more
										likely you are to get a bigger reward. Staking on smaller delegates can pay off!</Text>
								</ListItem>

								<ListItem mt={10}>
									<Text><span style={{color: '#44FFB2', fontWeight: 600}}>Amount </span>: The minimum amount of IOTX
										that can be staked
										is 100. You need to have at least 101 to stake (Keep at least 1 IOTX in your wallet for
										transactions.)</Text>
								</ListItem>

								<ListItem mt={10}>
									<Text><span style={{color: '#44FFB2', fontWeight: 600}}>Stake Duration</span>: We recommend over 91
										days for maximum
										rewards. The amount of time you wish to stake your tokens in a bucket (can be between 0-1050 days).
										The longer your stake duration, the more bonus votes/rewards you get! You may extend your stake
										duration at any time, but it cannot be decreased.</Text>
								</ListItem>

								<ListItem mt={10}>
									<Text><span style={{color: '#44FFB2', fontWeight: 600}}>Stake-Lock</span>: by turning stake-lock on,
										you will receive
										even more bonus votes/rewards but won't be able to un-stake. When stake-locking, you will get 30-50%
										more rewards</Text>
									<Text fontStyle={'italic'} mt={10}>
										You will NOT be able to un-stake your tokens until your stake duration expires. The un-staking
										process lasts 3 days from the expiration date, after which you may withdraw your tokens to your
										wallet.

									</Text>
									<Text fontStyle={'italic'} mt={10}>
										If you want to be able to un-stake your tokens at any time, select a 0 day stake duration.
									</Text>
								</ListItem>
							</UnorderedList>
						</Box>

					</Flex>

					{/*	step 5*/}
					<Box fontSize={{base: '0.9rem', xl: '1.17rem', '2xl': '3rem'}} fontWeight={'500'} mt={20}>
						<HighLight
							sourceStr={'STEP 5. SIGN TRANSACTION VIA IOPAY'}
							keyArr={[{word: 'STEP 5.', link: ''}]} markActiveStyle={{color: 'rgba(68, 255, 178, 1)'}}/>
					</Box>
					<Box
						background={'linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)'}
						boxShadow={'inset -1px -1px 0px rgba(255, 255, 255, 0.25)'}
						borderRadius={'20px'}
						css={{
							backdropFilter: 'blur(100px)'
						}}
						py={{base: 5, md: 10}} px={{base: 5, md: 20}} mt={10}
					>
						<Flex flexDirection={{base: 'column', lg: 'row'}} justifyContent={'space-between'}>
							<Box w={{base: '100%', lg: '60%'}}>
								<Image src={'images/cmc-stake/step5_1.png'}
								       onClick={() => store.onOpen('images/cmc-stake/step5_1.png')}/>
							</Box>
							<Box w={{base: '100%', lg: '35%'}} mt={{base: 10, lg: 0}} fontSize={{'2xl': '1.25rem'}}>
								<Text>
									After selecting your Delegate and voting options, click “Proceed to Vote” and confirm the
									staking/voting transaction.
								</Text>
								<Text mt={10} color={'#44FFB2'} fontWeight={'600'}>
									For Desktop users
								</Text>

								<Text mt={5}>
									Confirm the transaction details on the voting website. Then in the ioPay Desktop app, sign the
									transaction. You will see a confirmation screen in ioPay with your transaction hash.
								</Text>
							</Box>
						</Flex>

						<Flex flexDirection={{base: 'column', lg: 'row'}} justifyContent={'space-between'} mt={10}>
							<Box w={{base: '100%', lg: '60%'}}>
								<Image src={'images/cmc-stake/step5_2.png'}
								       onClick={() => store.onOpen('images/cmc-stake/step5_2.png')}/>
							</Box>
							<Box w={{base: '100%', lg: '35%'}} mt={{base: 10, lg: 0}} fontSize={{'2xl': '1.25rem'}}>
								<Text fontWeight={'600'} color={'#44FFB2'}>
									For Mobile users
								</Text>
								<Text mt={5}>
									Confirm the transaction details and sign the transaction. You will see a confirmation screen with your
									transaction hash.
								</Text>
							</Box>
						</Flex>
					</Box>
					<Text fontWeight={'500'} mt={20} fontSize={{base: '0.9rem', xl: '1.2rem', '2xl': '1.5rem'}}
					>CONGRATULATIONS, YOU STAKED/VOTED WITH NATIVE IOTX VIA IOPAY!</Text>
				</Box>
				<Footer/>

				<Modal onClose={store.onClose} size={'6xl'} isOpen={store.isOpen}>
					<ModalOverlay/>
					<ModalContent>
						<ModalBody>
							<Image src={store.imgUrl} w={'100%'}/>
						</ModalBody>
					</ModalContent>
				</Modal>
			</BasicLayout>
		</>
	)
}

export default observer(CmcStake)
