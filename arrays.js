"use strict";


// 1. printIndices
function printIndices(items) {
    let i = 1

    for (const item of items) {
        console.log(`${i} ${item}`);
    }

    i += 1;
}


// 2. everyOtherItem
function everyOtherItem(items) {
    const result = [];

    for (const idx in items) {
        if (idx % 2 === 0) {
            result.push(items[idx]);
    } 
}
    return result;
}    


// 3. smallestNItems
function smallestNItems(items, n) {
    const sortedItems = items.sort((a,b) => a - b).slice(0, n);
    sortedItems.reverse();

    console.log(sortedItems);
}

