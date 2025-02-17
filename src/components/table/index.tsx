import { Link } from "react-router-dom";

const Table = () => {

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
            <tr className="font-bold odd:bg-neutral-700/50">
                <td className="rounded-l-md p-2 text-center" aria-label="Moeda">
                    <div>
                        <Link to="/details/bitcoin">
                            <span>Bitcoin</span> | BTC
                        </Link>
                    </div>
                </td>
                <td className="p-2 text-center" aria-label="Valor mercado">
                    1T
                </td>
                <td className="p-2 text-center" aria-label="Preço">
                    8.000
                </td>
                <td className=" p-2 text-center" aria-label="Volume">
                    2B
                </td>
                <td className="rounded-r-md p-2 text-center" aria-label="Mudança 24 hrs">
                    <span className="text-emerald-500 font-bold">1.20</span>
                </td>
            </tr>
            <tr className="font-bold odd:bg-neutral-700/50">
                <td className="rounded-l-md p-2 text-center" aria-label="Moeda">
                    <div>
                        <Link to="/details/bitcoin">
                            <span>Bitcoin</span> | BTC
                        </Link>
                    </div>
                </td>
                <td className="p-2 text-center" aria-label="Valor mercado">
                    1T
                </td>
                <td className="p-2 text-center" aria-label="Preço">
                    8.000
                </td>
                <td className=" p-2 text-center" aria-label="Volume">
                    2B
                </td>
                <td className="rounded-r-md p-2 text-center" aria-label="Mudança 24 hrs">
                    <span className="text-emerald-500 font-bold">1.20</span>
                </td>
            </tr>
        </tbody>
      </table>
      <div className="pt-5">
        <button className="bg-[#30beff] py-2 px-8 cursor-pointer text-white rounded-md
        hover:bg-white hover:text-[#30beff] duration-200">
            Carregar mais
        </button>
      </div>
    </div>
  )
}

export default Table;