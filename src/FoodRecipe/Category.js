
import React, { useEffect, useState } from "react";
import { Card, Image, Icon, Divider, Header, Button, Modal } from 'semantic-ui-react';
import { getCategory, getRecipe } from './Foodreducer'
import { useDispatch, useSelector } from 'react-redux'
import CardCategory from './Card'


const Category = (props) => {

  const dispatch = useDispatch()
  const GetCategory = useSelector(store => store.recipes.category)
  const GetRecipe = useSelector(store => store.recipes.showRecipe)
  const [array, setArray] = useState()

  console.log('getCategory', GetCategory)
  //------------------------------------

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getRecipe());
  }, [dispatch]);


  //-------------------------------------

  let CategoryArray = [];
  const getAllcatedory = (id) => {

    console.log('category ID', id)

    CategoryArray = (GetRecipe.filter((idcategory) =>
    (idcategory.categoryId === id)))

    setArray(CategoryArray)

  }

  console.log("CategoryArray ", CategoryArray)
  console.log("Array ", array)
  
  //-------------------------------------

  const showCategory = () => {
    if (GetCategory) {
      return GetCategory.map((ctg) => {

        return (

          <Card key={ctg.id} ctg={ctg} fluid>
            <Card.Content textAlign='center'>
              <Image src={ctg.photo_url} size='large' rounded />

            </Card.Content>
            <Card.Content extra textAlign='center'>

              <Modal size='large' dimmer='blurring' trigger={

                <Card.Header as='h1'>
                  <Button positive onClick={() => { getAllcatedory(ctg.id) }}>{ctg.name}</Button>
                </Card.Header>

              }>

                <Modal.Content image scrolling>
                  <CardCategory category={array} />
                </Modal.Content>
              </Modal>
              <Card.Header as='h4'>{getNumberOfRecipes(ctg.id)}</Card.Header>

            </Card.Content>
          </Card>


        )
      })

    }
  }

  const getNumberOfRecipes = (id) => {
    let count = 0;
    console.log('category ID', id)
    GetRecipe.map(data => {
      if (data.categoryId === id) {
        count++;
      }
    });
    return count;
  }


  return (
    <div>
      
      <Divider hidden></Divider>
      <Header as='h1'><Icon name='list'></Icon>CATEGORIES</Header>
      <Card.Group>
        {showCategory()}
      </Card.Group>
    </div>



  )
}
export default Category