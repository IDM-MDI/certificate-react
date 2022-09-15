export function isTagsEmpty(tags) {
    return tags === undefined ||
           tags === null ||
           tags.length <= 0;
}

export function isNotAdmin(auth) {
    return !auth || !auth.roles.find(item => item.name === 'ADMIN')
}