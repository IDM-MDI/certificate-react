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

export async function fetchSearchByName(url,name) {
    return await axios.get(url + '?name=' + name)
}

export async function fetchOrder(jwt,url,size = 10,page = 0,sort = 'id',direction = 'asc') {
    return await axios.get(generateParam(url,size,page,sort,direction),{
        headers: {
            'Authorization': 'Bearer ' + jwt
        }
    });
}