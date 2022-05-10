import { useState } from "react";
// import Dashboard from "./Dashboard/dashboard";
import "./home.css"
import {useNavigate} from "react-router-dom";

async function getAccount() {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const account = accounts[0];

  return account;
}

export default function MetamaskConnect() {
    const navigate = useNavigate();
  const [accountAddress, setAccountAddress] = useState("");

  const connectButtonOnClick = () => {
    console.log(window);
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      getAccount().then((response) => {
        setAccountAddress(response);
             navigate('/dashboard');
      });
    } else {
      console.log("error");
    }
  };

  return (
    <button  className='metamask' style={{marginTop:"150px"}} onClick={connectButtonOnClick}>
        <span className='meta-span'>
        {!!accountAddress ? "" : "Metamask"}
        </span>
    </button>
  );
}