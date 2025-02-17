import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
    explorer: string
}

const API = "https://api.coincap.io/v2/assets"; //?limit=5&offset=0"

const getCoins = async (limit: string, offset: string) => {
    console.log(limit, offset);
    return await axios.get(`${API}?limit=${10}&offset=${0}`)
    .then(coins => coins.data)
    .catch(erro => console.log(erro));
}
const useGetCoins = (limit: string, offset: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [`use-get-coins-${limit}-${offset}`],
    queryFn: () => getCoins(limit, offset),
    enabled: !!limit,
    refetchOnWindowFocus: false
  })
  return { data, isLoading };
}

export default useGetCoins;