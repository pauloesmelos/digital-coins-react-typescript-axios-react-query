import { MdNoEncryptionGmailerrorred } from "react-icons/md";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex items-center gap-2">
        <h1 className="text-5xl font-semibold text-white">Erro 404</h1>
        <MdNoEncryptionGmailerrorred className="text-5xl text-white" />
      </div>
    </div>
  )
}

export default NotFound;