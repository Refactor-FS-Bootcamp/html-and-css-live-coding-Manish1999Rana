function idEmpty(object){
    if(Object.entries(object).length>0){
        return false;
    }
    else 
    return true;
}
let man={};
console.log(idEmpty(man));
man.name="Manish";
console.log(idEmpty(man));