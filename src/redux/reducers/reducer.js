const INIT_STATE = {
    carts: [],
    wishLists:[],
    view:[]
};



export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":

        const ItemIndex = state.carts.findIndex((item)=> item.id === action.payload.id);

        if(ItemIndex >= 0){
            state.carts[ItemIndex].qnty +=1
            return {
                ...state,
                carts:[...state.carts]
            }
        }else{
            const temp = {...action.payload,qnty:1}
             return {
                ...state,
                carts: [...state.carts, temp]
            }
        }

        /* Wish List */

       

        

           

        case "RMV_CART":
            const data = state.carts.filter((el)=>el.id !== action.payload); 
             console.log(action.payload);

            return {
                ...state,
                carts:data
            }

        case "RMV_ONE":
            const ItemIndex_dec = state.carts.findIndex((item)=> item.id === action.payload.id);
   
            if(state.carts[ItemIndex_dec].qnty >= 1){
                const dltitems = state.carts[ItemIndex_dec].qnty -= 1
                console.log([...state.carts,dltitems]);

                return {
                    ...state,
                    carts:[...state.carts]
                }
            }else if(state.carts[ItemIndex_dec].qnty === 1 ){
                const data = state.carts.filter((el)=>el.id !== action.payload);

                return {
                    ...state,
                    carts:data
                }
            }

        default:
            return state
            
    }
}

export const wishreducer = (state1 = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_WISH":

        const ItemIndex = state1.wishLists.findIndex((item)=> item.id === action.payload.id);

        if(ItemIndex >= 0){
            state1.wishLists[ItemIndex].qnty +=1
            return {
                ...state1,
                wishLists:[...state1.wishLists]
            }
        }else{
            const temp = {...action.payload,qnty:1}
             return {
                ...state1,
                wishLists: [...state1.wishLists, temp]
            }
        }

        
       

        

           

        case "RMV_WISH":
            const data = state1.wishLists.filter((el)=>el.id !== action.payload); 
             console.log(action.payload);

            return {
                ...state1,
                wishLists:data
            }

        case "RMV_ONE_WISH":
            const ItemIndex_dec = state1.wishLists.findIndex((item)=> item.id === action.payload.id);
   
            if(state1.wishLists[ItemIndex_dec].qnty >= 1){
                const dltitems = state1.wishLists[ItemIndex_dec].qnty -= 1
                console.log([...state1.wishLists,dltitems]);

                return {
                    ...state1,
                    wishLists:[...state1.wishLists]
                }
            }else if(state1.wishLists[ItemIndex_dec].qnty === 1 ){
                const data = state1.wishLists.filter((el)=>el.id !== action.payload);

                return {
                    ...state1,
                    wishLists:data
                }
            }

        default:
            return state1
        }     
    }

    export const viewreducer = (state2 = INIT_STATE, action) => {
        switch (action.type) {
            case "MOST_VIEW":
    
            const ItemIndex = state2.view.findIndex((item)=> item.id === action.payload.id);
    
            if(ItemIndex >= 0){
                state2.view[ItemIndex].qnty +=1
                return {
                    ...state2,
                    view:[...state2.view]
                }
            }else{
                const temp = {...action.payload,qnty:1}
                 return {
                    ...state2,
                    view: [...state2.view, temp]
                }
            }
            
            default:
                return state2
            }     
        }