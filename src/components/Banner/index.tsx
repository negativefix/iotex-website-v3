import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useStore } from '../../store';
import { observer, useLocalStore } from 'mobx-react-lite';

export const Banner = observer(() => {
  const { lang } = useStore();

    return (
        <Box position="relative" pt="6.125rem">
            <img src="/images/animation.svg" alt="" />
            <Box position="absolute" zIndex="2" w="100%" h="100%" top="0" left="0">
              <img src="/images/bigball.png" style={{
                position: 'absolute',width: '35rem', top:"10%", left: "10%",
                animation: 'bigBall 1.5s linear infinite alternate running'
              }} alt="" />
              <img src="/images/smallball.png" style={{
                position: 'absolute', width: '13rem', left: '75%', top: "50%",
                animation: 'smallBall 1.5s linear infinite alternate running'
              }}  alt="" />
          </Box>
          <Flex position="absolute" zIndex="3" w="100%" h="100%"  top="0" left="0" alignItems="center" justifyContent="center" direction="column">
            <Text fontSize={{xl: "5rem", "2xl": "6.25rem"}} fontWeight="semibold" color="white" w="70%" textAlign="center" mb="3.125rem">
              {lang.t("title")}
            </Text>
            <Text fontSize={{xl: "1.5rem", "2xl": "2rem"}} fontWeight="medium" color="white" w="70%" textAlign="center" mb="3rem">
              {lang.t("subtitle")}
            </Text>
            <Box w="20rem" cursor="pointer" css={{
              '&:hover': {
                animation: 'upAnimate 1.2s linear infinite'
              }
            }}>
              <img src="/images/getStarted.png" alt="" />
            </Box>
          </Flex>
        </Box>
    );
});
