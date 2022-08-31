export function validateUsername(value) {
    if(value.match('^[0-9]')) {
        return 'Value need to start from letter'
    }
    if(value.length < 2 || value.length > 20) {
        console.log(value)
        return 'Need 2-20'
    }
    if(value.match('^[a-zA-Z][a-zA-Z0-9]{1,20}')) {
        return 'Valid'
    }
    return 'Not valid'
}

export function validatePassword(value) {
    if(value.length < 2 || value.length > 20) {
        return 'Need 2-15'
    }
    return 'Valid'
}