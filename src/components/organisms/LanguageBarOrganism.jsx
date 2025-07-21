import "./LanguageBarOrganism.css"
import LanguageButtonAtom from '../atoms/LanguageButtonAtom';

export default function LanguageBarOrganism() {
    return (
        <div className="language-bar">
            <span className="select-lang">Select a Language</span>
            <LanguageButtonAtom lang="jp" />
            <LanguageButtonAtom lang="kr" />
            <LanguageButtonAtom lang="us" />
            <LanguageButtonAtom lang="es" />
        </div>
    );
}