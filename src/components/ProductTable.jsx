import React from "react";
import ProductRow from "./ProductRow";

export default function ProductTable({products}) {
    return (
        <div  className='container'>
            <table className="table">
                <thead >
                    <tr className="table-header">
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody >
                {products.map((elem) => {
                    return (
                        <ProductRow className="table-body"
                            name={elem.name}
                            price={elem.price}
                            inStock={elem.inStock}
                        />
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}