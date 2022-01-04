let Cart = (props) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <li>Name:{props.p_Name}</li>
              <li>Message:{props.message}</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
