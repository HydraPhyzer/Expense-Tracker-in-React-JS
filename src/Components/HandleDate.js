function HandleDate(Props) {
    let MonthName = (Num) => {
        let Ret;
        switch (Num) {
            case 1:
                Ret= 'Jan';
                break;
            case 2:
                Ret= 'Feb';
                break;
            case 3:
                Ret= 'Mar';
                break;
            case 4:
                Ret= 'Apr';
                break;
            case 5:
                Ret= 'May';
                break;
            case 6:
                Ret= 'Jun';
                break;
            case 7:
                Ret= 'Jul';
                break;
            case 8:
                Ret= 'Aug';
                break;
            case 9:
                Ret= 'Sep';
                break;
            case 10:
                Ret= 'Oct';
                break;
            case 11:
                Ret= 'Nov';
                break;
            case 12:
                Ret= 'Dec';
                break;

            default:
                break;
        }
        return Ret;
    }
    return (
        <div>
                <p>{new Date(Props.Props.Date).getDate()}</p>
                <p>{MonthName(new Date(Props.Props.Date).getMonth() + 1)}</p>
                <p>{new Date(Props.Props.Date).getFullYear()}</p>
        </div>
    )
}

export default HandleDate