import "./AtomStyles.css";

export default function NumberAtom({ id, classStyle = "pokemon-id"}) {
    function formatId(id) {
        return id.toString().padStart(3, '0');
    }
    return <span className={classStyle}>#{formatId(id)}</span>;
}