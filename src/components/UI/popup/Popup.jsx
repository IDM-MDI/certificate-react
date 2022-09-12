import React from 'react';
import {isPopupActive} from "../validator/PopupValidator";

const Popup = ({children,zIndex = 5,isVisible,setVisible,blockClass,...props}) => {
    return (
        <div className={isPopupActive(isVisible)}
             onClick={() => setVisible(false)}
             style={{
                 zIndex : zIndex
             }}>
            <div className={blockClass} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Popup;