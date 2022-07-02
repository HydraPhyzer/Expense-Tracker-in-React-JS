import { useState } from 'react';
import './ExpenseForm.css'

function ExpenseForm(Props)
{
    let [Name  , SetName]=useState("");
    let [Amount  , SetAmount]=useState("");
    let [Date  , SetDate]=useState("");

    let Prevent=(Event)=>
    {
        Event.preventDefault();

        let Obj=
        {
            Name,
            Amount,
            Date,
        }
        Props.Obj(Obj);
    }
    return(
        <div className='ExpenseForm'>
            <form action="" className='EnpenseForm__div'>
                <div className="Text Data">
                    <label htmlFor="Name">Enter The Expense Name</label>
                    <input onChange={(E)=>{SetName(E.target.value)}} value={Name} type="text" id="Name" required/>
                </div>
                <div className="Amount Data">
                    <label htmlFor="Money">Enter The Expense Amount</label>
                    <input onChange={(E)=>{SetAmount(E.target.value)}} value={Amount} type="number" id="Money" required/>
                </div>
                <div className="Date Data">
                    <label htmlFor="Dat">Enter The Date</label>
                    <input onChange={(E)=>{SetDate(E.target.value)}} value={Date} type="date" id="Dat" required />
                </div>
                <div className="Submit Data">
                    <input onClick={Prevent} type="submit" value="Submit Now" />
                </div>
            </form>
        </div>

    )
}

export default ExpenseForm