import "./HeaderNavBar.css";
import ButtonAtom from "../atoms/ButtonAtom";
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
                <ButtonAtom classname="super-logo">Pokédex</ButtonAtom>
            </div>
            <div className="nav-buttons">
                {
                    options.map((item, index) => {
                        return <ButtonAtom 
                                key={index}
                                className={`${activeIndex === index ? "buttom-atom active" : "buttom-atom"}`}
                                onClick={() => {setActiveIndex(index); navigate(item.path)}} 
                                >{item.label}</ButtonAtom>
                    })
                }
            </div>
        </div>
    );
}