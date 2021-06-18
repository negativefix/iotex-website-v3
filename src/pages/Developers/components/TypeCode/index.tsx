import React from 'react';
import { Box } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import Typewriter from 'typewriter-effect';

export const TypeCode = observer(() => {

    return (
      <Box fontSize="12px" fontWeight="normal" fontFamily="Noto Sans" w="100%" h="100%" overflow="auto">
        <Typewriter
          options={{
            loop: true,
            cursor: '  ▎',
            delay: 20
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("<span style='color: rgba(52, 217, 255, 0.85)'>const</span> BigN = require(<span style='color: #44FFB2'>'big.js'</span>);<br/>")
              .typeString("<span style='color: rgba(52, 217, 255, 0.85)'>const</span> Web3 = require(<span style='color: #44FFB2'>'web3'</span>);<br/> ")
              .typeString("<br />")
              .typeString("<span style='color: #999'>// Set the IoTeX Web3 Endpoint for Testnet </span> <br/> ")
              .typeString('<span style="color: rgba(52, 217, 255, 0.85)">const</span> Endpoint = <span style="color: #44FFB2;text-decoration: underline;">"https://babel-api.testnet.iotex.io"</span>;<br/> ')
              .typeString('<span style="color: #999">// Create the Web3 Provider </span> <br/> ')
              .typeString('<span style="color: rgba(52, 217, 255, 0.85)">const</span> TestnetProvider = new Web3.providers.HttpProvider(Endpoint); <br/> ')
              .typeString('<span style="color: #999">// Initialize Web3js </span> <br/> ')
              .typeString('<span style="color: rgba(52, 217, 255, 0.85)">const</span> web3 = <span style="color: rgba(52, 217, 255, 0.85)">new</span> Web3(TestnetProvider); <br/> ')
              .typeString("<br />")
              .typeString('<span style="color: #999">// Query the balance of an IoTeX address </span>  <br/> ')
              .typeString('<span style="color: rgba(52, 217, 255, 0.85)">const</span> address = <span style="color: #44FFB2">"0x009EA04f3dda1b0C847c9C7307638d4287c9C2B6"</span> <br/> ')
              .typeString('web3.eth.getBalance(address).then( <br/> ')
              .typeString('&nbsp;&nbsp;<span style="color: rgba(52, 217, 255, 0.85)">function</span> (balance) { <br/> ')
              .typeString('&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgba(52, 217, 255, 0.85)">let</span> iotxBalance = Big(balance).div(10**18); <br/> ')
              .typeString('&nbsp;&nbsp;&nbsp;&nbsp;console.log("Balance of %s is %s IOTX", address, iotxBalance.toFixed(18)) <br/> ')
              .typeString('}); ')
              .pauseFor(5000)
              .start();
          }}
        />
        
      </Box>
    );
});
