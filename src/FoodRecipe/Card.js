import React from "react";
import { Button, Card, Image,Modal,Header,Icon} from 'semantic-ui-react';
import DayList from "./DayList";
import FoodDetails from './FoodDetails'
//import {getRecipe} from './Foodreducer'
//import {useDispatch, useSelector} from 'react-redux'
//import { isEmpty } from 'lodash';

//import { Link } from "react-router-dom";

const style = {
    h1: {
      marginTop: '3em',
    },
    h2: {
      margin: '4em 0em 2em',
    },
    h3: {
      marginTop: '2em',
      padding: '2em 0em',
    },
    last: {
      marginBottom: '300px',
    },
  }

const FoodCard =(props) =>{



//const dispatch = useDispatch();
//const Getrecipes = useSelector(store => store.recipes.showRecipe)


//const search = useSelector(store => store.recipes.search)
//const show = useSelector(store => store.recipes.show)

//const GetCategory = useSelector(store => store.recipes.category)

//let result = "";
//console.log('getCard', Getrecipes)
//console.log('SearchCard', search)

 //------------------------------------

 //useEffect(() => {
  //  dispatch(getRecipe());
//}, []);


const ListCategory = props.category
//--------------------------------------

 const showRecipe = () => {

  
   if (ListCategory)
   {return ListCategory.map(recipe=> {
       
   return  (
    
        <Card key={recipe.recipeId} recipe={recipe}>
                 
            <Card.Content>
                <Image src={recipe.photo_url} size='medium' rounded/>
            </Card.Content>
            
            <Card.Content extra >
            <Card.Header as='h4'>{recipe.title}</Card.Header>
            <Button.Group fluid>
                <Modal size='small' dimmer='blurring' trigger={<Button>Recipes</Button>}>
                        
                    <Modal.Content image scrolling>
                        <FoodDetails IdRecipes = {recipe.recipeId} ItemIngredients={recipe.ingredients}/>
                    </Modal.Content>
                </Modal>
                    
                <Button.Or />
                <Modal size='tiny' trigger={<Button positive >Add List</Button>} >                
                    <Modal.Content image scrolling>
                        <DayList addrecipe = {recipe} />
                    </Modal.Content>
                </Modal>
                       
                </Button.Group>
                </Card.Content>
            </Card>      
   )})}
     
  }

return (
    <div>
        <Header as='h1'  style={style.h3} content='Doubling Card' hidden></Header>
        <Header as='h1'><Icon name='food'></Icon>NUTRITION DIARIES</Header>
        <Card.Group doubling>
         {showRecipe()}
         </Card.Group>  
    </div>
    
)
}
export default FoodCard

