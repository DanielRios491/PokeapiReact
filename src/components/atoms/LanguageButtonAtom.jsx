import "./LanguageButtonAtom.css";

export default function LanguageButtonAtom({lang = "jp"}) {
    return (
        <button 
            onClick={() => console.log("we will change the language")}
            className="language-button"
        >
            <img src={`https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/svg/${lang}.svg`} alt="icon" className="lang-icon" />
        </button>
    );
}