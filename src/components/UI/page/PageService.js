




export function fetchPage(setLoading,loadingTime,fetchFunction) {
    setLoading(true)
    fetchFunction()
    setTimeout(() => {
        setLoading(false)
    },loadingTime)
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