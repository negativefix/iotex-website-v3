import React from 'react';
import { Box, Flex, Text  } from '@chakra-ui/react';
import { useStore } from '../../../../store';
import { LogoCardItem } from "../../../../components/LogoCardItem/index"
import { Button } from "../../../../components/Button/index"
import { observer } from 'mobx-react-lite';

export const AwardWinning = observer(() => {
  const { lang } = useStore();
  
  const logos = [
    {icon: '/images/icon-logo1.png', iocn_active: '/images/icon-logo1_s.png', href: "https://medium.com/iotex/iotex-amazon-and-huawei-selected-as-co-chairs-of-the-iic-blockchain-task-group-9032b7b7443f"},
    {icon: '/images/icon-logo2.png', iocn_active: '/images/icon-logo2_s.png', href: "https://www.prweb.com/releases/ieee_blockchain_iot_standards_working_group_appoints_iotex_head_of_cryptography_as_vice_chair/prweb17921245.htm"},
    {icon: '/images/icon-logo3.png', iocn_active: '/images/icon-logo3_s.png', href: "https://www.coindesk.com/facebook-iotex-and-r3-among-new-members-of-confidential-computing-consortium"},
    {icon: '/images/icon-logo4.png', iocn_active: '/images/icon-logo4_s.png', href: "https://medium.com/iotex/iotex-joins-executive-committee-of-china-mobile-iot-alliance-unveils-new-enterprise-iot-solutions-b6a8b6183afd#:~:text=As%20the%20only%20public%20blockchain%20in%20the%20China%20Mobile%20IoT,upon%20innovative%20blockchain%20%2B%20IoT%20solutions"},
  ]

    return (
      <Box mx="auto">
        <Flex justifyContent="space-between" flexDirection={{base: "column", lg: "row"}}> 
            <Flex flexWrap="wrap" maxWidth={{base: "100%", lg: "50%"}} justifyContent="space-between" alignItems="stretch">
              {
                logos.map((item) => {
                  return <Box key={item.icon} width="47%" mb={{base: "1rem", md: "2rem", lg: "2rem", "2xl": "3rem"}} h={{base: "max-content", lg: "48%", xl: "10rem","2xl": "45%"}}>
                    <a href={item.href} target="blank">
                      <LogoCardItem item={item} width="100%" height="100%" />
                    </a>
                  </Box>
                })
              }
            </Flex>
            <Box maxWidth={{base: '100%', lg: "42%"}} mt={{base: '2rem', lg: 0}}>
              <Text fontSize={{base: "0.75rem", md: "1.25rem"}} mb={{base: "0.5rem", md: "0", "2xl": "0.4rem"}}>{lang.t("backed.by")}</Text>
              <Text fontSize={{base: "1.25rem", md: "1.875rem", lg: "2rem", xl: "3rem", "2xl": "3rem"}} mb={{base: "0.5rem", xl: "0.5rem"}} fontWeight="semibold">{lang.t("award.winning")}</Text>
              <Text fontSize={{base: "0.875rem", md: "1.25rem"}} fontWeight="medium" opacity="0.85" mb={{base: "2rem", xl: "2.875rem"}}>{lang.t("award.winning.content")}</Text>
              <Button 
                href="/research" 
                name={lang.t("award.winning.btn")} 
                size={{base: "100%", xl: "80%", "2xl": "70%"}}
              />
            </Box>
        </Flex>
      </Box>
    );
});
