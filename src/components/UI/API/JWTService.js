import axios from "axios";
import {isContextValid, isJWTValid} from "./APIValidator";


const JWT_URL = 'http://localhost:8080/api/v1/jwt'

export async function initJWT() {
    const init = JSON.parse(localStorage.getItem('auth'));
    if(init === null) return null;

    const result = await isJWTNotExpired(init.jwt);
    return result ? init : null;
}

export async function isJWTNotExpired(jwt) {
    if (!isJWTValid(jwt)) {
        return false;
    }
    let response = await getResponseByJWT(jwt);
    return response !== null && response.data === true;
}

export async function isJWTValidByContext(context) {
    if(!isContextValid(context)) {
        return false;
    }
    return await isJWTNotExpired(context.auth.jwt);
}

export async function getResponseByJWT(jwt) {
    return await axios.get(JWT_URL, {
        headers: {
            'Authorization': 'Bearer ' + jwt
        }
    });
}