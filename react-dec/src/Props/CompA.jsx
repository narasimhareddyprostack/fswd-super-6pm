import React from 'react'
import CompB from './CompB'
class CompA extends React.Component{
    a=100;
    size=[38,40,42]
    emp={name:'Rahul Gandhi', id:101}

    render(){
        return <div>
            <h1>CompA</h1>
            <h5>variable Value:{this.a}</h5>
            <h2>Size :{this.size[0]}</h2>
            <h2>Size :{this.size[1]}</h2>
            <h2>Size :{this.size[2]}</h2>
            <pre>{JSON.stringify(this.emp)}</pre>

            <hr/>
            <CompB variable={this.a} array={this.size} employee={this.emp}/>
        </div>
    }
}
export default CompA