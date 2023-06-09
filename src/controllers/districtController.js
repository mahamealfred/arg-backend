import Models from "../database/models";
import { decode, encode } from "../helpers/jwtTokenizer";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";
import { Sequelize } from "sequelize";

const { Op, where, cast, col } = Sequelize;
//const mailgun = require("mailgun-js");
dotenv.config();
const {  Districts,Provinces} = Models;
class districtController{
  static async addDistrict(req, res) {
    const {districtName,provinceId}=req.body
    try {
      const checkProvince =await Provinces.findOne({
        where:{id:provinceId},
      })
     
      if(!checkProvince){
        return res.status(400).json({
          status: 400,
          message: "Province doesn't exist",
        });
      }
      if (req.district) {
        return res.status(400).json({
          status: 400,
          message: "District with this name already exist, please use another!",
        });
      }
      await  Districts.create({
        id:uuidv4(),
        districtName,
        provinceId
      });
      return res.status(200).json({
        status: 200,
        message: "District have been Successfuly Added!",
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  }
  static async getDristrits(req, res) {
    try {
      const userData = await Districts.findAll();
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

export default districtController;