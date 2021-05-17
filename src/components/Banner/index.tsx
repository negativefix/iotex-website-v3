import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useStore } from '../../store';
import { observer, useLocalStore } from 'mobx-react-lite';

export const Banner = observer(() => {
  const { lang } = useStore();

    return (
        <Box position="relative" pt={{lg: "12rem", "2xl": "5rem"}}>
            <img src="/images/animation.svg" alt="" />
            <Box position="absolute" zIndex="2" w="100%" h="100%" top="0" left="0">
              <img src="/images/bigball.png" style={{
                position: 'absolute',width: '28vw', top:"20%", left: "10%",
                animation: 'bigBall 1.5s linear infinite alternate running'
              }} alt="" />
              <img src="/images/smallball.png" style={{
                position: 'absolute', width: '12vw', left: '75%', top: "50%",
                animation: 'smallBall 1.5s linear infinite alternate running'
              }}  alt="" />
          </Box>
          <Flex position="absolute" zIndex="3" w="100%" h="100%"  top="0" left="0" alignItems="center" justifyContent="center" direction="column">
            <Text fontSize={{base: "2rem", md: "3rem", xl: "4rem", "2xl": "5rem"}} fontWeight="semibold" color="white" w="70%" textAlign="center" mb="3.125rem">
              {lang.t("title")}
            </Text>
            <Text fontSize={{base: "1.5rem", "2xl": "1.8rem"}} fontWeight="medium" color="white" w="70%" textAlign="center" mb="3rem">
              {lang.t("subtitle")}
            </Text>
            <Box w="20rem" height="6rem"  position="relative" cursor="pointer" >
              <Box w="100%" position="absolute" top="0" css={{
                '&:hover': {
                  animation: 'upAnimate 1.4s linear infinite'
                }
              }}>
                <img src="/images/getStarted.png" alt="" />
              </Box>
            </Box>
          </Flex>
        </Box>
    );
});
