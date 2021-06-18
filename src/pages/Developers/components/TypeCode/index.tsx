import React from 'react';
import { Box } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import Typewriter from 'typewriter-effect';

export const TypeCode = observer(() => {

  

    return (
      <Box fontSize={{base: "10px", md: "16px", lg: "12px", xl: "14px",  "2xl": "16px"}} transform={{base: "scale(0.9)", md: "scale(1)", lg: "scale(0.9)", xl: "scale(1)"}} lineHeight={{base: "18px", md: "20px", "2xl": "24px"}} fontWeight="medium" fontFamily="Noto Sans" w="100%" h="100%">
        <Typewriter
          options={{
            loop: false,
            cursor: '  ▌',
            delay: 5
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(500)
              .typeString("<span style='color: #D87EF4'>const</span> <span style='color: #F9AC6E;'>BigN</span> = <span style='color: #6AABE9;'>require</span>(<span style='color: #0BDAD6'>'big.js'</span>);<br/>")
              .typeString("<span style='color: #D87EF4'>const</span> <span style='color: #F9AC6E;'>Web3</span> = <span style='color: #6AABE9;'>require</span>(<span style='color: #0BDAD6'>'web3'</span>);<br/> ")
              .typeString("<br />")
              .pauseFor(500)
              .typeString("<span style='color: #78808F'>// Set the IoTeX Web3 Endpoint for Testnet </span> <br/> ")
              .typeString('<span style="color: #D87EF4">const</span> <span style="color: #F9AC6E;">Endpoint</span> = <span style="color: #0BDAD6;text-decoration: underline;">"https://babel-api.testnet.iotex.io"</span>;<br/> ')
              .typeString("<br />")
              .pauseFor(500)
              .typeString('<span style="color: #78808F">// Create the Web3 Provider </span> <br/> ')
              .typeString('<span style="color: #D87EF4">const</span> <span style="color: #F9AC6E;">TestnetProvider</span> = <span style="color: #D87EF4">new</span> <span style="color: #CCCCCC;">Web3</span>.<span style="color: #DB7178;">providers</span>.<span style="color: #6AABE9;">HttpProvider</span>(<span style="color: #CCCCCC;">Endpoint</span>); <br/> ')
              .typeString("<br />")
              .pauseFor(500)
              .typeString('<span style="color: #78808F">// Initialize Web3js </span> <br/> ')
              .typeString('<span style="color: #D87EF4">const</span> <span style="color: #F9AC6E;">web3</span> = <span style="color: #D87EF4">new</span> <span style="color: #CCCCCC;">Web3</span>(<span style="color: #CCCCCC;">TestnetProvider</span>); ')
              // .typeString('<span style="color: #78808F">// Query the balance of an IoTeX address </span>  <br/> ')
              // .typeString('<span style="color: rgba(52, 217, 255, 0.85)">const</span> address = <span style="color: #44FFB2">"0x009EA04f3dda1b0C847c9C7307638d4287c9C2B6"</span> <br/> ')
              // .typeString('web3.eth.getBalance(address).then( <br/> ')
              // .typeString('&nbsp;&nbsp;<span style="color: rgba(52, 217, 255, 0.85)">function</span> (balance) { <br/> ')
              // .typeString('&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgba(52, 217, 255, 0.85)">let</span> iotxBalance = Big(balance).div(10**18); <br/> ')
              // .typeString('&nbsp;&nbsp;&nbsp;&nbsp;console.log("Balance of %s is %s IOTX", address, iotxBalance.toFixed(18)) <br/> ')
              // .typeString('}); ')
              // .pauseFor(5000)
              .start();
          }}
        />
        
      </Box>
    );
});
