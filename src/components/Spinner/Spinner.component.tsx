import ClipLoader from "react-spinners/ClipLoader";
import { CSSProperties } from "react";

const Spinner = () => {
  let color = "#ffffff";
  let loading = true
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <>
        <div className="sweet-loading">
          <ClipLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={200}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
    </>
  )
}

export default Spinner;