export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}



// remove iteams
export const DLT = (id) => {
    return {
        type: "RMV_CART",
        payload: id
    }
}

// remove individual iteam

export const REMOVE = (item) => {
    return {
        type: "RMV_ONE",
        payload: item
    }
}



export const ADD_WISHLIST = (item) => {
    return {
        type: "ADD_WISH",
        payload: item
    }
}



// remove iteams
export const DELETE = (id) => {
    return {
        type: "RMV_WISH",
        payload: id
    }
}

// remove individual iteam

export const REMOVE_WISH = (item) => {
    return {
        type: "RMV_ONE_WISH",
        payload: item
    }
}

export const MOST_VIEW = (item) => {
    return {
        type:"MOST_VIEW_PRODUCT",
        payload: item
    }
}