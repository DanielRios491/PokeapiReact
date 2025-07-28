import "./AtomStyles.css";

const LabelAtom = ({ label, classStyle = "pokemon-title" }) => (
  <span className={classStyle}>{label}</span>
);

export default LabelAtom;