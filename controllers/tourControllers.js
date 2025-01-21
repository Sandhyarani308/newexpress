const fs = require('fs')
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

exports.checkid=(req,res,next,val)=>{
    console.log(`Tour id is ${val}`);
    if(req.params.id*1>tours.length){
        return res.status(404).json({
            status:"fail",
            message:"Invalid id"
        });
    }
    next();
}
exports.checkbody=(req,res,next)=>{
    if(!req.body.name|| !req.body.price){
        return res.status(400).json({
            status:"fail",
            message:"Missing name or price"
        })
    }
    next();
}
exports.getalltours=(req,res)=>{

    res.status(200).json({
        status:"sucess",
        results:tours.length,
        data:{
          tours,
        }
    });
}
exports.getonetour=(req,res)=>{
    console.log(req.params);
    const id = req.params.id*1;
    
    const tour = tours.find(el=>el.id===id);
    res.status(200).json({
        status:"sucess",
        data:{
            tour
        }
    });
}
exports.cretetour=(req,res)=>{
    const newid = tours[tours.length-1]+1;
    const newTour=Object.assign({id:newid},req.body);
    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err =>{
        res.status(200).json({
            status:"sucess",
            data:{
                tour:newTour
            }
        });
});
}
exports.updatetour=(req,res)=>{
    
    res.status(200).json({
        status:'sucess',
        data:{
            tour:'<Updates tour here>',      
          }
    });
}
exports.deletetour = (req,res)=>{
    
    res.status(200).json({
        status:'sucess',
        data:null
    });
}