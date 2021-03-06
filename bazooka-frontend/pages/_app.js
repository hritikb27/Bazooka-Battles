import Layout from '../components/Layout'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { MoralisProvider } from "react-moralis";
import {createContext, useState} from 'react';

const storeContext = createContext();

export {storeContext};

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [userNfts, setUserNfts] = useState([{ name: 'name', tokenAddress: 'address', image: 'result' }]);
  const [battlesPaused, setBattlesPaused] = useState(false);
  const [userData, setUserData] = useState(['hritik','dvcs']);
  console.log(pathname)

  if (pathname == '/' || pathname == '/createProfile') return (<MoralisProvider serverUrl="https://jcztwovkb6hu.usemoralis.com:2053/server" appId="S0Oh1TScjaAs1joJ3DEsSL4KHPJfHj8fLdqb4cY7">
    <storeContext.Provider value={{userNfts, setUserNfts, battlesPaused, setBattlesPaused, userData, setUserData}}>
      <Component {...pageProps} />
    </storeContext.Provider>
  </MoralisProvider>)

  else return (<MoralisProvider serverUrl="https://jcztwovkb6hu.usemoralis.com:2053/server" appId="S0Oh1TScjaAs1joJ3DEsSL4KHPJfHj8fLdqb4cY7">
    <storeContext.Provider value={{userNfts, setUserNfts, battlesPaused, setBattlesPaused, userData, setUserData}}><Layout userData={userData}><Component {...pageProps} /></Layout></storeContext.Provider>
  </MoralisProvider>)
}

export default MyApp
