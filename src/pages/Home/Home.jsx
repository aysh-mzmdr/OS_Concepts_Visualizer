import { useNavigate } from "react-router-dom";
import style from "./Home.module.css"

export default function Home(){
    const navigate = useNavigate();

    return(
        <>
            <button onClick={() => navigate("/scheduling")}>CPU Scheduling</button>
        </>
    )
}