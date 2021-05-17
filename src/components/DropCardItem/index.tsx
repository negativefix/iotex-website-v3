import React, {useState} from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { observer, useLocalStore } from 'mobx-react-lite';


interface ComponentsProps {
  icon: string;
  title: string;
  desc: string;
  index: number;
  hoverIndex: number;
  changeHoverIndex: Function;
}

export const DropCard = observer(({index, icon, title, desc, hoverIndex, changeHoverIndex} : ComponentsProps) => {

    return (
      <Box key={title} w="100%" cursor="pointer" 
      borderRight={index === 3 ? '1px' : '0'} 
      pb="0" borderBottom="1px" borderColor="borderColor" 
      css={hoverIndex === index ? {
        height: "337px",
        background: 'url(/images/bg_tab.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        border: 'none'
      } : {
        background: 'linear-gradient(147.16deg, rgba(255, 255, 255, 0.05) 14.71%, rgba(255, 255, 255, 0) 114.16%)',
        transition: 'height 0.8s',
        height: '170px',
        overflow: 'hidden',
        '&:hover': {
          height: "337px",
          background: 'url(/images/bg_tab.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          borderColor: 'transparent'
        }
      }}
      onMouseOver={() => changeHoverIndex()}>
        <Box borderLeft="1px" borderColor="borderColor"  p="1.25rem" css={{'&:hover': { borderColor: 'transparent'}}}>
          <Image
            boxSize="4rem"
            objectFit="cover"
            src={icon}
            alt={title}
            mb="1.25rem"
          />
          <Text fontSize="1.25rem" color="grayColor" fontWeight="bold" lineHeight="3.25rem">{title}</Text>
        </Box>
        <Text fontSize="1.125rem" className="desc" color="white"
        borderLeft="1px" borderColor="transparent"  px="1.25rem"
        fontWeight="medium" mt="0.875rem" lineHeight="1.75rem" pb="3.375rem">{desc}</Text>
      </Box>
    );
});
