import { useParams } from "react-router-dom";
import useGetCoins from "../../hooks/useGetCoins";

const Detail = () => {

  const id = useParams(); // object {id: "value"}
  const { data } = useGetCoins("10","0");
  console.log(data);

  return (
    <div>
      <h1>Detalhes da moeda</h1>
    </div>
  )
}

export default Detail;