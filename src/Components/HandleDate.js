// import React from 'react'

function HandleDate(Props) {
    return (
        <div>
            <p className="DateD" style={{ textAlign: "center" }}>
                <p>{new Date(Props.Props.Date).getDate()}</p>
                <p>{new Date(Props.Props.Date).getMonth()+1}</p>
                <p>{new Date(Props.Props.Date).getFullYear()}</p>
            </p>
        </div>
    )
}

export default HandleDate