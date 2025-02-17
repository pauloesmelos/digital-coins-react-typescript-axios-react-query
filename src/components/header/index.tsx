import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full">
      <nav className="w-full max-w-[1300px] mx-auto py-7">
        <div className="w-full flex justify-center">
            <Link to="/">
                <h1 className="font-bold text-4xl text-white hover:scale-[1.06] duration-300 ease-linear relative
                after:w-3 after:h-3 after:absolute after:top-5 after:left-[0px] after:bg-blue-500 after:z-[-1]">
                    Dev
                    <span className="text-blue-500 px-2">
                        Currency
                    </span>
                </h1>
            </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header;