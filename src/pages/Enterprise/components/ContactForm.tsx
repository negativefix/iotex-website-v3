import React, {useState} from "react";
import {
	Box,
	Flex,
	FormControl,
	FormErrorMessage,
	Heading,
	Input,
	Text,
	Textarea,
	Button as CButton
} from "@chakra-ui/react";
import {observer} from "mobx-react-lite";
import {useStore} from "@/store/index";



const ContactForm = () => {
	const {lang} = useStore()
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [company, setCompany] = useState("")
	const [interest, setInterest] = useState("")
	const [errors, setErrors] = useState({})
	const handleSubmit = () => {
		const errors = {
			name: !name,
			email: !email,
			company: !company,
			interest: !interest
		}
		setErrors(errors)
	}
	return (
		<Box
			id='form1'
			maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}}
			mx="auto"
			borderRadius="1.125rem"
			padding={{
				base: '88px 159px 111px',
				md: '88px 100px 111px',
				lg: '88px 100px 111px',
				xl: '88px 159px 111px',
			}}
			marginTop={{
				base: '5rem',
				md: '8rem'
			}}
			css={{
				background: "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255, 255, 255, 0) 133.06%)",
			}}
		>
			<Heading fontSize={'2.25rem'} textAlign={'center'}>{lang.t('enterprise.form.title')}</Heading>
			<Text marginTop={'16px'} fontSize={'1.12rem'} textAlign={'center'}>{lang.t('enterprise.form.subtitle')}</Text>
			<Flex flexDirection={'column'} marginTop={'4.4rem'}>

				<Flex justifyContent={'space-between'}>
					<Box width={'45%'}>
						<FormControl
							isInvalid={errors['name']}
							isRequired
						>
							<Input
								minHeight={'72px'}
								backgroundColor={'rgba(255, 255, 255, 0.1)'}
								_placeholder={{color: 'white', fontWeight: 'semibold'}}
								placeholder={lang.t("your.name")}
								size="lg"
								value={name}
								onChange={(e) => setName(e.target.value)}/>
							<FormErrorMessage>{'required'}</FormErrorMessage>
						</FormControl>
					</Box>
					<Box width={'45%'}>
						<FormControl
							isInvalid={errors['email']}
							isRequired
						>
							<Input
								minHeight={'72px'}
								backgroundColor={'rgba(255, 255, 255, 0.1)'}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								_placeholder={{color: 'white', fontWeight: 'semibold'}}
								placeholder={lang.t("email")}
								size="lg"/>
							<FormErrorMessage>{'required'}</FormErrorMessage>
						</FormControl>
					</Box>
				</Flex>
				<Box padding={'1rem 0'}>
					<FormControl
						isInvalid={errors['company']}
						isRequired
					>
						<Input
							minHeight={'72px'}
							backgroundColor={'rgba(255, 255, 255, 0.1)'}
							value={company}
							onChange={(e) => setCompany(e.target.value)}
							_placeholder={{color: 'white', fontWeight: 'semibold'}}
							placeholder={lang.t("company.name")}
							size="lg"/>
						<FormErrorMessage>{'required'}</FormErrorMessage>
					</FormControl>
				</Box>
				<Box>
					<FormControl
						isInvalid={errors['interest']}
						isRequired
					>
						<Textarea
							backgroundColor={'rgba(255, 255, 255, 0.1)'}
							value={interest}
							onChange={(e) => setInterest(e.target.value)}
							rows={10}
							borderRadius={'5px'}
							padding={'15px'}
							size={'large'}
							resize={'none'}
							_placeholder={{color: 'white', fontWeight: 'semibold'}}
							placeholder={lang.t("question")}/>
						<FormErrorMessage>{'required'}</FormErrorMessage>
					</FormControl>
				</Box>
				<Box textAlign={'center'} marginTop={'2rem'}>
					<CButton
						onClick={handleSubmit}
						backgroundColor={'#44FFB2'}
						color={'black'} size="lg"
						width={'15rem'}>
						{lang.t('submit')}
					</CButton>
				</Box>
			</Flex>
		</Box>
	)
}

export default observer(ContactForm)
