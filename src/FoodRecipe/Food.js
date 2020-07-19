import React, { useState } from "react";
import { Header,Menu,Icon, Segment} from 'semantic-ui-react';
import FoodSearch from './FoodSearch'
import FoodCard from './FoodCard'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Category from './Category'
import Week from './Week'
import store from './FoodStore'
import {Provider} from 'react-redux'
import FoodShopping from './FoodShopping'

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
    }

  }

const Food = (props)=>{

    const [activeItem, setcAtiveItem] = useState('home')
    const handleItemClick = (e, {name} ) => setcAtiveItem(name)
   
    return (
        <Router style={style.h3 } content = 'Menu stackable'>
            <Menu inverted stackable color='grey'>

                <Link to="/" >
                    <Menu.Item as='h2' name='home' active={activeItem === 'home'} onClick={handleItemClick}>
                    <Icon name='home' />
                          Home
                    </Menu.Item>
                </Link>

                <Link to="/Category" > 
                    <Menu.Item as='h2' name='category'  active={activeItem === 'category'} onClick={handleItemClick}>
                    
                    <Icon name='tasks' />  
                        Category
                    </Menu.Item>
                </Link>

                <Link to="/Week" > 
                    <Menu.Item as='h2' name='week' active={activeItem === 'week'} onClick={handleItemClick}>  
                    <Icon name='calendar alternate outline'  />
                         Week
                    </Menu.Item>
                </Link>
                <Link to="/ListShopping" > 
                    <Menu.Item as='h2' name='ListShopping' active={activeItem === 'ListShopping'} onClick={handleItemClick}>  
                    <Icon name='shopping cart'  />
                         Shopping
                    </Menu.Item>
                </Link>
                </Menu>
                
                
            <Provider store={store}>
            <Switch>
                <Route path="/ListShopping" >
                    <FoodShopping/>
                </Route>
                <Route path="/Week" >
                    <Week/>
                </Route>
                <Route path="/Category" >
                    <Category/>
                </Route>
                <Route path="/" exact >
                    
        
                    <Segment inverted raised color='green'>
                
                    <Header as='h1'><Icon name='food'></Icon>NUTRITION DIARIES</Header>
                    <FoodSearch/>
                    
                     </Segment>
                    <FoodCard />
                   
                    
                </Route>
            </Switch>

            </Provider>

        </Router>
      
        
       
    );
}
export default Food

// =========== Data =======
    //const recipesApp = recipes;
    //const categories = categories;
    //const ingredients = ingredients;
    //==========================

   // const [query, setQuery] = useState("cookie");
    //const [recipes, setRecipes] = useState([]);

    /*const APP_ID = "beeb1b98";
    const APP_KEY = "7a2f57f5ae8ef6929fcf3c2cd92e6e34";

    //const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    useEffect(() => {

        getApiFoodSearch()
    }, []);

    const getApiFoodSearch = async() => {
        
        fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
            
        .then((response) => {
                return response.json();
            })
            .then((result) => {
                console.log(result);
                setRecipes(result.hits);

            });
    }
*/