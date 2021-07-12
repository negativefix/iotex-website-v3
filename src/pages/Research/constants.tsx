import {Flex, Text} from "@chakra-ui/react";
import React from "react";

export const AWARDS = [
	{
		icon: 'images/media-center/logo_iic.png',
		iconActive: 'images/media-center/logo_iic_active.png',
		bgColorActive: '#EA332A',
		content: (
			<Flex flexDirection={'column'}>
				<Text fontWeight={"semibold"} fontSize={'2.25rem'} textAlign={'center'}>Co-chair</Text>
				<Text textAlign={'center'} fontSize={'1.75rem'}>IIC Blockchain Working Group</Text>
			</Flex>
		),
		link: 'https://medium.com/iotex/iotex-amazon-and-huawei-selected-as-co-chairs-of-the-iic-blockchain-task-group-9032b7b7443f'
	},
	{
		icon: 'images/research/ieee_icon.png',
		iconActive: 'images/research/ieee_icon_active.png',
		bgColorActive: '#366DB4',
		content: (
			<Flex flexDirection={'column'}>
				<Text fontWeight={"semibold"} fontSize={'2.25rem'} textAlign={'center'}>Vice Chair</Text>
				<Text textAlign={'center'} fontSize={'1.75rem'}>IEEE P2418.1 Standard</Text>
			</Flex>
		),
		link: 'https://medium.com/iotex/iotex-elected-vice-chair-of-ieee-blockchain-iot-standard-working-group-p2418-1-73e98099f7ed'
	},
	{
		icon: 'images/research/logo_cmia.png',
		iconActive: 'images/research/logo_cmia_active.png',
		bgColorActive: '#009DF2',
		content: (
			<Flex flexDirection={'column'}>
				<Text fontWeight={"semibold"} fontSize={'2.25rem'} textAlign={'center'}>Member</Text>
				<Text textAlign={'center'} fontSize={'1.75rem'}>Confidential Computing Consortium</Text>
			</Flex>
		),
		link: 'https://www.coindesk.com/facebook-iotex-and-r3-among-new-members-of-confidential-computing-consortium'
	},
	{
		icon: 'images/research/ccc_icon.png',
		iconActive: 'images/research/ccc_icon_active.png',
		bgColorActive: '#ED1846',
		content: (
			<Flex flexDirection={'column'}>
				<Text fontWeight={"semibold"} fontSize={'2.25rem'} textAlign={'center'}>Executive Committee</Text>
				<Text textAlign={'center'} fontSize={'1.75rem'}>China Mobile IoT Alliance</Text>
			</Flex>
		),
		link: 'https://medium.com/iotex/iotex-joins-executive-committee-of-china-mobile-iot-alliance-unveils-new-enterprise-iot-solutions-b6a8b6183afd'
	},
	{
		icon: 'images/research/ces_icon.png',
		iconActive: 'images/research/ces_icon_active.png',
		bgColorActive: '#5BC4F1',
		content: (
			<Flex flexDirection={'column'}>
				<Text fontWeight={"semibold"} fontSize={'2.25rem'} textAlign={'center'}>CES Innovation Award</Text>
				<Text textAlign={'center'} fontSize={'1.75rem'}>for Ucam</Text>
			</Flex>
		),
		link: 'https://www.ces.tech/Innovation-Awards/Honorees/2020/Honorees/U/Ucam-by-IoTeX-Fully-Private-Home-IP-Camera.aspx'
	},
]
