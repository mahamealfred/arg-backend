import Models from "../database/models";
import { decode, encode } from "../helpers/jwtTokenizer";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";
import { Sequelize } from "sequelize";

const { Op, where, cast, col } = Sequelize;
//const mailgun = require("mailgun-js");
dotenv.config();
const {  Districts,Schools} = Models;
class schoolController{
  static async addSchool(req, res) {
    const {name,districtId,type}=req.body
    try {
      const checkDistrict =await Districts.findOne({
        where:{id:districtId},
      })
      if(!checkDistrict){
        return res.status(400).json({
          status: 400,
          message: "District doesn't exist",
        });
      }
      if (req.school) {
        return res.status(400).json({
          status: 400,
          message: "School with this name already exist, please use another!",
        });
      }
      await Schools.create({
        id:uuidv4(),
        name:name,
        districtId,
        type
      });
      return res.status(200).json({
        status: 200,
        message: "School have been Successfuly Added!",
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  }
  static async getSchools(req, res) {
    try {
      const userData = await Schools.findAll();
      res.status(200).json({
        status: 200,
        message: "all users ",
        data: userData,
      });
    } catch (error) {
      res.status(500).json({ status: 500, message: error.message });
    }
  }
}

export default schoolController;