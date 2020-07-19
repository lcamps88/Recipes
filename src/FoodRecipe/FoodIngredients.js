import React, { useState } from "react";
import { Card, Image, Header, Divider, Button, Icon, Dimmer, Loader } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux'
import { getIngredients, getCategory, getRecipe, showSearch } from './Foodreducer'

import { add_shop } from './ShopReducer'

const FoodIngredients = (props) => {

    const Ingredients = props.ingredients;
    console.log('details', Ingredients)
    const dispatch = useDispatch()
    const shop = useSelector(store => store.shop.shopcart)
    console.log("ArrayShop", shop)
    const [loader, setLoader] = useState(false);

    const addShop = (ingredient) => {

        setLoader(true)

        dispatch(add_shop(ingredient));

        dispatch(getRecipe());
        dispatch(getIngredients());
        dispatch(getCategory());
        //dispatch(showSearch(''))
        setTimeout(() => { setLoader(false) }, 1000);
    }
    //--------------------------------
    let ShoptID = shop.map(list => list.ingredientId);

    console.log('cartID', ShoptID)
    //--------------------------------

    const showIngredients = () => {

        if (Ingredients) {
            return Ingredients.map((ingredient, index) => {

                return (

                    <Card key={index} ingredient={ingredient}>



                        <Card.Content>
                            <Image src={ingredient[0][0].photo_url} size='medium' rounded />
                        </Card.Content>

                        <Card.Content extra >
                            <Card.Description>{ingredient[0][0].name}</Card.Description>
                            <Card.Description>{ingredient[1]}</Card.Description>

                        </Card.Content>
                        <Button positive animated='vertical' onClick={() => addShop(ingredient[0][0])} disabled={ShoptID.includes(ingredient[0][0].ingredientId) ? true : false}>
                            <Button.Content hidden >
                                <Icon name='cart plus' size='large' color='black' />
                            </Button.Content>
                            <Button.Content visible>
                                <Icon name='shop' size='large' />
                            </Button.Content>
                        </Button>

                    </Card>

                )
            })
        }

    }

    return (
        <div>
            <Divider hidden></Divider>
            <Header>Ingredients</Header>


            <Card.Group itemsPerRow={4} doubling>
                <Dimmer active={loader}>
                    <Loader>Add Ingredients to Shopping</Loader>
                </Dimmer>

                    {showIngredients()}
                
            </Card.Group>

        </div>
    )
}
export default FoodIngredients