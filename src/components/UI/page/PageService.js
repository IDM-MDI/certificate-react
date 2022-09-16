




export function fetchPage(setLoading,fetchFunction) {
    setLoading(true)
    fetchFunction()
}

export function nextPage(param,setParam) {
    changePage(param,setParam,1)
}

export function prevPage(param,setParam) {
    changePage(param,setParam,-1)
}

export function changePage(param, setParam, number) {
    if(param === null || param === undefined) {
        return;
    }
    setParam(param => ({
        ...param,
        pageNumber: param.pageNumber + (number)
    }));
}