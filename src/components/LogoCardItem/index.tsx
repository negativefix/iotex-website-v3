import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';


interface ComponentsProps {
  item: any;
  width: string;
  height: string
}

export const LogoCardItem = observer(({item, width, height} : ComponentsProps) => {
    return (
      <Flex key={item.icon} w={width} h={height} justifyContent="center" alignItems="center" css={{
        background: 'linear-gradient(147.16deg, rgba(255, 255, 255, 0.2) 14.71%, rgba(255, 255, 255, 0) 114.16%)',
        mixBlendMode: 'normal',
        borderRadius: '10px',
        transition: 'background 0.6s',
        '&:hover': {
          backgroundColor: '#fff',
          img: {
            content: `url(${item.iocn_active})`
          }
        }
    }}>
      <img style={{width: '60%'}} src={item.icon} alt="" />
    </Flex>
    );
});
