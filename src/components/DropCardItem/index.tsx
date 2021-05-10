import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';


interface ComponentsProps {
  icon: string;
  title: string;
  desc: string
}

export const DropCard = observer(({icon, title, desc} : ComponentsProps) => {
    return (
      <Box w="100%" p="1.25rem" pb="0" borderBottom="1px" borderRight="1px" borderColor="borderColor" css={{
        background: 'linear-gradient(147.16deg, rgba(255, 255, 255, 0.05) 14.71%, rgba(255, 255, 255, 0) 114.16%)',
        transition: 'height 0.3s',
        height: '170px',
        overflow: 'hidden',
        '&:hover': {
          height: "337px",
          background: 'url(/images/bg_tab.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        }
      }}>
        <Image
          boxSize="4rem"
          objectFit="cover"
          src={icon}
          alt={title}
          mb="1.25rem"
        />
        <Text fontSize="1.25rem" color="grayColor" fontWeight="bold" lineHeight="3.25rem">{title}</Text>
        <Text fontSize="1.125rem" className="desc" color="white" fontWeight="medium" mt="0.875rem" lineHeight="1.75rem" pb="3.375rem">{desc}</Text>
      </Box>
    );
});
