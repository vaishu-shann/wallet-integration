import React from 'react'
import "./home.css"
import MetamaskConnect from './Metamask';
import { MoralisProvider } from "react-moralis";
import TrustwalletConnect from './Trustwallet';
import Coinbase from './Coinbase';

const moralisAppId="NyMJsMxLlBaSUzPYYbQXUJ4mUS1zIn3ALPRl4Uv8";
const moralisServerURL="https://ypvfjyze7lom.usemoralis.com:2053/server";

export default function Home () {
    return(
        <>
        <div className='wallet-home'>
            <MetamaskConnect/>
            <MoralisProvider appId={moralisAppId} serverUrl={moralisServerURL}>
				<TrustwalletConnect/>
			</MoralisProvider>
            {/* <Coinbase/> */}
        </div>
        </>
    );
}