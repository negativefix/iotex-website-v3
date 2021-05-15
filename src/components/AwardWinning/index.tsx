import React from 'react';
import { Box, Flex, Text  } from '@chakra-ui/react';
import { useStore } from '../../store';
import { LogoCardItem } from "../LogoCardItem/index"
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
      <Box maxWidth="1554px" mx="auto">
        <Flex justifyContent="space-between">
            <Flex flexWrap="wrap" maxWidth="50%" justifyContent="space-between"  alignContent="space-between">
              {
                logos.map(item => {
                  return <LogoCardItem item={item} width="47%" height="8.75rem" />
                })
              }
            </Flex>
            <Box maxWidth={{base: '45%', "2xl": "35%"}}>
              <Text fontSize="1.25rem">{lang.t("backed.by")}</Text>
              <Text fontSize="4rem" fontWeight="semibold" lineHeight="5.5rem">{lang.t("award.winning")}</Text>
              <Text fontSize="1.125rem" fontWeight="medium" lineHeight="2.25rem" mb="2.875rem">{lang.t("award.winning.content")}</Text>
              <Box bg="btnBgColor" borderRadius="10px" maxWidth="448px" px="1rem"  py="1.6rem" cursor="pointer">
                <Text fontSize="1.75rem" color="btnTextColor" fontWeight="extrabold" textAlign="center">{lang.t("award.winning.btn")}</Text>
              </Box>
            </Box>
        </Flex>
      </Box>
    );
});
