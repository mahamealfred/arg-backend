import Models from "../database/models";
import { decode, encode } from "../helpers/jwtTokenizer";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";
import { Sequelize } from "sequelize";

const { Op, where, cast, col } = Sequelize;
//const mailgun = require("mailgun-js");
dotenv.config();
const {  Districts,Schools,Commitees} = Models;
class commiteeController{
  static async addCommitee(req, res) {
    const {fullName,schoolId,role}=req.body
    try {
      const checkSchool =await Schools.findOne({
        where:{id:schoolId},
      })
      if(!checkSchool){
        return res.status(400).json({
          status: 400,
          message: "School doesn't exist",
        });
      }
      
      await Commitees.create({
        id:uuidv4(),
        fullName,
        schoolId,
        role
      });
      return res.status(200).json({
        status: 200,
        message: "Commitee member have been Successfuly Added!",
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  }
  static async getCommittees(req, res) {
    try {
      const userData = await Commitees.findAll();
      res.status(200).json({
        status: 200,
        message: "all  ",
        data: userData,
      });
    } catch (error) {
      res.status(500).json({ status: 500, message: error.message });
    }
  }
}

export default commiteeController;