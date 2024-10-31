const markHeight= 1.69;
const johnHeight= 1.88;
const markMass= 78;
const johnMass= 95;

let markBMI = markMass/markHeight ** 2;  
let johnBMI = johnMass/ (johnHeight * johnHeight);

let markHigherBMI = false;

if(markBMI> johnBMI){
    markHigherBMI = true;
    console.log(markHigherBMI);
}else{
    console.log(markHigherBMI);
}