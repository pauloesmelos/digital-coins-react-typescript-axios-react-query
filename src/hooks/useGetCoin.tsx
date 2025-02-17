import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const URL = "https://api.coincap.io/v2/assets";

interface DataCoin {
    data: Coin,
    timestamp: number
}
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

const getCoin = async (id: string | undefined): Promise<DataCoin> => {
    return await axios.get(`${URL}/${id}`)
    .then(coin => coin.data)
    .catch(erro => console.log(erro));
}

const useGetCoin = (id: string | undefined) => {
  const { data } = useQuery<DataCoin>({
    queryKey: [`use-get-${id}`],
    queryFn: () => getCoin(id),
    enabled: !!id,
    refetchOnWindowFocus: false
  });
  return { data };
}

export default useGetCoin;