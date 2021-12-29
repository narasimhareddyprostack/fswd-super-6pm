import CompB from "./CompB";

function CompA() {
  let product_Name = "Iphone 12 min";
  return (
    <div>
      <h4>Component A - Has some Data :{product_Name}</h4>
      <hr />
      <CompB props_data={product_Name} />
    </div>
  );
}
export default CompA;
