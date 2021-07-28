import React from "react";
import Chart from 'chart.js/auto';
import {nPasosDespues, transformarDato} from "./auxiliares"

console.log(Chart)

class Grafico extends React.Component{
    constructor(props){
        super(props);
        this.state= {cvx: null, load: false};
        
    }

    componentDidMount(){
    }
    componentDidUpdate(){
      if(!this.state.load){
        this.cambiarEstado();
      }
      if(this.state.load){
        this.armarGrafico();
      }
    }

    simularDatos(){
      let data = [];
      for(let i = 0; i < 100; i++){
        let res = transformarDato(nPasosDespues([0,0], 50));
        data.push(res)
      }
      console.log(data)
      this.metrosRecorridos(data);
      return data;
    }

    metrosRecorridos(ps){
      let res = 0;
      for(let i = 0; i < ps.length; i++){
        res = res + Math.sqrt(Math.abs(ps[i]["x"])^2+Math.abs(ps[i]["y"])^2)
      }
      console.log(res/ps.length)
    }

    armarGrafico(){

      const data = {
        datasets: [{
          label: 'Posiciones Finales',
          data: this.simularDatos(),
          pointRadius: 10,
          backgroundColor: 'green'
        }],
      };

      const config = {
        type: 'scatter',
        data: data,
        options: {
          scales: {
            x: {
              min:-10,
              max:10
            },
            y:{
              min: -10,
              max:10
            }
          }
        }
      };

      var myChart = new Chart(this.state.cvx, config)
    }

    cambiarEstado(){
      this.setState({
        cvx: this.props.cvx
      })
      this.setState({
        load: true
      })
    }

    render(){
        return (<div>
        </div>)
    }
}

export default Grafico;