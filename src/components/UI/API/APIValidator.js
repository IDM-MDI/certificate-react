


export function isContextValid(context) {
    return context !== null && context !== undefined &&
        context.auth !== null && context.auth !== undefined;
}

export function isJWTValid(jwt) {
    return !(jwt === null || jwt === undefined)
}
