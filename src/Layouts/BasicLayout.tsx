import React from 'react';
import { Box } from "@chakra-ui/react"
import { Header } from '@/components/Header/index';
import {globalStyle } from '../lib/globalStyle'

const BasicLayout = ({children}) => {
    globalStyle()
    return (
    <Box bg="bgColor" css={{
      overflowX: 'hidden',
      '&::-webkit-scrollbar': {
        width: 5,
        height: 1
      }
    }}>
        <Header />
        {children}
    </Box>
  )
}

export default BasicLayout
