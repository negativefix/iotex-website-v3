import React from 'react';
import { Box, Flex, Text  } from '@chakra-ui/react';
import { useStore } from '../../store';
import { LogoCardItem } from "../LogoCardItem/index"
import { Button } from "../Button/index"
import { observer } from 'mobx-react-lite';

export const AwardWinning = observer(() => {
  const { lang } = useStore();
  
  const logos = [
    {icon: '/images/icon-logo1.png', iocn_active: '/images/icon-logo1_s.png'},
    {icon: '/images/icon-logo2.png', iocn_active: '/images/icon-logo2_s.png'},
    {icon: '/images/icon-logo3.png', iocn_active: '/images/icon-logo3_s.png'},
    {icon: '/images/icon-logo4.png', iocn_active: '/images/icon-logo4_s.png'},
  ]

    return (
      <Box mx="auto">
        <Flex justifyContent="space-between" flexDirection={{base: "column", lg: "row"}}>
            <Flex flexWrap="wrap" maxWidth={{base: "100%", lg: "50%"}} justifyContent="space-between">
              {
                logos.map((item, index) => {
                  return <Box key={index} width="47%" mb={{base: "1rem", md: "2rem", lg: "2rem", "2xl": "3rem"}} h={{base: "15vw", lg: "48%", xl: "10rem","2xl": "45%"}}>
                    <LogoCardItem item={item} width="100%" height="100%" />
                  </Box>
                })
              }
            </Flex>
            <Box maxWidth={{base: '100%', lg: "42%"}} mt={{base: '2rem', lg: 0}}>
              <Text fontSize={{base: "0.75rem", md: "1.25rem"}} mb={{base: "0.5rem", md: "0", "2xl": "0.4rem"}}>{lang.t("backed.by")}</Text>
              <Text fontSize={{base: "1rem", md: "1.875rem", lg: "2rem", xl: "3rem", "2xl": "3rem"}} mb={{base: "0.5rem", xl: "0.5rem"}} fontWeight="semibold">{lang.t("award.winning")}</Text>
              <Text fontSize={{base: "0.875rem", md: "1.25rem"}} fontWeight="medium" opacity="0.85" mb={{base: "2rem", xl: "2.875rem"}}>{lang.t("award.winning.content")}</Text>
              <Button 
                href="https://iotex.io/research" 
                name={lang.t("award.winning.btn")} 
                size={{base: "100%", xl: "80%", "2xl": "70%"}}
              />
            </Box>
        </Flex>
      </Box>
    );
});
