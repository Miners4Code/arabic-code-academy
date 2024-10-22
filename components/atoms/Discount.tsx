import React from "react";

interface Props{
    text?: string;
    startingDate?: Date;
    endingDate?: Date;
}

const Discount:React.FC<Props> = ({text="hello world"}) => {
    return (
        <div style={{padding:"32px",backgroundColor:"#ff0000"}}>
            {text}
        </div>
    );
}

export default Discount