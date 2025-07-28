import "./TypeBadgeIcon.css"

export default function TypeBadgeIcon({type}){
    return (
        <div className={`type-icon ${type}`}>
            <img 
                className="type-image"
                src={`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/${type.toLowerCase()}.svg`} 
                alt={type.toLowerCase()}
                loading="lazy"
            />
        </div>
    );
}