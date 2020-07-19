import React, { useEffect } from "react";
import { Input, Icon, Header, Segment } from 'semantic-ui-react';

import { getRecipe, showSearch } from './Foodreducer'
import { useDispatch, useSelector } from 'react-redux'


const FoodSearch = (props) => {


  const dispatch = useDispatch();
  const search = useSelector(store => store.recipes.search)
  console.log('FoodSearch', search)

  const onChangeRecipe = e => {
    console.log('value search', e.target.value)
    dispatch(showSearch(e.target.value))
  }

  useEffect(() => {
    dispatch(getRecipe());
    dispatch(showSearch(''))
  }, [dispatch]);

  return (

        <Segment inverted raised secondary>
          <Header as='h3'inverted><Icon name='search'></Icon>SEARCH RECIPE    
          </Header>
          <Input type='text' placeholder='Search Food' value={search} onChange={onChangeRecipe}  fluid/>
        </Segment>

  )
}
export default FoodSearch