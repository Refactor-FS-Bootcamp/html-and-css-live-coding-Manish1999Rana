let salaries={
    John:100,
    Ann:160,
    Pete:130,
}
let sum=0;
let value=Object.values(salaries);
for(i=0;i<value.length;i++)
sum+=value[i];
salaries.sum=sum;
console.log(salaries);