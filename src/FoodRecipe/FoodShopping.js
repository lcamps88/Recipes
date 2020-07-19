import React, { useState } from "react";
import { Image, Header, Table, Button, Icon, Divider, Dimmer, Loader } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import {remove_shop} from './ShopReducer'

const FoodShopping = (props) => {

    const dispatch = useDispatch()
    const shop = useSelector(store => store.shop.shopcart)
    const [loader, setLoader] = useState(false);

    //========REMOVE==================
    const remove_ingredient = (ingredientId) => {

        setLoader(true)
        console.log('ingredientId', ingredientId)
        dispatch(remove_shop(ingredientId));
        setTimeout(() => { setLoader(false) }, 1000);
    }
    //==========================
    const renderIngredient = () => {

        if (shop) {
            return (

                shop.map((ing, index) => {
                    return (
                        <Table.Row key={ing.ingredientId} ing={ing}>

                            <Table.Cell>{ing.name}</Table.Cell>
                            <Table.Cell textAlign='right'>
                                <Image src={ing.photo_url} size='tiny' rounded />
                            </Table.Cell>
                            <Table.Cell><Button color='red' onClick={() => remove_ingredient(ing.ingredientId)} icon>
                                <Icon name='remove' />
                            </Button></Table.Cell>

                        </Table.Row>
                    )
                }))
        }

    }

    return (
        <div>
            <Divider hidden></Divider>
            <Header as='h1' ><Icon name='shopping bag'></Icon>SHOPPING</Header>

            <Dimmer active={loader}>
            <Loader>Remove Ingredients</Loader>
            </Dimmer>
            

            <Table fixed color='black'>
            
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell textAlign='left'>INGREDIENT</Table.HeaderCell>
                    <Table.HeaderCell >IMAGE</Table.HeaderCell>
                    <Table.HeaderCell ></Table.HeaderCell>
                    
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {renderIngredient()}
                </Table.Body>
            </Table>
        </div>
    )
}
export default FoodShopping