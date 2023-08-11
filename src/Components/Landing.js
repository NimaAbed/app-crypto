import React,{ useEffect , useState } from 'react';

import styles from "./Landing.module.css"

import { getCoin } from '../Services/api';
import Loding from './Loding';
import Coin from './Coin';

const Landing = () => {

    const [coins,setCoins]=useState([])
    const [search,setSearch]=useState("")

    useEffect(()=>{
        const fetchApi = async ()=>{
            const data = await getCoin()
            console.log(data)
            setCoins(data)

        }

        fetchApi()
    },[])



    const searchHandler = (evt)=>{
        setSearch(evt.target.value)
    }

    const searchFind = coins.filter(coin=> coin.name.toLowerCase().includes(search))


    return (
        <div className={styles.container}>
            <input className={styles.search} type='text' placeholder='Search...' value={search} onChange={searchHandler} />
            <div className={styles.coin}>
            {
                coins.length >0 ?
                searchFind.map(coin => <Coin 
                    key={coin.id}
                    symbol={coin.symbol} 
                    name={coin.name}
                    image={coin.image}
                    price={coin.current_price}
                    marketCap={coin.market_cap}
                    change={coin.price_change_percentage_24h}
                    />):<Loding />
            }
            </div>
        </div>
    );
};

export default Landing;