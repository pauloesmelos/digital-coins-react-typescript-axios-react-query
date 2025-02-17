import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="pt-[20rem]">
        <ClipLoader 
            color={"#30beff"}
            loading={true}
            cssOverride={{ display: "block", margin: "0 auto" }}
            size={200}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    </div>
  )
}

export default Loader;