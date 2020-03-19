import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize; //-1 to get a start index of 0 if on page 1
    return _(items)
        .slice(startIndex)
        .take(pageSize) //number of items in the array taken.
        .value(); //converts to a regular array
}