let CompB = (props)=>{
    return <div>
        <h2>Component B</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h4>Name:{props.employee.name}</h4>
        <h5>Size:{props.array[2]}</h5>
    </div>
}
export default CompB
