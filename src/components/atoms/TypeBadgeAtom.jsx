import "./AtomStyles.css";

export default function TypeBadgeAtom({ type }) {
    return (
        <div className={`type-badge ${type.toLowerCase()}`}>
            <img 
                style={{maxWidth: "0.8rem"}}
                src={`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/${type.toLowerCase()}.svg`} 
                alt={type.toLowerCase()}
            />
            <p>{type}</p>
        </div>
    );
}