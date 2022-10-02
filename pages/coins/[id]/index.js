import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Site } from '../../funcs.js';
import { Break } from '../../funcs.js';

export default function Coin() {
    const router = useRouter();
    const { id } = router.query;

    const [coin, setCoin] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (!router.isReady) return;
        fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&sparkline=false`)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                setIsLoading(false);
                setCoin(json);
                
            });


    }, [router.isReady]);
    

    
    if (isLoading == false) return (
        <>
            
            

            <br></br>
            <br></br>
            <div className="row">
                <Break />
                <Site link="../../" text="Home" />
                <Site link="../../about" text="About" />
                <Break />
            </div>
            <div className="box">
                <div className="row">
                    <div className="col-4">
                        <img src={coin && coin["image"]["large"]}></img> 
                    </div>
                    <div className="col  verticalLine">
                        <br></br>
                        <h4><b>Name: {coin && coin["name"]}</b></h4> 
                        <br></br>
                        <br></br>
                        <h4><b>symbol: {coin && coin["symbol"]}</b></h4> 
                        <br></br>
                        <br></br>
                        <h4><b>Released: {coin && coin["genesis_date"]}</b></h4> 
                    </div>
                    <div className="col">
                        <br></br>
                        <h4><b>Market-rank: {coin && coin["coingecko_rank"]}</b></h4> 
                        <br></br>
                        <br></br>
                        <h4><b>ATH: {coin && coin["market_data"]["ath"]["usd"]}$</b></h4> 
                        <br></br>
                        <br></br>
                        <h4><b>Current price: {coin && coin["market_data"]["current_price"]["usd"]}$</b></h4> 
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <h4><b>Description:</b></h4>
                </div>
                <div className="row">
                    <div dangerouslySetInnerHTML={{ __html: coin && coin["description"]["en"] }}/>
                </div>
            </div>
        </>
    )
}
