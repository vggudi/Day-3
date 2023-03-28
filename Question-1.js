//1.For Loop:
var object =[
    { person: "ABC", age: 2, company: "XYZ" },
    { person: "DEF", age: 3, company: "JKL "},
    { person: "GHI", age: 4, company: "HJK" },
  ];

for (var i=0;i<object.length;i++){
    console.log("Person :" + object[i].person);
    console.log("Age :" + object[i].age);
    console.log("Company :" + object[i].company);
}
//2.For in
for (var i in object)
{
    console.log("Person :" + object[i].person);
    console.log("Age :" + object[i].age);
    console.log("Company :" + object[i].company);
}

// For of
for (var i of object)
{
    console.log("Person :" + i.person);
    console.log("Age :" + i.age);
    console.log("Company :" + i.company);
}
//For Each
object.forEach((i)=>{
    console.log("Person :" + i.person);
   console.log("Age :" + i.age);
   console.log("Company :" + i.company);
});