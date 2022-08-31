import axios from "axios";
import {isJWTValidByContext} from "./JWTService";


const ORDER_URL = 'http://localhost:8080/api/v1/order'

export async function addCertificateToOrder(id, context) {
    const isValid = await isJWTValidByContext(context);
    if(!isValid) {
        return;
    }
    await axios.post(ORDER_URL + '/' + id, {}, {
        headers: {
            'Authorization': 'Bearer ' + context.auth.jwt
        }
    });
}