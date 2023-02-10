let menu={
    width:200,
    height:300,
    title:"My menu",
}
function multiplyNumeric(obj){
    keys=Object.keys(obj);
    for(let i=0;i<keys.length;i++){
        if(typeof obj[keys[i]]=="number"){
            obj[keys[i]]=obj[keys[i]]*2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu);