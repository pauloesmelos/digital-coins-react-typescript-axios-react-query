import { FormEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Table from "../../components/table";

const Home = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleForm = (event: FormEvent) => {
    event.preventDefault();
    if(input) {
      navigate(`/detail/${input}`);
    }
  }

  return (
    <main className="w-full pt-5">
      <div className="w-full max-w-[1300px] px-4 mx-auto">
        <div>
          <form onSubmit={handleForm} className="w-full flex items-center gap-5">
            <input 
              className="w-full px-4 py-2 rounded-md bg-white outline:none focus:outline-blue-600" 
              placeholder="Digite o nome da moeda" 
              type="text"
              value={input}
              onChange={({ target }) => setInput(target.value)}
            />
            <button type="submit" className="text-white text-3xl cursor-pointer hover:text-blue-500 duration-200">
              <FaSearch />
            </button>
          </form>
          <Table />
        </div>
      </div>
    </main>
  )
}

export default Home;