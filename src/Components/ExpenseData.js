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
                            <p className="DateD" style={{ textAlign: "center" }}>
                                <HandleDate Props={NewData}/>
                            </p>
                            <p className="NameN">{NewData.Name}</p>
                            <p className="AmountA">{NewData.Amount+'$'}</p>
                        </div>
                    )
                })
            }
         </div>
    )
}
export default ExpenseData;