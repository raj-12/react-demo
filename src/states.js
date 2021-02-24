import React, { Component } from 'react';
import './App.css';
import Chart from './components/chart';


class States extends Component { 
  constructor(){
   super();
   this.state = {
     chartData1:{},
     chartData2:{},
     chartData3:{},
   }
 }

 componentWillMount(){
   this.getChartData();
 }

 getChartData(){
    let con_name=[];
    let con_pop=[];
    let con_lan=[];
    let con_code=[];
    let labels=[];

    for(var i=0;i<40;i++){
      con_name.push(this.props.country_data[i].name)
        con_pop.push(this.props.country_data[i].population) 
        con_lan.push(this.props.country_data[i].area) 
        con_code.push(this.props.country_data[i].alpha2Code) 
        labels.push(i+1)
    }

   let Colors=['rgba(255, 99, 132, 0.6)','rgba(54, 162, 235, 0.6)','#B08EA2', 'rgba(255, 206, 86, 0.6)','rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)', 'rgba(255, 99, 132, 0.6)','rgba(153, 102, 255, 0.6)','rgba(255, 159, 64, 0.6)','rgba(255, 99, 132, 0.6)','#B08EA2', 
        'rgba(255, 99, 132, 0.6)','rgba(54, 162, 235, 0.6)','#B08EA2', 'rgba(255, 206, 86, 0.6)','rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)','rgba(255, 159, 64, 0.6)','rgba(255, 99, 132, 0.6)','#B08EA2', 'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)','#B08EA2', 
        'rgba(255, 206, 86, 0.6)','rgba(75, 192, 192, 0.6)','rgba(153, 102, 255, 0.6)','rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)','rgba(255, 99, 132, 0.6)','rgba(54, 162, 235, 0.6)','#B08EA2', 'rgba(255, 206, 86, 0.6)','rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)','rgba(255, 159, 64, 0.6)','rgba(255, 99, 132, 0.6)','#B08EA2', 'rgba(255, 99, 132, 0.6)','rgba(54, 162, 235, 0.6)','#B08EA2', 'rgba(255, 206, 86, 0.6)','rgba(75, 192, 192, 0.6)','rgba(153, 102, 255, 0.6)',
       ]

   this.setState({
     chartData1:{
       labels:con_name,

       datasets:[
         {
           label:'Salary of Employee',
           data:con_pop,
           backgroundColor:Colors
         }
       ]
     },
     chartData2:{
        labels:con_name,

        datasets:[
          {
            label:'Age of Employee',
            data:con_pop,
            backgroundColor:Colors
          }
        ]
      },
 
      chartData3:{
        labels:con_code ,

        datasets:[
          {
            label:'Polpulation Contries',
            data:con_lan,
            backgroundColor:Colors
          }
        ]
      }
   }
   
   );
 }

 render() {
   return (
     <div className="App">
        <Chart chartData1={this.state.chartData1} 
        chartData2={this.state.chartData2} 
        chartData3={this.state.chartData3}
         legendPosition="right"/>
     </div>
   );
 }
}

export default States;



