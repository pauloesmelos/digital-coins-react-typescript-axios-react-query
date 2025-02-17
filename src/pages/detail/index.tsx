import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useGetCoin from "../../hooks/useGetCoin";

interface Coin {
  id: string,
  rank: string,
  symbol: string,
  name: string,
  supply: string,
  maxSupply: string,
  marketCapUsd: string,
  volumeUsd24Hr: string,
  priceUsd: string,
  changePercent24Hr: string,
  vwap24Hr: string,
  explorer: string,
  priceUsdFormated?: string,
  marketCapFormated?: string,
  volumeUsd24HrFormated?: string
}

const Detail = () => {
  const [coin, setCoin] = useState<Coin | null>(null);
  const { id } = useParams();
  const { data } = useGetCoin(id);
  const navigate = useNavigate();

  useEffect(() => {
    if(data) {
      const coinData = data.data;
      const coinFormated = {
        ...coinData,
        priceUsdFormated: Number(coinData.priceUsd).toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        }),
        marketCapFormated: Number(coinData.marketCapUsd).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          notation: "compact"
        }),
        volumeUsd24HrFormated: Number(coinData.volumeUsd24Hr).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          notation: "compact"
        })
      }
      setCoin(coinFormated);
    }
  }, [data]);

  //if(!data) return <h1 className="text-3xl font-bold text-white">Não há detalhes para ser exibido</h1>
  return (
    <main className="w-full">
      <div className="w-full max-w-[1300px] mx-auto p-3">
        <div className="w-full">

        </div>
      </div>
    </main>
  )
}

export default Detail;