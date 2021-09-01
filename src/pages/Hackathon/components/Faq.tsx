import React from "react";
import {useStore} from "@/store/index";
import {observer} from "mobx-react-lite";
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Flex, Image, Link,
	Text
} from "@chakra-ui/react";
import {Button} from "@/components/Button";

const FaqItem = ({faq, answer}) => {
	return (
		<>
			<h2>
				<AccordionButton _focus={{}} fontSize={'1.25rem'} py={4}>
					<Box flex="1" textAlign="left" fontWeight={'700'} fontStyle={'blod'}>
						{faq}
					</Box>
					<AccordionIcon/>
				</AccordionButton>
			</h2>
			<AccordionPanel pb={8} fontSize={'1.25rem'} whiteSpace={'pre-line'}>
				{answer}
			</AccordionPanel>
		</>
	)
}

const Faq = () => {
	const {lang} = useStore();
	const FAQ_CONSTENTS=[
		{
			faq:'I\'m new to Ethereum or IoTeX. Can I participate?\n',
			answer:'Absolutely! Our events are open to both beginners and veterans of the web3 world.\n'
		},
		{
			faq:'How many people can be on a team?',
			answer:'You can form teams of up to 5 people. There are no restrictions for team members, so you can team up with hackers of any country or experience level!'
		},
		{
			faq:'What is the selection criteria for the Hackathon?',
			answer:'Names/pseudonyms of team members and contact info (e.g., GitHub handle, email address or other).\n 2-3 minute video that presents the idea, including 1) a project name, 2) an overview of the design, novelty/originality, technical complexity, mass usability and creativity of the idea and 3) a brief demo that demonstrates the use of the IoTeX framework in some form.\nIf applicable, select the appropriate track when submitting the project.\nGitHub repo of your publicly visible source code of the hack.\nThere must be a clear description of the working of the project in the README file. If the project is live and can be tested, add the relevant links to that in the README file too.\nBroken links will disqualify the project from the judging process.'
		},
		{
			faq:'Can we apply for multiple products/projects?',
			answer:'Yes, the same team can apply for multiple products/projects as long as they fulfill the mandatory criterias. Please create a new submission to apply again.'
		},
		{
			faq:'Can an individual apply for the Hackathon?',
			answer:'Yes, an individual, a group of individuals, or a startup with founders and a team can apply for the hackathon'
		},
		{
			faq:'Who owns the IP to my project?',
			answer: 'The IP remains solely with the team that created it'
		},
		{
			faq:'Will there be funding opportunities for my project with IoTeX post the Hackathon',
			answer:'In addition to cash prizes on offer, IoTeX will be giving out Halo Grants to projects from this Hackathon that catch the eye. These grants will be provided for continued work and development of the project on the IoTeX platform.'
		},
		{
			faq:'How will I receive the prize money if I win?',
			answer: 'The prizes will be distributed in IoTeX (IOTX) tokens. The team will help the winners with the process'
		}
	]
	return (
		<>
			<Box
				maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}}
				mt={40}
				mx={'auto'}
			>
				<Text
					fontSize={{
						base: "2.25rem",
						sm: "3rem",
						lg: "3rem",
						xl: "5.75rem",
						"2xl": "7.5rem",
					}}
					textAlign={'center'}
					fontWeight={'semibold'}
				>
					{lang.t('faq')}
				</Text>
				<Accordion mt={10}>
					{
						FAQ_CONSTENTS.map((content,index)=>(
							<AccordionItem key={index}>
								<FaqItem faq={content.faq} answer={content.answer}/>
							</AccordionItem>
						))
					}
				</Accordion>
				<Flex justifyContent={'center'} mt={20} w={'100%'}>
					<Button name={lang.t('register.now')} href='https://xathon.mettl.com/event/IotexHackathonIndia'
					        size={{base: "100%", lg: "16rem", xl: '30rem'}} boxHeight={{base: '4rem', md: '4.7rem'}}/>
				</Flex>
				<Link href={'https://discord.gg/CVburMW5bd'} isExternal _focus={{}}>
					<Image mt={2} src={'images/hackathon/join_community.png'} w={{base: '80%', md: '40%'}} mx={'auto'}/>
				</Link>
				<Text mt={-5} fontSize={{base: '0.9rem', '2xl': '1rem'}}
				      textAlign={'center'}
				      dangerouslySetInnerHTML={{__html: lang.t('hackathon.paw.access')}}/>
			</Box>
		</>
	)
}

export default observer(Faq)
