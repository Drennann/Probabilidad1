import React from "react"
import Grafico from "./Grafico"

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {cvx: null}
    }

    componentDidMount(){
       let c = document.getElementById("myChart");
       let cvx = c.getContext("2d");
       if(this.state.cvx === null){
           this.cambiarEstado(cvx);
       }
    }

    async cambiarEstado(cvx){
        await this.setState({cvx: cvx})
        console.log(this.state)
        console.log("HOLA")
    }

    render(){
       return (
           <div>
               <canvas id="myChart"></canvas>
               <Grafico cvx={this.state.cvx}/>
           </div>
       ) 
    }
}

export default Main