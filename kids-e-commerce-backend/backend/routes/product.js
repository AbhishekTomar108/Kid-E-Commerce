const express = require("express");
const ProductCart = require("../models/ProductCart");
const router = express.Router();
const bcrypt = require('bcryptjs');
const { body, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
var fetchuser = require('../middleware/fetchuser');
const product = require('./Products.json')
const mongoose = require('mongoose');
const { Schema } = mongoose;
const productlist = require('./Products.json')

const JWT_SECRET = "mmm";

// fetch product data

router.get("/products", async (req, res) => {
    try {
     
      res.send(product);
    } 
    catch (error) {
      console.error(error.message);
      res.status(500).send({"error":error.message});
    }
  });

// Route-1 Create a user using :"POST /api/auth". No Log in required
router.post(

  "/addproduct",fetchuser,
  async (req, res) => {
    try{
        const {productName, totalItem, productPrice} = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ "error": errors.array() });
        } 
        const productCart = new ProductCart({
            productName, totalItem, productPrice, user:req.user.id
        })  
        const savedproductCart = await productCart.save();
        res.json({"success":true, "savedproductCart":savedproductCart})
    }
    catch(error){
        console.error(error.message);
        res.status(500).send({"error":"internal server error"});
    }
   
  }
);

router.get('/fetchalluserproduct',fetchuser, async (req,res)=>
{
    try{
   const productCart  = await ProductCart.find({user:req.user.id})
   
   res.json({"success":true, productCart:productCart});
    }
    catch(error){
        console.error(error.message)
        res.send({"error":error.message})
    }
    // res.json([])
})

router.post(
    "/login",
    [
      body("email").isEmail(),
      body("password", "password cannot be blank").exists(),
    ],
    async (req, res) => {
      // if there are error return bad request and error
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({ "error": errors.array() });
      }
      const { email, password } = req.body;
      try {
        let user = await User.findOne({ email });
        if (!user) {
          return res
            .status(400)
            .json({ "error": "please log in with correct details" });
        }
        const passwordcompare = await bcrypt.compare(password, user.password);
        if (!passwordcompare) {
          return res
            .status(400)
            .json({ "error": "please log in with correct details" });
        }

     
        const data = {
          user: {
            id: user.id,
          },
        };
  
        const authtoken = await jwt.sign(data, JWT_SECRET);
        console.log(authtoken + " and " + JWT_SECRET);
  
      
        res.send({"success":true,"user":user, "authToken":authtoken})
      } catch (error) {
        console.error(error.message);
        res.status(500).send({"error":"some error occured"});
      }
    }
  );
  
  //ROUTE-3 Get loggein details using "POST /api/auth/getuser". login Required
  
  router.get("/getuser", fetchuser, async (req, res) => {
    try {
      console.log("running from try ");
      const UserId = req.user.id;
      const user = await User.findById(UserId).select("-password");
      res.send({"success":true,"user":user});
    } 
    catch (error) {
      console.error(error.message);
      res.status(500).send({"error":"some error occured"});
      res.json({error:error.message});
    }
  });

  // fetch product data

  router.get("/products", async (req, res) => {
    try {
     
      res.send(product);
    } 
    catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured"+error.message);
      res.json({"error":error.message});
    }
  });


module.exports = router;