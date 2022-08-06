import React from "react";

export default function ProductRow({name, price, inStock}) {
    return (
        <div className="productRow">
            <tr>
                <td style={{color: inStock === true ? "black" : "red" }}>{name}</td>
                <td>{price}</td>
            </tr>
        </div>
    )

}