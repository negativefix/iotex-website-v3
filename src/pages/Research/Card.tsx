import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { Box, Text, Link } from '@chakra-ui/react';
import BgOne from '@/assets/images/research/card1.png';
import BgTwo from '@/assets/images/research/card2.png';
import BgThree from '@/assets/images/research/card3.png';
import BgFour from '@/assets/images/research/card4.png';

export const Card = observer(
  ({
    title,
    desc,
    langArr = [],
    h
  }: {
    title: string;
    desc: string[];
    langArr?: Array<{ name: string; href: string }>;
    h?: string
  }) => {
    const { lang } = useStore();
    const getBg = () => {
      const cards = [BgOne, BgTwo, BgThree, BgFour];
      return cards[Math.floor(Math.random() * 4)];
    };
    return (
      <Box
        mx="auto"
        css={{
          background:
            'linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          boxShadow: 'inset -1px -1px 0px rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(100px)',
          borderRadius: '20px'
        }}
        _hover={{
          boxShadow: 'none',
          backgroundImage: `url('${getBg()}')`
        }}
      >
        <Box
          h={h|| 400}
          p="2rem 2rem"
          _hover={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '35px' }}
        >
          <Text fontSize="30px" fontWeight="600" lineHeight="39px">
            {title}
          </Text>
          {desc.map((item, index) => (
            <Text key={index} fontSize="18px" lineHeight="24px" pt="4">
              {item}
            </Text>
          ))}
          <Text color="#44FFB2" pt="4">
            <Link isExternal href="#" pr="16">{lang.t('research.readmore')}</Link>
            {langArr.map((lang, index) => {
              return (
                <Link key={index} href={lang.href} isExternal pl="4">
                  {lang.name}
                </Link>
              );
            })}
          </Text>
        </Box>
      </Box>
    );
  }
);
