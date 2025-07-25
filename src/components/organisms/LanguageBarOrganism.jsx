import "./LanguageBarOrganism.css"
import LanguageButtonAtom from '../atoms/LanguageButtonAtom';

export default function LanguageBarOrganism({setLanguage}) {
    return (
        <div className="language-bar">
            <span className="select-lang">Select a Language</span>
            <LanguageButtonAtom flag="jp" lang="ja" setLanguage={setLanguage}/>
            <LanguageButtonAtom flag="kr" lang="ko" setLanguage={setLanguage}/>
            <LanguageButtonAtom flag="us" lang="en" setLanguage={setLanguage}/>
            <LanguageButtonAtom flag="es" lang="es" setLanguage={setLanguage}/>
        </div>
    );
}