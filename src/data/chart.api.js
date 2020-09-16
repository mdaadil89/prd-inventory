export default class Count {
    constructor() {
    var id;
    var name;
    var counter;
    var newdata =Count; 
    var counts=[];
    var count=[];
    }
  

  static addCounter(data){

    this.newdata={id:data.id,name:data.name,counter:1};
          
          if(this.counts.length===0){
          this.counts.push(this.newdata)
          console.log(" IN IF")
          console.log(this.counts.length)
        }
        else if(this.counts.findIndex(x=> x.id === this.newdata.id)>-1)
        {
          let index = this.counts.findIndex(x=> x.id === this.newdata.id)
          this.counts[index].counter++;
          console.log(" IN ELSE IF")
        }
        else
        {console.log(" IN ELSE ")
          this.counts.push(this.newdata);
        }
      // console.log(this.counts.findIndex(x=> x.id === this.newdata.id))
        this.counts.forEach(x => console.log(x.counter))
        console.log(this.counts)
         
  }

  

  static getChartData(){
    let sortedArray= this.counts && this.counts.sort((obj1, obj2) => {
      if (obj1.counter < obj2.counter) {
          return 1;
      }
  
      if (obj1.counter > obj2.counter) {
          return -1;
      }
  
      return 0;
  });
  console.log(sortedArray)
    return this.counts;
  }

}