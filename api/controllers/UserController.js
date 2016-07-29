/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
      index: function(req, res){
           res.view('userIndex');
       },
       list: function(req, res){
           User.find().then(function(data){
               res.view('userList',{
                   users: data
               });
           });
       },
       createView: function(req, res){
           res.view('userCreate');
       },
       createApi: function(req, res){
           var name = req.body.username;
           User.create({
               name: name
           }).then(function(){
              res.redirect('user/list'); 
           });
       },
       destroy: function(req, res){
           var id = req.params['id'];
           User.destroy({
               id:id
           }).then(function(){
              res.redirect('user/list'); 
           });
       }
};