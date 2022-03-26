import React from "react";
import Card from "./Card";

export default props => {
    // const {min, max} = props
    return (
        <Card title="Média dos números" green>
            <div>
                <span>
                    <span>Resultado:</span>
                    {/* <span>{(min + max)/2}</span> */}
                    <span>{10}</span>
                </span>
            </div>
        </Card>
    )
}