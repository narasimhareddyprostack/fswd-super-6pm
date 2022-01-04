import React from "react";
import Cart from "../PropEx/Cart";
class Data extends React.Component {
  product_Name = "Iphone 12";
  price = 49990;
  product_img =
    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR7YlOKM-CEm9_5gAfoQANvr9SuQRXYfiX8fx-oNcDxY9_q4JE-eXCuqEJIWjIjZrQhV9gUB1DU6DQ&usqp=CAc";

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <img src={this.product_img} alt="" />
              </div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">
                    {" "}
                    Name: {this.product_Name}
                  </li>
                  <li className="list-group-item">Price: {this.price}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Cart p_Name={this.product_Name} message={"Good Morning"} />
      </div>
    );
  }
}
export default Data;
