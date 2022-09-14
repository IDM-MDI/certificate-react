export function isTagsEmpty(tags) {
    return tags === undefined ||
           tags === null ||
           tags.length <= 0;
}