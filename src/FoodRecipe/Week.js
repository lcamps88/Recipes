import React,{useState} from "react";
//import {getRecipe} from './Foodreducer'
import {useSelector,useDispatch} from 'react-redux'
import {Image,Header,Table, Button,Icon,Divider,Dimmer,Loader} from 'semantic-ui-react'
import {remove } from './Foodreducer'


const Week =(props)=>{

    //const a = document.getElementsByClassName

    const [loader, setLoader] = useState(false);
    const dispatch = useDispatch()
    const Get_Week = useSelector(store => store.recipes.week)
    console.log('Get_Week', Get_Week)
    
    //========REMOVE==================
    const remove_recipe = (index) => {

        setLoader(true)
        console.log('id recipe',index)
        dispatch(remove(index));
        setTimeout(() => {setLoader(false)}, 1000);
    }
    //==========================
    
    const renderWeek = () => {
            
        if(Get_Week){
            return (
                
                Get_Week.map((weekdays,index) => {
                return( 
                   <Table.Row key={index} weekdays={weekdays}>
                      
                    <Table.Cell>
                        <Header as='h4' textAlign='left'>
                        {weekdays.day}
                        
                        </Header>  
                    </Table.Cell>
                    <Table.Cell>{weekdays.recipe.title}</Table.Cell>
                    <Table.Cell textAlign='right'>
                        <Image src={weekdays.recipe.photo_url} size='tiny' rounded/>
                    </Table.Cell>
                    <Table.Cell><Button color='red' onClick={()=>remove_recipe(index)} icon>
                        <Icon name='remove'/>
                        </Button></Table.Cell>
                   
                   </Table.Row>
                ) 
           }))
        }
      
           
    }

   

    return(
        <div>
            
            <Divider hidden></Divider>
            <Header as='h1' ><Icon name='calendar'></Icon>WEEK</Header>

            <Dimmer active={loader}>
            <Loader>Remove Recipe Day</Loader>
            </Dimmer>
            

            <Table fixed color='black'>
            
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell >DAY</Table.HeaderCell>
                    <Table.HeaderCell textAlign='left'>RECIPE</Table.HeaderCell>
                    <Table.HeaderCell >IMAGE</Table.HeaderCell>
                    <Table.HeaderCell ></Table.HeaderCell>
                    
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {renderWeek()}
                </Table.Body>
            </Table>
        </div>
    )
}
export default Week