import './App.css'
import ExpenseForm from './Components/ExpenseForm'
import ExpenseData from './Components/ExpenseData'
import { useState } from 'react'

let DummyData=
[
    {
        Name:"Food",
        Amount:25,
        Date:new Date(2020-25-15).toLocaleString(),
    },
]
let App = () => {

    let [Expenses , SetExpenses]=useState(DummyData);

    let GetObj=(Obj)=>
    {
        const Temp=[Obj , ...Expenses];
        SetExpenses(Temp);
    }

    return (
        <div>
            <ExpenseForm Obj={GetObj}/>
            <ExpenseData AllData={Expenses}/>
        </div>
    )
}

export default App