import react, { useContext } from "react";
import { Link } from "react-router-dom";
import { useEthers, useEtherBalance } from "@usedapp/core";


const Header = () => {

    const {activateBrowserWallet, account} = useEthers();
    const etherBalance = useEtherBalance(account);

    const handleWallet = () => {
      activateBrowserWallet();

    }

    return (
        <div id="header">
          <Link to='/' id='logo'>
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt='OpenChatbot logo' style={{ width: '12px', height: '12px' }} />
            OpenChatbot
          </Link>
        <div id="link-containers">
          <a>Start Chatting</a>
          <a>Create Your Chatbot</a>
          <a>Community</a>
          <a>Craft NFT</a>

          <button id="connect-wallet" onClick={handleWallet} >{!account ? 'Connect Wallet' : account}</button>
        </div>
      </div>
    );
}

export default Header;