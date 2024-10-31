// Second Challenge


const markHeight= 1.69;
const johnHeight= 1.88;
const markMass= 78;
const johnMass= 95;

let markBMI = markMass/markHeight ** 2;  
let johnBMI = johnMass/ (johnHeight * johnHeight);


if(markBMI> johnBMI){
    console.log(`Mark's BMI is higher than John's!
                Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
}else{
    console.log(`John's BMI is higher than Mark's!
                John's BMI ${johnBMI} is higher than Mark's ${markBMI}`);
}