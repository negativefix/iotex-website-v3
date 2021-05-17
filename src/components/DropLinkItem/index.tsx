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
      <Box w="100%" p="1.25rem" pb="0" maxWidth="329px" css={{
        height: '170px',
        overflow: 'hidden',
        transition: 'height 0.8s',
        '&:hover': {
          height: "340px",
        }
      }}>
        <Image
          boxSize="4rem"
          objectFit="cover"
          src={icon}
          alt={title}
          mb="1.25rem"
        />
        <Text fontSize="1.75rem" fontWeight="semibold" lineHeight="2.125rem">{title}</Text>
        <Text fontSize="1.125rem" color="white" fontWeight="medium" mt="1.8rem" mb="2rem" lineHeight="1.75rem">{desc}</Text>
        <a href="" target="_blank">
          <Text fontSize="1.125rem" color="brandColor" lineHeight="1.275rem">{lang.t("stake.now")} &gt;&gt;</Text>
        </a>
      </Box>
    );
});
