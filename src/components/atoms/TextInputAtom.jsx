import './TextInputAtom.css';

export default function TextInputAtom({onChange}) {
    return (<input type="text" className="text-input" onChange={e => onChange(e.target.value)}/>);
}