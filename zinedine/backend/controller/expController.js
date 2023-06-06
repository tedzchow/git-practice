const Expense = require('../model/Expense');

exports.addexp=(req,res)=>{
    const newexp=new Expense({
        date:req.body.date,
        description:req.body.description,
        amount:req.body.amount,
        user_id:req.body.id
    })
    newexp.save()
        .then(re=>{
            return res.json(re);
        })
        .catch(err=>{return res.status(400).json(err)});
}
exports.readexp=(req,res)=>{
    Expense.find({user_id:req.params.id})
        .then(exps=> res.json(exps))
        .catch(err=>{return res.status(400).json(err)});
}
exports.updateexp=(req,res)=>{
    Expense.findByIdAndUpdate(req.params.id,{date:req.body.date,description:req.body.description,amount:req.body.amount})
        .then(exps=> res.json(exps))
        .catch(err=>{return res.status(400).json(err)});
}
exports.deleteexp=(req,res)=>{
    Expense.findByIdAndRemove(req.params.id)
        .then(exps=> res.json(exps))
        .catch(err=>{return res.status(400).json(err)});
}
