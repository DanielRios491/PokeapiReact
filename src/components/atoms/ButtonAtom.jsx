import "./ButtonAtom.css";
import PropTypes from "prop-types";

export default function ButtonAtom({
    children,
    onClick,
    classname = "buttom-atom",
    type = "button",
    ...props
}) {
    return (
        <button
            type={type}
            className={classname}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
}

ButtonAtom.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    classname: PropTypes.string,
    type: PropTypes.oneOf(["button", "submit", "reset"])
};