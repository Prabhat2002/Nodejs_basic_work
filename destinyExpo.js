function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
  return a-b;
}
function prime(a)
{
    var x;
    var temp=0;
    for(x=2;x<a;x++)
    {
       if(a%x==0)
       {
          temp++;
          break;
       }
    }
    return temp;
}
function palendrome(a)
{
    var p=a;
    var q=0;
    while(a!=0)
    {
       m=a%10 
       q=q+m*10;
       a=a/10;
    }
    if(p==q)
    {
        return 'Palendrome' ;
    }
    else
    {
        return 'not palendrome';
    }
}
exports.ad=add;
exports.sub=sub;
exports.prime=prime;
exports.palendrome=palendrome;