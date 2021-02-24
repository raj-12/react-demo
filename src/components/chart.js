import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import "./bootstrap.min.css";



class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData1:props.chartData1,
      chartData2:props.chartData2,
      chartData3:props.chartData3,
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render(){
    return (
      <div className="chart"  >
        <div className="row">
       
        <div className="col-lm-6 col-sm-12 col-md-6">
        <Bar

          data={this.state.chartData1}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Population of countries',
              fontSize:25
            },
            
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            },
          }}
         
            />
        </div>


      <div className="col-lm-6 col-sm-12 col-md-6">
        <Line
          data={this.state.chartData2}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Population of countries',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
    </div>
    <center>
    <div className="col-lm-6 col-sm-12 col-md-6" >
        <Pie
          data={this.state.chartData3}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Area of countries',
              fontSize:25
            },
            // legend:{
            //   display:this.props.displayLegend,
            //   position:"right"
            // }
          }}
        />
        </div>
        </center>
        </div>
       
      </div>
    )
  }
}

export default Chart;
