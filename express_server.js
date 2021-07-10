const exp=require('express');
const ex=exp();
ex.get('/',(req,res)=>
{
   res.send("Hello  Prabhat lets work on NODEJS SERVER !!")
})
ex.get('/alien',(req,res)=>
{
   res.send("Hello  Prabhat lets meet alien !!")
})
ex.get('/alien/:id',(req,res)=>
{
    const id=req.params.id;
   if(id==20)
      res.send("Hello, t20 has "+id+"over")
   else if(id==50)
     res.send("Hello, ODI has "+id+"over")
   else
      res.send("Test is a 5 days game")
})
ex.listen(8000,()=>
{
  console.log("RUNNING>>>");
}
)