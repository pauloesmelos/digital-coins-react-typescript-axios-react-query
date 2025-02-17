import { Link } from "react-router-dom";
import useGetCoins from "../../hooks/useGetCoins";
import { useState, useEffect, useReducer } from "react";
import Loader from "../loader";

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
    marketCapFormated?: string,
    priceUsdFormated?: string,
    volumeUsd24HrFormated?: string
  }
  interface State {
    limit: number
  }
  interface Action {
    payload: number
  }

  const handleReducer = (state: State, action: Action) => { //action: type and payload
    if(state && action) {
        return {
            limit: action.payload += 5
        }
    }
    else return state
  }

const Table = () => {
  const URL_LOGO = "https://assets.coincap.io/assets/icons"; //moeda@2x.png
  const offset = "0";
  const [coins, setCoins] = useState<Array<Coin>>([]);
  const [state, dispatch] = useReducer(handleReducer, {
    limit: 10
  });
  const { data } = useGetCoins(`${state.limit}`, offset);

  useEffect(() => {
    if(data) {
        const coinsData = data.data;
        const coinsFormated = coinsData.map((coin) => {
            return {
                ...coin,
                priceUsdFormated: Number(coin.priceUsd).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD"
                }),
                marketCapFormated: Number(coin.marketCapUsd).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  notation: "compact"
                }),
                volumeUsd24HrFormated: Number(coin.volumeUsd24Hr).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  notation: "compact"
                })
            }
        });
        // pegando e juntando as coisas após clique no botão "carregar mais"
        setCoins(coinsFormated);
    }
  }, [data]);

  if(!data) return <Loader />
  return (
    <div className="pt-10">
      <table className="border-collapse table-fixed w-full">
        <thead className="text-white">
            <tr>
                <th scope="col">
                    Moeda
                </th>
                <th scope="col">
                    Valor mercado
                </th>
                <th scope="col">
                    Preço
                </th>
                <th scope="col">
                    Volume
                </th>
                <th scope="col">
                    Mudança 24 hrs
                </th>
            </tr>
        </thead>
        <tbody className="text-neutral-400">
            {coins.map((coin, index) => (
                <tr key={coin.id + index} className="font-bold odd:bg-neutral-700/50 hover:bg-blue-100 duration-300">
                    <td className="rounded-l-md p-2 text-center" aria-label="Moeda">
                        <div>
                            <Link className="hover:text-blue-500 duration-200 group" to={`/detail/${coin.id}`}>
                                <div className="flex items-center gap-2">
                                    <img 
                                        className="w-[30px] h-[30px] group-hover:scale-[1.15] duration-300 ease-linear"
                                        alt={coin.id} 
                                        title={coin.id} 
                                        src={`${URL_LOGO}/${coin.symbol.toLowerCase()}@2x.png`} 
                                    />
                                    <span>{coin.id}</span> | {coin.symbol}
                                </div>
                            </Link>
                        </div>
                    </td>
                    <td className="p-2 text-center" aria-label="Valor mercado">
                        {coin.marketCapFormated}
                    </td>
                    <td className="p-2 text-center" aria-label="Preço">
                        {coin.priceUsdFormated}
                    </td>
                    <td className=" p-2 text-center" aria-label="Volume">
                        {coin.volumeUsd24HrFormated}
                    </td>
                    <td className="rounded-r-md p-2 text-center" aria-label="Mudança 24 hrs">
                        <span className={`font-bold ${Number(coin.changePercent24Hr) < 0 ? "text-rose-500": "text-emerald-500"}`}>
                            {Number(coin.changePercent24Hr).toFixed(3)}
                        </span>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
      <div className="pt-5">
        <button 
            onClick={() => dispatch({
                payload: state.limit
            })} 
            className="bg-[#30beff] py-2 px-8 cursor-pointer text-white rounded-md
            hover:bg-white hover:text-[#30beff] duration-200"
        >
            Carregar mais ({state.limit})
        </button>
      </div>
    </div>
  )
}

export default Table;