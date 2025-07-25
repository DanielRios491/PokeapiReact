import "./LanguageButtonAtom.css";

export default function LanguageButtonAtom({flag = "jp", lang, setLanguage}) {
    return (
        <button 
            onClick={() => setLanguage(lang)}
            className="language-button"
        >
            <img src={`https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/svg/${flag}.svg`} alt="icon" className="lang-icon" />
        </button>
    );
}