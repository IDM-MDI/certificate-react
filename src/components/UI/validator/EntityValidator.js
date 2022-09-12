export function isTagsEmpty(tags) {
    console.log(tags)
    return tags === undefined ||
           tags === null ||
           tags.length <= 0;
}