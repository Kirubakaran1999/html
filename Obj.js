const student={
  Name:"Anbu",
  age:22,
  gender:'Male',
  totalmarks:Math.floor((450)/5),
  averageMark:function(){
    console.log("Total mark : ");  // student.marks 
  },

  averageMark2 (){
    console.log("Total mark : ");  // student.marks 
  },
};

const student1={
  totalmarks:485
};
student1.__proto__=student;