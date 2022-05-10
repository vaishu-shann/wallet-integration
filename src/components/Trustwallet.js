import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { useNavigate } from "react-router-dom";
import "./home.css"

export default function TrustwalletConnect(){
    const navigate = useNavigate();
	const {
		authenticate,
		isWeb3Enabled,
		isAuthenticated,
		user,
		enableWeb3,
	} = useMoralis();

    

  async function authWalletConnect() {
    const user =await authenticate({
      provider: "walletconnect",
      chainId: 56,
      // mobileLinks: [
      //   "metamask",
      //   "trust",
      //   "rainbow",
      //   "argent",
      //   "imtoken",
      //   "pillar",
      // ],
      signingMessage: "Welcome!",
    });
    console.log(user);
   
  }

  useEffect(() => {
    if (!isWeb3Enabled && isAuthenticated) {
      enableWeb3({ provider: "walletconnect", chainId: 56 });
     
      console.log("web3 activated");
      
    }
  }, [isWeb3Enabled, isAuthenticated, enableWeb3]);

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
      
    }
  });
  if (!isAuthenticated && !user) {	} 

    return(
        <><button  className='trustwallet' style={{marginTop:"25px"}} onClick={()=>authWalletConnect}>
        <span className='trust-span'>
  Trustwallet
        </span>
    </button>
        </>
    );
}