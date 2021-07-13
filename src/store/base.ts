import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { BigNumberState } from './standard/BigNumberState';
import BigNumber from 'bignumber.js';

export interface ISupply {
  totalSupply: string;
  totalCirculatingSupply: string;
}


export class BaseStore {
  constructor() {
    makeAutoObservable(this);
  }
  coingeckoUrl =  'https://api.coingecko.com/api/v3/coins/iotex'
  iotexscanUrl = 'https://iotexscan.io/api/circulating-supply'
  marketCap: number = 0;
  totalSupply = new BigNumberState({})
  tokenPrice: number = 0;
  async init() {
    const res = await axios.get(this.coingeckoUrl);
    if (res.data) {
      console.log(res.data)
      this.marketCap = res.data.market_data.market_cap.usd
      this.tokenPrice = res.data.market_data.current_price.usd
    }
    this.fetchSupply().then(res => {
      console.log(new BigNumber(res.totalSupply))
      this.totalSupply.setValue(new BigNumber(res.totalSupply))
    })
  }

  fetchSupply = async (): Promise<ISupply> => {
    const result = await fetch("https://analytics.iotexscan.io/query", {
      headers: {
        accept: "*/*",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        operationName: null,
        variables: {},
        query: `query {
          chain {
              totalSupply
              totalCirculatingSupply
            }
        }`
      }),
      method: "POST"
    });
    const jsonResult = await result.json();
    return jsonResult && jsonResult.data && jsonResult.data.chain;
  };
}
