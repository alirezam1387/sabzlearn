import { useState, CSSProperties } from "react";
import GridLoader from "react-spinners/GridLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

export default function Loader() {
    return (
        <div className="sweet-loading">
            <GridLoader 
                color="var(--main)"
                loading={true}
                cssOverride={override}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}
