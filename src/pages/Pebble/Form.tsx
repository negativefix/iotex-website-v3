import {useStore} from "@/store/index";
import React, {useState} from "react";
import {Box, Flex, FormControl, FormErrorMessage, Heading, Input, Text, Textarea,Button as CButton} from "@chakra-ui/react";
import {observer} from "mobx-react-lite";

const Form=()=>{
	const {lang} = useStore()
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [interest, setInterest] = useState("")
	const [errors, setErrors] = useState({})
	const handleSubmit = () => {
		const errors = {
			name: !name,
			email: !email,
			interest: !interest
		}
		setErrors(errors)
	}
	return (
		<Box
			id='form1'
			maxWidth={{base: '98%', md: '80%', lg: '90%', '2xl': '1554px'}}
			mx="auto"
			borderRadius="1.125rem"
			padding={{
				base: '20px',
				md: '40px',
				lg:'80px'
			}}
			marginTop={{
				base: '5rem',
				md: '10rem'
			}}
			css={{
				background: "linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)",
				boxShadow: "inset -1px -1px 0px rgba(172, 208, 254, 0.25)",
				backdropFilter: "blur(100px)",
			}}
		>
			<Heading fontSize={'2.25rem'} textAlign={'center'}>{lang.t('pebble.section7.title')}</Heading>
			<Text marginTop={'16px'} fontSize={'1.12rem'} textAlign={'center'}>{lang.t('enterprise.form.subtitle')}</Text>
			<Flex flexDirection={'column'} marginTop={'4.4rem'}>

				<Flex justifyContent={'space-between'}>
					<Box width={'45%'}>
						<FormControl
							isInvalid={errors['name']}
							isRequired
						>
							<Input
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
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								_placeholder={{color: 'white', fontWeight: 'semibold'}}
								placeholder={lang.t("email")}
								size="lg"/>
							<FormErrorMessage>{'required'}</FormErrorMessage>
						</FormControl>
					</Box>
				</Flex>
				<Box marginTop={'1rem'}>
					<FormControl
						isInvalid={errors['interest']}
						isRequired
					>
						<Textarea
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
				<Box textAlign={'center'} marginTop={'3rem'}>
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
export default observer(Form)
