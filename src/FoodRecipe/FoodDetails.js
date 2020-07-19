import React, { useEffect, useState } from "react";
//import { ingredients } from './data/dataArrays';
import { getIngredients, showIngredients } from './Foodreducer'
import { Button, Card, Image, Header, Icon } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux'
import FoodIngredients from './FoodIngredients'

const FoodDetails = (props) => {

    const dispatch = useDispatch();
    const Getrecipes = useSelector(store => store.recipes.showRecipe)
    const GetIngredients = useSelector(store => store.recipes.showIngredient)
    const show = useSelector(store => store.recipes.show)
    const PropsDetails = props.IdRecipes
    const Ingredients = props.ItemIngredients
    const [array, setArray] = useState();
    const [resdetails, setResDetails] = useState("");
   

    console.log(PropsDetails)

    useEffect(() => {
        dispatch(getIngredients());
        const details = recipeObject.description;
        const res = details.split("-- ");
        console.log("detail", res)
        setResDetails(res);
    }, [dispatch]);

    const list = Getrecipes.filter((recipe) => {
        return (recipe.recipeId === PropsDetails)
    })
    const recipeObject = list[0];
    console.log("newsObject ", recipeObject)
    console.log("Ingredients ", Ingredients)

    console.log("GetIngredients ", GetIngredients)


    //--------------------------------------
    let ingredientsArray = [];

    const getAllIngredients = () => {

        Ingredients.map(index => {

            GetIngredients.map((data) => {

                if (data.ingredientId === index[0]) {

                    ingredientsArray.push([GetIngredients.filter((ingredient) =>
                        (ingredient.ingredientId === index[0])), index[1]])

                }
            });
        });
        setArray(ingredientsArray)

    }
    console.log("ingredientsArray ", ingredientsArray)
    console.log("Array ", array)

    //--------------------------------------

    return (
        <div>
            <Header>Recipes Details</Header>
            <Card.Group itemsPerRow={1}>
                <Card >
                    <Card.Content>
                        <Image src={recipeObject.photo_url} size='small' rounded />

                    </Card.Content>
                    <Card.Content >
                        <Card.Header as='h3'>{recipeObject.title}</Card.Header>
                        <Card.Content >
                            <Header as='h4'>
                                <Icon name='time' />
                                {recipeObject.time} minutes
                </Header>
                        </Card.Content>
                        <Card.Description textAlign='left' >

                            <p>
                                {resdetails}
                            </p>

                        </Card.Description>

                    </Card.Content>
                    <Card.Content extra>
                        <Button positive onClick={() => { getAllIngredients(); dispatch(showIngredients(!show)) }}>Ingredients</Button>
                        {show && <FoodIngredients ingredients={array} />}
                    </Card.Content>

                </Card>
            </Card.Group>

        </div>
    )
}
export default FoodDetails