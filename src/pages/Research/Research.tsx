import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import BasicLayout from '../../Layouts/BasicLayout';
import { Footer } from '@/components/Footer/index';
import { Flex, Box, Text, Image, Grid, GridItem } from '@chakra-ui/react';
import researchTopImg from '@/assets/images/research/ing_research_top.png';
import bgTwo from '@/assets/images/research/ing_research_2.png';
import bgThree from '@/assets/images/research/bg.png';
import { Card } from './Card';

export const Research = observer(() => {
  const { lang } = useStore();

  return (
    <BasicLayout>
      <Image
        css={{
          position: 'absolute',
          top: '1950px',
          right: '0'
        }}
        src={bgTwo}
      />
      <Image
        css={{
          position: 'absolute',
          top: '2800px',
          left: '100px'
        }}
        src={bgThree}
      />
      <Box
        css={{
          backgroundImage: `url('${researchTopImg}')`,
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Box
          pt={{ base: '8rem', md: '10rem', lg: '12rem', xl: '13rem', '2xl': '22.875rem' }}
          pb={{ base: '5rem', md: '5rem', lg: '6rem', xl: '8rem', '2xl': '13rem' }}
        >
          <Flex
            alignItems="center"
            justifyContent="flex-end"
            direction="column"
            w="100%"
            h="100%"
            maxWidth={{ base: '90%', lg: '80%', '2xl': '1554px' }}
            mx="auto"
          >
            <Text
              fontSize={{ base: '2.25rem', sm: '2.5rem', lg: '2.5rem', xl: '4rem', '2xl': '5rem' }}
              mb={{ base: '1rem', md: '1.875rem', '2xl': '2.875rem' }}
              textAlign={{ base: 'center', sm: 'left' }}
              fontWeight="semibold"
              whiteSpace={{ base: 'inherit', md: 'pre-line' }}
            >
              {lang.t('research.title')}
            </Text>
            <Text
              fontSize={{
                base: '0.75rem',
                sm: '1rem',
                lg: '1.25rem',
                xl: '1.5rem',
                '2xl': '1.75rem'
              }}
              opacity="0.85"
              width={{ base: '90%', lg: '80%', xl: '81%', '2xl': '70%' }}
              fontWeight="medium"
              textAlign="center"
            >
              {lang.t('research.subtitle')}
            </Text>
          </Flex>
        </Box>
      </Box>

      <Box
        maxWidth={{ base: '90%', lg: '90%', '2xl': '1554px' }}
        mx="auto"
        mt={{ base: '5rem', lg: '-4rem' }}
        mb="35rem"
        p="2rem 2rem"
      >
        <Grid
          height="2400"
          templateRows="repeat(5, 1fr)"
          templateColumns="repeat(10, 1fr)"
          rowGap={20}
          columnGap={4}
        >
          <GridItem rowSpan={1} colSpan={6}>
            <Card
              h="436"
              title={lang.t('research.white.pager.title')}
              desc={[lang.t('research.white.pager.desc'), lang.t('research.white.pager.desc2')]}
              langArr={[
                { name: 'RU', href: '#' },
                { name: 'ZH', href: '#' },
                { name: 'KO', href: '#' },
                { name: 'IT', href: '#' },
                { name: 'PT', href: '#' }
              ]}
            />
          </GridItem>
          <GridItem rowSpan={1} colSpan={4} gridRowGap={0}>
            <Card
              h="436"
              title={lang.t('research.yellow.pager.title')}
              desc={[lang.t('research.yellow.pager.desc'), lang.t('research.yellow.pager.desc2')]}
            />
          </GridItem>

          <GridItem h="410" rowSpan={1} colSpan={4}></GridItem>
          <GridItem rowSpan={1} colSpan={6}>
            <Card
              h="410"
              title={lang.t('research.framework.title')}
              desc={[lang.t('research.framework.desc'), lang.t('research.framework.desc2')]}
            />
          </GridItem>

          <GridItem rowSpan={1} colSpan={4}>
            <Card
              h="500"
              title={lang.t('research.iot.title')}
              desc={[lang.t('research.iot.desc'), lang.t('research.iot.desc2')]}
            />
          </GridItem>
          <GridItem rowSpan={1} colSpan={6}>
            <Card
              h="500"
              title={lang.t('research.signature.title')}
              desc={[lang.t('research.signature.desc'), lang.t('research.signature.desc2')]}
            />
          </GridItem>

          <GridItem rowSpan={1} colSpan={6}>
            <Card
              h="470"
              title={lang.t('research.support.title')}
              desc={[lang.t('research.support.desc'), lang.t('research.support.desc2')]}
            />
          </GridItem>
          <GridItem h="470" rowSpan={1} colSpan={4}></GridItem>

          <GridItem rowSpan={1} colSpan={4}>
            <Card
              h="600"
              title={lang.t('research.ucam.title')}
              desc={[lang.t('research.ucam.desc'), lang.t('research.ucam.desc2')]}
            />
          </GridItem>
          <GridItem rowSpan={1} colSpan={6}>
            <Card
              h="600"
              title={lang.t('research.auth.title')}
              desc={[
                lang.t('research.auth.desc'),
                lang.t('research.auth.desc2'),
                lang.t('research.auth.desc3')
              ]}
            />
          </GridItem>
        </Grid>
      </Box>

      <Footer />
    </BasicLayout>
  );
});
