import Models from "../database/models";
import { decode, encode } from "../helpers/jwtTokenizer";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";
import { Sequelize } from "sequelize";

const { Op, where, cast, col } = Sequelize;
//const mailgun = require("mailgun-js");
dotenv.config();
const {  Provinces} = Models;
class provinceController{
  static async addProvince(req, res) {
    const {provinceName}=req.body
    try {
      if (req.province) {
        return res.status(400).json({
          status: 400,
          message: "Province with this name already exist, please use another!",
        });
      }
      await  Provinces.create({
        id:uuidv4(),
        provinceName: provinceName,
      });
      return res.status(200).json({
        status: 200,
        message: "Province have been Successfuly Added!",
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  }
  static async getProvinces(req, res) {
    try {
      const userData = await Provinces.findAll();
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

export default provinceController;