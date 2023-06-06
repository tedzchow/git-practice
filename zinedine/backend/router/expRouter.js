const route=require('express').Router();
const passport=require('passport');

const {addexp,readexp,updateexp,deleteexp} = require('../controller/expController');

route.post('/addexp',passport.authenticate("jwt", { session: false }),addexp)
route.get('/readexp/:id',passport.authenticate("jwt", { session: false }),readexp)
route.put('/updateexp/:id',passport.authenticate("jwt", { session: false }),updateexp)
route.delete('/delexp/:id',passport.authenticate("jwt", { session: false }),deleteexp)
module.exports = route;
