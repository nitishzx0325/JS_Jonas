const arr=[3,1,2,4];
const area=function(radius){
    return Math.PI*radius*radius;
}
const dia=function(radius){
    return 2*radius;
}
const calulateRadius=function(logic,radius){
    const ans=[]
    for(let i=0;i<arr.length;i++){
        ans.push(logic(radius[i]));
    }
return ans;
}

console.log(calulateRadius(area,arr));

const circumference=function(arr){
    const ans=[]
    for(let i=0;i<arr.length;i++){
        ans.push(2*(Math.PI*arr[i]));
    }
return ans;
}
console.log(circumference(arr));

const diameter=function(arr,logic){
    const ans=[]
    for(let i=0;i<arr.length;i++){
        ans.push(logic(arr[i]));
    }
return ans;
}
// console.log(diameter(arr));
console.log("---------------------- radius");
console.log(diameter(arr,dia));