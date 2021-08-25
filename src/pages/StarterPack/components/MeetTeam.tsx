import {observer, useLocalObservable} from "mobx-react-lite";
import {Flex, Image, Modal, ModalBody, ModalContent, ModalOverlay, Text} from "@chakra-ui/react";
import React from "react";
import {helper} from "@/utils/helper";

const MeetTeam=()=>{
	const store = useLocalObservable(()=>({
		isOpen: false,
		onClose() {
			store.isOpen = false;
		},
		open() {
			store.isOpen = true;
		},
	}))
	return(
		<>
			<Text
				fontSize={{base:'0.9rem',xl: '1.2rem', '2xl': '3rem'}}
				fontWeight={600}
				mt={20}
			>
				{'MEET THE TEAM'}
			</Text>

			<Flex
				mt={10}
				onClick={store.open}
				w={'100%'}
				cursor={"pointer"}
				h={{base: '14rem',md:'25rem' ,lg: '30.5rem', xl: '40.5rem','2xl':"54rem"}}
				justifyContent={'center'}
				alignItems={'center'}
				backgroundSize={'100%'}
				bgRepeat={'no-repeat'}
				position={'relative'}
				_after={{
					top: '0',
					left: 0,
					right: 0,
					bottom: 0,
					position: "absolute",
					content: `""`,
					backgroundImage: 'url(images/starter-pack/meet_team_video_bg.png)',
					opacity: '0.6',
					backgroundSize: '100% 100%',
					transition: 'opacity .3s',
					backdropFilter: 'blur(100px)',
					zIndex: -1,
					borderRadius: "10px"
				}}
				_hover={{
					_after: {
						opacity: 1,
					}
				}}
			>
				<Image
					boxSize={{base: "40px", md: '50px', xl: "80px"}}
					objectFit="cover"
					src={helper.cdn('images/play-icon.png')}
					alt="img_circular3"
					mx="10%"
					cursor="pointer"
				/>
			</Flex>
			<Modal isOpen={store.isOpen} onClose={store.onClose} size="6xl">
				<ModalOverlay/>
				<ModalContent w="80%" h={{base: "50vh", md: "70vh"}}>
					<ModalBody
						bg="bgColor"
						border="1px"
						borderColor="borderColor"
						padding={0}
					>
						<iframe src="https://www.youtube.com/embed/AuNXNnsyXvk?autoplay=true"
						        loading="lazy"
						        width="100%"
						        height="100%"
						        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
						        allowFullScreen={true}/>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}

export default observer(MeetTeam)
