import LabelAtom from "../atoms/LabelAtom";
import './StatusDisplay.css'

export default function StatusDisplay({score, attempts}) {
    return(
        <div className="status-col">
            <div className="status-row">
                <LabelAtom label={"Score:"}/>
                <LabelAtom label={score}/>
            </div>
            <div className="status-row">
                <LabelAtom label={"Attemps:"}/>
                <LabelAtom label={attempts}/>
            </div>
        </div>
    );
}