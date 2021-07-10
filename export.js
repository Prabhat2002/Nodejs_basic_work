var exporting=require("./destinyExpo.js")

sum_result= exporting.ad(40,50);
sub_result= exporting.sub(50,25);
console.log("Sum is "+sum_result);
console.log("sub is "+sub_result);
temp=exporting.prime(23);
    if(temp==0)
    {
        console.log("PRIME NUMBER");
    }
    else
    {
        console.log("NOT PRIME");
    }
pal_check=exporting.palendrome(1908);
console.log(pal_check);    