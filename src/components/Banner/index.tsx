import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useStore } from '../../store';
import { observer, useLocalStore } from 'mobx-react-lite';

export const Banner = observer(() => {
  const { lang } = useStore();

    return (
        <Box position="relative" pt={{base: "6rem", md: "4rem", lg: "5rem", xl: "6rem", "2xl": "5rem"}}>
            <img src="/images/animation.svg" alt="" />
            <Box position="absolute" zIndex="2" w="100%" h="100%" top="0" left="0">
                <Box w={{base: "25vw", md: "25vw", lg: "28vw"}} position="absolute" top="20%" left="10%" css={{animation: 'bigBall 1.8s linear infinite alternate running'}}>
                  <img src="/images/bigball.png" alt="" />
                </Box>
                <Box w={{base: "8vw", md: "8vw", lg: "12vw"}}  position="absolute" left="75%" top="50%">
                  <img src="/images/smallball.png"alt="" />
                </Box>
            </Box>
            <Flex position="absolute" zIndex="3" w="100%" h="100%"  top="0" 
              left="0" alignItems="center" justifyContent="center" direction="column"
              pt={{base: "6rem", md: "4rem", lg: "5rem", xl: "6rem", "2xl": "5rem"}}>
              <Text fontSize={{base: "1.5rem", md: "1.875rem", lg: "2.5rem", xl: "4rem", "2xl": "5rem"}}
                mb={{base: "1rem", md: "2rem", lg: "2.5rem", xl: "3.5rem", "2xl": "3.125rem"}}
                fontWeight="bold" color="white" w="70%" textAlign="center">
                {lang.t("title")}
              </Text>
              <Text fontSize={{base: "0.75rem", md: "1rem", lg: "1.25rem", xl: "1.5rem", "2xl": "1.8rem"}}
                mb={{base: "0.75rem", md: "2rem", lg: "1.8rem", xl: "2rem", "2xl": "3rem"}}
                fontWeight="medium" color="white" w="70%" textAlign="center">
                {lang.t("subtitle")}
              </Text>
              <Box w={{base: "8rem", md: "10rem", lg: "14rem",  xl: "20rem"}} height={{xl: "6rem"}}  position="relative" cursor="pointer" >
                <Box w="100%" position="absolute" top="0" css={{
                  transition: 'margin 0.6s',
                  marginTop: 0,
                  '&:hover': {
                    marginTop: '-10px',
                    marginLeft: '-10px'
                  },
                }}>
                  <img src="/images/getStarted.png" alt="" />
                </Box>
              </Box>
            </Flex>
        </Box>
    );
});
