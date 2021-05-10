import React from 'react';
import { Box, Flex, Text  } from '@chakra-ui/react';
import { useStore } from '../../store';
import { Link } from "@chakra-ui/react"
import { observer } from 'mobx-react-lite';

export const AwardWinning = observer(() => {
  const { lang } = useStore();

    return (
      <Box maxWidth="1554px" mx="auto">
        <Flex justifyContent="space-between">
            <Flex flexWrap="wrap" maxWidth="50%" justifyContent="space-between"  alignContent="space-between">
              {
                [1, 2, 3, 4].map(item => {
                  return <Flex key={item} w="46%" h="48%" maxHeight="140px" justifyContent="center" alignItems="center" css={{
                      background: 'linear-gradient(147.16deg, rgba(255, 255, 255, 0.2) 14.71%, rgba(255, 255, 255, 0) 114.16%)',
                      mixBlendMode: 'normal',
                      borderRadius: '1.125rem',
                      '&:hover': {
                        backgroundColor: '#fff',
                        img: {
                          content: `url(/images/icon-logo${item}_s.png)`
                        }
                      }
                  }}>
                    <img style={{width: '60%'}} src={`/images/icon-logo${item}.png`} alt="" />
                  </Flex>
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
