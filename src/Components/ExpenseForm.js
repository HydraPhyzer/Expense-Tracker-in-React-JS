import './ExpenseForm.css'

function ExpenseForm()
{
    let Prevent=(Event)=>
    {
        Event.preventDefault()
    }
    return(
        <div className='ExpenseForm'>
            <form action="" className='EnpenseForm__div'>
                <div className="Text Data">
                    <label htmlFor="Name">Enter The Expense Name</label>
                    <input type="text" id="Name"/>
                </div>
                <div className="Amount Data">
                    <label htmlFor="Money">Enter The Expense Amount</label>
                    <input type="number" id="Money"/>
                </div>
                <div className="Date Data">
                    <label htmlFor="Dat">Enter The Date</label>
                    <input type="date" id="Dat"/>
                </div>
                <div className="Submit Data">
                    <input onClick={Prevent} type="submit" value="Submit Now" />
                </div>
            </form>
        </div>

    )
}

export default ExpenseForm