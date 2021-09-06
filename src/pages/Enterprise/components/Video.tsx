import {Box, Flex, Image, Modal, ModalBody, ModalContent, ModalOverlay} from "@chakra-ui/react";
import {helper} from "@/utils/helper";
import React from "react";
import {observer, useLocalObservable} from "mobx-react-lite";

const Video = () => {
	const store = useLocalObservable(() => ({
		isOpen: false,
		open() {
			store.isOpen = true;
		},
		onClose() {
			store.isOpen = false;
		},
	}))
	return (
		<>
			<Box
				bgImg={'url(images/enterprise/video_bg.png)'}
				py={{base: 40, lg: 96}}
				bgRepeat={'no-repeat'}
				bgSize={'cover'}
				bgPos={'center'}
				mt={{base: 0, lg: -48}}
			>

				<Flex
					mt={{base: 5, lg: 0}}
					w={{base: '100%', lg: '65%', xl: '65%'}}
					cursor={"pointer"}
					h={{base: '14rem', md: '25rem', lg: '10.5rem', xl: '38.5rem', '2xl': "40rem"}}
					justifyContent={'center'}
					onClick={store.open}
					alignItems={'center'}
					backgroundSize={'100%'}
					bgRepeat={'no-repeat'}
					position={'relative'}
					maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}}
					mx="auto"
					_after={{
						top: '0',
						left: 0,
						right: 0,
						bottom: 0,
						position: "absolute",
						content: `""`,
						backgroundImage: `url(images/enterprise/video_bg2.png)`,
						backgroundSize: '100% 100%',

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
						zIndex={2}
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
							<iframe src={'https://player.vimeo.com/video/588983687?h=1f3585dab8&&autoplay=1'}
							        loading="lazy"
							        width="100%"
							        height="100%"
							        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
							        allowFullScreen={true}/>
						</ModalBody>
					</ModalContent>
				</Modal>
			</Box>
		</>
	)
}

export default observer(Video);
