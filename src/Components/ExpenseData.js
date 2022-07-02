import "./ExpenseData.css";
import HandleDate from "./HandleDate";
function ExpenseData(AllProps)
{
    return(
        <div className="WholeData">
            {
                AllProps.AllData.map((NewData , Ind)=>
                {
                    return(
                        <div className="AllExpsnse">
                            <HandleDate Props={NewData}/>
                            <p className="NameN">{NewData.Name}</p>
                            <p className="AmountA">{NewData.Amount}</p>
                        </div>
                    )
                })
            }
         </div>
    )
}
export default ExpenseData;