import React, { Component } from 'react'
class Counter extends Component {
    state = {
        product_Name: "ASUS ROG Strix Ryzen 7 Octa Core 4800H",
        price: 78999,
        image: "https://rukminim1.flixcart.com/image/224/224/ku4ezrk0/computer/j/5/j/na-gaming-laptop-asus-original-imag7bhddrbuzrvs.jpeg?q=90",
        Qty: 1
    }
    incrHandler = () => {
        this.setState({ Qty: this.state.Qty + 1 })
    }
    decrHandler = () => {
        this.setState({ Qty: this.state.Qty - 1 })
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-10">
                        <table className="table table-hover ">
                            <thead className="bg-secondary">
                                <th>Product Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total Price</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.product_Name}</td>
                                    <td><img src={this.state.image} alt="" height='70%' width='70%' /></td>
                                    <td>{this.state.price}</td>
                                    <td>
                                        <i class="fa fa-minus-circle" onClick={this.decrHandler}></i>
                                        {this.state.Qty}
                                        <i class="fa fa-plus-circle" onClick={this.incrHandler}></i>
                                    </td>

                                    <td>{this.state.price * this.state.Qty}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        )
    }
}

export default Counter
