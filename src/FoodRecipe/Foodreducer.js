import { recipes, categories, ingredients } from './data/dataArrays';

let initialState = { week: [], showRecipe: [], category: [], search: null, show: false, selectrecipe: 0, showIngredient: [], getCategory: [] }


export default function ReducerRecipe(state = initialState, action) {
    switch (action.type) {
        case 'GET_RECIPE':
            return { ...state, showRecipe: action.payload }

        case 'GET_INGREDIENTS':
            return { ...state, showIngredient: action.payload }

        case 'ADD_RECIPE':
            console.log('Week', state.week)
            return {
                week: [...state.week, { day: action.day, recipe: action.recipe }]
            };
        
        case 'GET_CATEGORY':
            return { ...state, category: action.payload };

        case 'REMOVE':
            console.log('Remove', action.payload)
            return {
                week: state.week.filter((day, index) => index !== action.payload)
            };
        case 'SEARCH':
            console.log('Search', action.payload)
            return { ...state, search: action.payload };

        case 'SHOW_INGREDIENTS':
            console.log('SHOW_INGREDIENTS', action.payload)
            return { ...state, show: action.payload };

        case 'SELECT':
            console.log('SELECT', action.payload)
            return { ...state, selectrecipe: action.payload };

        default:
            return state
    }
}

//-----------------------------------------------------------

export const getRecipe = () => (dispatch) => {

    dispatch({
        type: 'GET_RECIPE',
        payload: recipes
    })

}


export const getCategory = () => (dispatch) => {

    dispatch({
        type: 'GET_CATEGORY',
        payload: categories
    })

}

export const getIngredients = () => (dispatch) => {

    dispatch({
        type: 'GET_INGREDIENTS',
        payload: ingredients
    })

}

export const add_recipe = (day, recipe) => (dispatch) => {

    console.log("DAY",day, "Recipe",recipe)
    
    dispatch({
        type: 'ADD_RECIPE',
        day: day,
        recipe: recipe
    })

}



export const remove = (id) => (dispatch) => {

    dispatch({
        type: 'REMOVE',
        payload: id
    })

}

export const showSearch = (value) => (dispatch) => {

    dispatch({
        type: 'SEARCH',
        payload: value
    })

}

export const showIngredients = (ingredients) => (dispatch) => {

    dispatch({
        type: 'SHOW_INGREDIENTS',
        payload: ingredients
    })

}

export const SelectRecipe = (id) => (dispatch) => {

    dispatch({
        type: 'SELECT',
        payload: id
    })

}


