import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader";
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
  const URL_LOGO = "https://assets.coincap.io/assets/icons"; //moeda@2x.png
  const [coin, setCoin] = useState<Coin | null>(null);
  const { id } = useParams();
  const { data, isLoading } = useGetCoin(id);

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

  if(isLoading || !coin) return <Loader />
  return (
    <main className="w-full">
      <div className="w-full max-w-[1300px] mx-auto p-3">
        <div className="w-full">
          <div className="w-full flex flex-col items-left gap-4 pt-6">
            <h1 className="text-4xl font-bold text-white text-center">
              {coin.name}
            </h1>
            <h1 className="text-4xl font-bold text-white text-center">
              {coin.symbol}
            </h1>
          </div>
          {/* card */}
          <div className="w-[400px] mx-auto flex flex-col bg-black/40 py-6 px-10 rounded-lg shadow-neutral-900
          duration-200 ease-linear mt-6 shadow">
            <img 
              className="w-[80px] h-[80px] object-cover" 
              alt={coin.name} 
              title={coin.name} 
              src={`${URL_LOGO}/${coin.symbol.toLowerCase()}@2x.png`}
            />
            <div className="mt-3">
              <h2 className="text-3xl font-bold text-white">
                {coin.name} | {coin.symbol}
              </h2>
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <p className="text-white flex items-center gap-4">
                <span className="font-bold">Preço:</span>
                {coin.priceUsdFormated}
              </p>
              <p className="text-white flex items-center gap-4">
                <span className="font-bold">Mercado:</span>
                {coin.marketCapFormated}
              </p>
              <p className="text-white flex items-center gap-4">
                <span className="font-bold">Volume:</span>
                {coin.volumeUsd24HrFormated}
              </p>
              <p className="text-rose-700 flex items-center gap-4">
                <span className="font-bold text-white">Mudança 24h:</span>
                {Number(coin.changePercent24Hr).toFixed(3)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Detail;