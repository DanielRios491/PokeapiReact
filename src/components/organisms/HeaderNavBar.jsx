import "./HeaderNavBar.css";
import ButtomAtom from "../atoms/ButtomAtom";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";

export default function HeaderNavBar({options}) {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className="header-navbar">
            <div className="icon-logo">
                <img
                    src="https://raw.githubusercontent.com/waydelyle/pokemon-assets/master/assets/svg/pokeball.svg"
                    alt="pokeball"
                />
                <ButtomAtom classname="super-logo">Pokédex</ButtomAtom>
            </div>
            <div className="nav-buttons">
                {
                    options.map((item, index) => {
                        return <ButtomAtom 
                                key={index}
                                className={`${activeIndex === index ? "buttom-atom active" : "buttom-atom"}`}
                                onClick={() => {setActiveIndex(index); navigate(item.path)}} 
                                >{item.label}</ButtomAtom>
                    })
                }
            </div>
        </div>
    );
}