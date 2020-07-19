let initialState = { shopcart: [] }

export default function ShopReducer(state = initialState, action) {
    switch (action.type) {

        case 'ADD_SHOP':
            console.log('Shop', action.ing, state.shopcart)
            return { shopcart: [...state.shopcart, action.ing] };

        case 'REMOVE_SHOP':
            console.log('Remove Ingredients', action.payload)
            return {
                shopcart: state.shopcart.filter((ing, index) => ing.ingredientId !== action.payload)
            };
        default:
            return state

    }
}

//-------------------------------

export const add_shop = (ing) => (dispatch) => {

    dispatch({
        type: 'ADD_SHOP',
        ing: ing
    })

}

export const remove_shop = (id) => (dispatch) => {

    dispatch({
        type: 'REMOVE_SHOP',
        payload: id
    })

}