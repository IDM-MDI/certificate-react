import React,{useContext} from 'react';
import Popup from "./Popup";
import {Context} from "../context/context";
import classes from './Popup.module.css'
import DescriptionInput from "../input/DescriptionInput";
import CustomButton from "../button/CustomButton";
import Text from "../text/Text";
import classnames from "classnames";


function messageByType(type) {
    switch (type) {
        case 'INFO' : return {
            main: classes.messageInfo,
            button: 'green'
        };
        case 'WARNING' : return {
            main: classes.messageWarning,
            button: 'yellow'
        };
        case 'ERROR' : return {
            main: classes.messageError,
            button: 'pink'
        };
    }
}

const MessagePopup = () => {
    const context = useContext(Context);
    const[isMessageVisible,
        setMessageVisible,
        message, setMessage] =
        [context.isMessageVisible,
        context.setMessageVisible,
        context.message, context.setMessage]

    if(!message) {
        return;
    }

    const messageType = messageByType(message.type)

    return (
        <Popup
            isVisible={isMessageVisible}
            setVisible={event =>{}}
            blockClass={classnames(classes.messageBlock,messageType.main)}
            zIndex={100}
        >
            <div className={classes.messageBlockName}>
                <Text>{message.type}</Text>
            </div>
            <DescriptionInput
                value={message.message}
                style={{
                    width: '450px',
                    height: '100px',
                    textAlign: 'center'
                }}
                disabled/>
            <CustomButton
                color={messageType.button}
                onClick={() => {
                    setMessageVisible(false)
                    setMessage(null)
                }}
                style={{
                    height: '70px'
                }}
            >
                OK
            </CustomButton>
        </Popup>
    );
};

export default MessagePopup;