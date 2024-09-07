class Car{
  startCar(){
    console.log("Car is Started");
  }
  stopCar(){
    console.log("Car is Stopped");
  }
  setBrand(brand){
    this.brand=brand;
  }
}

let cool=new Car();
cool.setBrand("Audi");
console.log(cool);
