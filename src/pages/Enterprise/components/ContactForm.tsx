import React, {useState} from "react";
import {Box, Flex, FormControl, FormErrorMessage, Heading, Input, Text, Textarea, Button as CButton} from "@chakra-ui/react";
import {observer} from "mobx-react-lite";
import {useStore} from "@/store/index";

const ContactForm = ()=>{
	const {lang} = useStore()
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [company, setCompany] = useState("")
	const [interest, setInterest] = useState("")
	const [errors, setErrors] = useState({})
	const handleSubmit = () => {
		const errors={
			name:!name,
			email:!email,
			company:!company,
			interest:!interest
		}
		setErrors(errors)
	}
	return (
		<Box
			id='form1'
			maxWidth={{base: "100%", md: "100%", "2xl": "1554px"}}
			mx="auto"
			borderRadius="1.125rem"
			padding={{
				base: '20px',
				md: '40px'
			}}
			css={{
				background: "linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)",
				boxShadow: "inset -1px -1px 0px rgba(172, 208, 254, 0.25)",
				backdropFilter: "blur(100px)",
				marginTop: '80px',
			}}
		>
			<Heading fontSize={'1.25rem'} textAlign={'center'}>{lang.t('enterprise.form.title')}</Heading>
			<Text marginTop={'16px'} fontSize={'1rem'} textAlign={'center'}>{lang.t('enterprise.form.subtitle')}</Text>
			<Flex flexDirection={'column'} marginTop={'1rem'}>

				<Flex justifyContent={'space-between'}>
					<Box width={'45%'}>
						<FormControl
							isInvalid={errors['name']}
							isRequired
						>
							<Input _placeholder={{color: 'white'}}
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
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								_placeholder={{color: 'white'}}
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
							value={company}
							onChange={(e) => setCompany(e.target.value)}
							_placeholder={{color: 'white'}}
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
							value={interest}
							onChange={(e) => setInterest(e.target.value)}
							rows={5}
							borderRadius={'5px'}
							padding={'5px'}
							size={'large'}
							resize={'none'}
							_placeholder={{color: 'white', marginLeft: '5px'}}
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
