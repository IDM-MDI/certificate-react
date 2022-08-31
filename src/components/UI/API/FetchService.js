import axios from "axios";

const AND = '&'

function generateParam(url,size,page = 0,sort,direction) {
    const urlSort = sort === undefined ? '' : 'sort=' + sort;
    const urlSize = size === undefined ? '' : 'size=' + size;
    const urlPage = page === undefined ? '' : 'page=' + page;
    const urlDirection = direction === undefined ? '' : 'direction=' + direction;

    return url + '?' +
        urlSize +
        AND +
        urlPage +
        AND +
        urlSort +
        AND +
        urlDirection;
}

export async function fetchEntity(url,size = 10,page = 0,sort = 'id',direction = 'asc') {
    return await axios.get(generateParam(url,size,page,sort,direction));
}

export async function fetchOrder(jwt,url,size,page = 0,sort) {
    return await axios.get(generateParam(url,size,page,sort),{
        headers: {
            'Authorization': 'Bearer ' + jwt
        }
    });
}