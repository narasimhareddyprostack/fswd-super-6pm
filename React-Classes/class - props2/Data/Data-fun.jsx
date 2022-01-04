let Data = () => {
  let product_Name = "Iphone 12";
  let price = 49990;
  let product_img =
    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR7YlOKM-CEm9_5gAfoQANvr9SuQRXYfiX8fx-oNcDxY9_q4JE-eXCuqEJIWjIjZrQhV9gUB1DU6DQ&usqp=CAc";
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card-header">
              <img src={product_img} />
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item"> Name: {product_Name}</li>
                <li className="list-group-item">Price: {price}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Data;
