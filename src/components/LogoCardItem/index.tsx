import React from 'react';
import { Flex } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';


interface ComponentsProps {
  item: any;
  width: string;
  height: string
}

export const LogoCardItem = observer(({item, width, height} : ComponentsProps) => {
    return (
      <Flex key={item.icon} w={width} h={height} justifyContent="center" alignItems="center" css={{
        background: 'linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)',
        boxShadow: 'inset -1px -1px 0px rgb(255 255 255 / 25%)',
        mixBlendMode: 'normal',
        backdropFilter: 'blur(50px)',
        borderRadius: '20px',
        transition: 'all 0.6s linear',
        img: {
          width: '60%'
        },
        '&:hover': {
          background: '#fff',
          img: {
            content: `url(${item.iocn_active})`,
            width: '60%'
          }
        }
    }}>
      <img src={item.icon} alt="" />
    </Flex>
    );
});
