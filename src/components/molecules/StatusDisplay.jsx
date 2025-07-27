import LabelAtom from "../atoms/LabelAtom";
import './StatusDisplay.css'

export default function StatusDisplay({score, attempts, result}) {
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
            {
                (attempts === 0 && score >= 1) ? 
                    <LabelAtom label={"Congratulations!"} /> :
                    <>
                        {result === "win" && <LabelAtom label={"Correct!"} />}
                        {result === "lose" && <LabelAtom label={"Wrong!"} />}
                    </>
            }
        </div>
    );
}