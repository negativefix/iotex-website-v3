import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';


interface ComponentsProps {
  icon: string;
  title: string;
  desc: string
}

export const DropLinkItem = observer(({icon, title, desc} : ComponentsProps) => {
  const { lang } = useStore();
    return (
      <Box w="100%" h={{base: "32%", lg: "180px", xl: "170px"}} py={{base: "0.5rem", lg:"1.25rem"}} pb="0" maxWidth="329px" css={{
        overflow: 'hidden',
        transition: 'height 0.8s',
        '&:hover': {
          height: "340px",
        }
      }}>
        <Image
          boxSize={{base: "2rem", lg: "4rem"}}
          objectFit="cover"
          src={icon}
          alt={title}
          mb="1.25rem"
        />
        <Text fontSize={{base: "1rem", lg: "1.75rem"}} fontWeight="semibold">{title}</Text>
        <Text fontSize={{base: "0.875rem", lg: "1.125rem"}} color="white" fontWeight="medium" mt={{base: "1rem", lg: "1.8rem"}} mb={{base: "1rem", lg: "2rem"}}>{desc}</Text>
        <a href="" target="_blank">
          <Text fontSize={{base: "0.875rem", lg: "1.125rem"}} color="brandColor" lineHeight="1.275rem">{lang.t("stake.now")} &gt;&gt;</Text>
        </a>
      </Box>
    );
});
