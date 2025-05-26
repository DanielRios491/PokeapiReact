import "../styles/TypeBadgeAtom.css";

export default function TypeBadgeAtom({ type }) {
    return (
        <span className={`type-badge ${type.toLowerCase()}`}>
            {type}
        </span>
    );
}