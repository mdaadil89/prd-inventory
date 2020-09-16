import React from 'react'
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import Count  from '../../data/chart.api';
import Rtif from './Rtif.component'
import { boolean } from 'yup';

export default class ChartsComponent extends React.Component{

  

  constructor(props) {
    super(props);
    this.count=[];
    this.counter=[];
    this.labels=[];
    this.counter1=[];
    this.labels1=[];
    this.counter2=[];
    this.labels2=[];
    this.show=true;
    this.top3=false;
    this.top5=false;
    this.top7=false;
    this.chartLabels='';
    this.chartLabels1='';
    this.chartLabels2='';
    this.ifdata=false;
    this.type='';
    
  }
  

  chartOptions = {
    responsive: true
  };

  
  
  chartData = [
    { data: this.counter, label: 'Top 3 Viewed Product' }
  ];
  chartData1 = [
    { data: this.counter1, label: 'Top 5 Viewed Product' }
  ];
  chartData2 = [
    { data: this.counter2, label: 'Top 7 Viewed Product' }
  ];
 
  
  showMenu()
  {
    this.show?this.show=false:this.show=true;
  }
  myFunction(){
    this.type='bar';
  }
  topthree()
  {
    this.top3?this.top3=false:this.top3=true;
  }

  topfive(){
    this.top5?this.top5=false:this.top5=true;
  }
  topseven(){
    this.top7?this.top7=false:this.top7=true;
  }
    
  
  componentDidMount() {
    this.counts=Count.getChartData();
    if(this.counts.length===0)
     this.ifdata=false;

     else
     {
       this.ifdata=true;
    if(this.counts.length>0)
    { for(let i=0;i<this.counts.length && i<3;i++){
      this.counter[i]=this.counts[i].counter;
      this.labels[i]=this.counts[i].name; 
      console.log("IN > 0 IF")
    }
    this.chartLabels = this.labels;}
    

    if(this.counts.length>3)
    {for(let i=0;i<this.counts.length && i<5;i++){
      this.counter1[i]=this.counts[i].counter;
      this.labels1[i]=this.counts[i].name; 
      console.log("IN > 3 IF")
    }

    this.chartLabels1 = this.labels1;
  }
    else{
      for(let i=0;i<this.counter.length;i++)
      this.counter1[i]=this.counter[i];
      this.chartLabels1=this.labels;
      console.log("IN > 3 Else")
    }

    if(this.counts.length>5)
    {for(let i=0;i<this.counts.length && i<7;i++){
      this.counter2[i]=this.counts[i].counter;
      this.labels2[i]=this.counts[i].name; 
      console.log("IN > 5 if")
    }this.chartLabels2 = this.labels2;
  }

    else if(this.counts.length>3){
      for(let i=0;i<this.counter1.length;i++)
      this.counter2[i]=this.counter1[i];
      this.chartLabels2 = this.labels1;
      console.log("IN > 3 Else if")
    }
    else
    {
      for(let i=0;i<this.counter.length;i++)
      this.counter2[i]=this.counter[i];
      this.chartLabels2=this.labels;
      console.log("IN > 5 Else ")

    }
    
    
    
    console.log(this.labels)
    // this.chartData.push({data:this.counter,label:'Top Viewed Product'})
  }}

  onChartClick(event) {
    console.log(event);
  }


  render() {
    return (
      <>
      <Rtif ifdata={true}>
      <div>
        <div class="col-md-3">
            <button onClick="showMenu()" name="customize" class="btn btn-primary">Customize View</button>
        <br/><br/>
      <Rtif show={false}>
        <div id="grpChkBox" class="card" style="width: 20rem;">
            <div class="card-header bg-dark text-white">Select to toggle Other Views</div>
            <div class="card-body">
    
                <p><input type="checkbox" name="pname" onChange="topthree()" class="card-text"  /> Top 3</p>
                <p><input type="checkbox" name="pdesc" onChange="topfive()" class="card-text"/> Top 5</p> 
                <p><input type="checkbox" name="pmanu" onChange="topseven()" class="card-text" /> Top 7</p>
            </div>
        </div>
      </Rtif>
      </div>

      <Rtif top3={true}>
        <div style="width: 60%;">
          <canvas
            baseChart
            chartType="'pie'"
            datasets="chartData"
            labels="chartLabels"
            options="chartOptions"
            legend="true"
            chartClick="onChartClick($event)">
     
          </canvas>
          <br/><br/><br/><br/><br/><br/><br/>
        </div>
      </Rtif>


      <Rtif top5={true}>
        <div style="width: 60%;">
          <canvas
            baseChart
            chartType="'bar'"
            datasets="chartData1"
            labels="chartLabels1"
            options="chartOptions"
            legend="true"
            chartClick="onChartClick($event)">
      
          </canvas>
          <br/><br/><br/><br/><br/><br/><br/>
        </div>
      </Rtif>


      <Rtif top7={true}>
        <div style="width: 60%;">
          <canvas
            baseChart
            chartType="'line'"
            datasets="chartData2"
            labels="chartLabels2"
            options="chartOptions"
            legend="true"
            chartClick="onChartClick($event)">
      
          </canvas>
          <br/><br/><br/><br/><br/><br/><br/>
        </div>
      </Rtif>
</div>
</Rtif>

<Rtif ifdata={false} >
    <div id="nodata"  style="text-align:center  ">
        <br/><br/><br/>
        <p style=" background-color:magenta; font-family: Arial, Helvetica, sans-serif; font-weight: bold; font-size: 40px; color: purple; text-align:center">
        <b>NO VIEWED DATA IN THE APP HISTORY</b>
        </p>
    </div>
</Rtif>
</>
)}


}