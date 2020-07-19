import React, { useState } from "react";
import { List, Header, Divider, Button, Checkbox, Dimmer, Loader } from 'semantic-ui-react';
import { add_recipe, getRecipe, showSearch, getCategory } from './Foodreducer'
import { useDispatch, useSelector } from 'react-redux'
import { DateInput } from 'semantic-ui-calendar-react';

const DayList = (props) => {

    const select_recipe = props.addrecipe;
    console.log('select recipe', props.addrecipe)

    const [list, setList] = useState([])
    const [date, setDate] = useState({ date: new Date() });
    const [select, setSelect] = useState({})
    const [loader, setLoader] = useState(false);

    const dispatch = useDispatch()
    const search = useSelector(store => store.recipes.search)
    const week = useSelector(store => store.recipes.week)
    console.log('week', week)
    console.log('Search Days', search)

    const [days] = useState([
        { id: 1, day: 'Monday' },
        { id: 2, day: 'Tuesday' },
        { id: 3, day: 'Wednesday' },
        { id: 4, day: 'Thursday' },
        { id: 5, day: 'Friday' },
        { id: 6, day: 'Saturday' },
        { id: 7, day: 'Sunday' }
    ]);

    let cartID ;

    cartID =  week.map(listweek => listweek.day);

    console.log('cartID', cartID)

    

    const addList = () => {
        setLoader(true)
        //dispatch(add_recipe(date,select_recipe));
       
        dispatch(add_recipe(list, select_recipe));

        

        dispatch(getRecipe());
        dispatch(getCategory());

        dispatch(showSearch(''));
        setTimeout(() => { setLoader(false) }, 1000);

    }

  


    const SelectChange = (e, { value }) => setSelect({ value })

    //=======================================

    const ShowDays = (days) => {

        return days.map((day) => {
            return (
                <List.Item key={day.id} day={day} >
                    <List.Content>
                        <Checkbox toggle onClick={() => setList(day.day)} label={day.day} value={day.day} checked={select.value === day.day} onChange={SelectChange} />
                    </List.Content>
                </List.Item>
            )
        })
    }

    const handleChange = (event, { name, value }) => {
        if (date.hasOwnProperty(name)) {
            setDate({ [name]: value });
        }
    }
    console.log('Date', date)



    return (
        <div>
            <Header color='blue'>Select Day for Menu</Header>
            <Divider></Divider>

            <Dimmer active={loader}>
                <Loader>Add Recipe Day</Loader>
            </Dimmer>

            <DateInput
                name="date"
                placeholder="Date"
                value={date.date}
                iconPosition="left"
                onChange={handleChange}

            />
            <List >
                {ShowDays(days)}
            </List>
            <Divider></Divider>
            <Button positive onClick={() => addList()} disabled={cartID.includes(list) ? true : false}>Continue</Button>


        </div>

    )
}
export default DayList

