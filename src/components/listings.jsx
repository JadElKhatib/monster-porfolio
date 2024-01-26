import { useState } from "react"
import './listings.css'

export function Listings() {
    const [fullArr,setFullArr] = useState([]);
    const [mode,setMode] = useState("");

    const Searcher = async () => {
        const response = await fetch("https://eldenring.fanapis.com/api/bosses?");
        const jsonifiedResponse = await response.json();
        const newFullArr = [];
        jsonifiedResponse.data.map((info) => {
            newFullArr.push(info.name);
        })
        setFullArr(newFullArr);
        setMode("other");
    }

    return (
        <>
            <div className="topbar">
                {mode === "" && <div onClick={Searcher} style={{fontFamily: "Georgia, serif"}} className="name">Elden Ring</div>}
                {mode === "other" && <div style={{fontFamily: "Georgia, serif"}} className="nameOther">Elden Ring</div>}
            </div>
            <div className="lister">
                {fullArr.map((info) => {
                    return (
                        <>
                            <div style={{fontFamily: "Georgia, serif"}} className="names">{info}</div><br/>
                        </>
                    )
                })}
            </div>
        </>
    )
}