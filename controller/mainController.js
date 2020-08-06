const Blog = require('../models/Blog');
const mongoose = require("mongoose");

exports.getAllData = (req,res,next) => {
    Blog.find()
        .then((blogs)=>{
             res.status(201).json(blogs);
        })
        .catch((err)=>{
              res.status(404).json({"Messagse": "Something went Wrong! "})
        })
}

exports.getSingleData = (req,res,next) => {
    const _id = req.params._id;
    console.log(_id);

    Blog.findById({_id : _id})
      .then((blog)=>{
          console.log(blog);
          res.status(210).json(blog); 
      })
      .catch((err)=>{
             console.log(err)
             console.log('Sorryy !');
      })
}

exports.postSingleData =  (req,res,next) => {
    const title = req.body.title; 
    const image = req.body.image;
    const body = req.body.body;

    const newBlog = new Blog({
        title : title,
        image : image,
        body : body
    });


    newBlog.save()
      .then((data)=> {
            console.log('data Inserted SuccessFully !');
            res.status(201).json({
                "message": "Data Inserted SuccessFully !"
            })
      })
      .catch(e => {
          console.log('dose Not Insetred !')
          console.log(e)
          res.status(500).json({
              "Message": "Something went wrong Data not Inserted !"
          })
      })

}


exports.updateSingleData = (req,res,next) => {
    const _id = req.body._id;
    const title = req.body.title;
    const image =req.body.image;
    const body = req.bo
    Blog.updateOne({_id : _id},{$set : {title : title,image : image,body:body}})
      .then(()=>{
           console.log('Updated SuccessFully !');
           res.status(201).json({
               "Message": "Updated SuccessFully"
           })
      })
      .catch((err)=>{
          console.log('someThing went Wrong !');
          res.status.json({
              "message": "Not Updated"
          })
      })
}

exports.deleteSingleData = (req,res,next) => {
   const _id = req.body._id;

   Blog.deleteOne()
    .then((blog)=>{
       console.log(blog)
       console.log('Blog Deleted SuccessFully !');
       res.status(201).json({
           "message": "Blog Deleted SuccessFully! "
       })
    })
    .catch((err)=>{
         console.log(err);
    })
}