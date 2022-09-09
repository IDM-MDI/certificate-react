import classes from "../popup/Popup.module.css";

const popup = classes.popup;
const active = classes.active;

export function isPopupActive(isActive) {
    return isActive ? [popup,active].join(' ') : popup;
}