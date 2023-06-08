import Models from "../database/models";
import { decode, encode } from "../helpers/jwtTokenizer";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";
import { Sequelize } from "sequelize";
const { Op, where, cast, col } = Sequelize;

dotenv.config();
const {  Districts,Schools,Members,Families} = Models;
class familyController{
  static async addFamily(req, res) {
    const {name,fatherName,motherName,schoolId,members}=req.body
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
      if (req.family) {
        return res.status(400).json({
          status: 400,
          message: "Family with this name already exist, please use another!",
        });
      }
      await Families.create({
        id:uuidv4(),
        name,
        fatherName,
        motherName,
        members,
        schoolId,
      });
      return res.status(200).json({
        status: 200,
        message: "Family have been Successfuly Added!",
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  }
  static async getFamilies(req, res) {
    try {
      const userData = await Families.findAll();
      res.status(200).json({
        status: 200,
        message: "all Members",
        data: userData,
      });
    } catch (error) {
      res.status(500).json({ status: 500, message: error.message });
    }
  }

  static async deleteFamily(req, res) {
    try {
      const modelId = req.params.id;
      const found = await Families.findOne({
        where: { id: modelId },
      });
      if (found) {
        const deleteUser = await Families.destroy({
          where: { id: modelId },
        });
        return res.status(200).json({
          status: 200,
          message: " deleted ",
          data: deleteUser,
        });
      }
      res.status(404).json({
        status: 404,
        message: "Family not found",
      });
    } catch (error) {
      res
        .status(500)
        .json({ status: 500, message: "server error" + error.message });
    }
  }
}

export default familyController;