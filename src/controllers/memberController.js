import Models from "../database/models";
import { decode, encode } from "../helpers/jwtTokenizer";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";
import { Sequelize } from "sequelize";
const { Op, where, cast, col } = Sequelize;

dotenv.config();
const {  Districts,Schools,Members} = Models;
class memberController{
  static async addMember(req, res) {
    const {firstName,lastName,schoolId,gender}=req.body
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
      if (req.member) {
        return res.status(400).json({
          status: 400,
          message: "Member with this name already exist, please use another!",
        });
      }
      await Members.create({
        id:uuidv4(),
        firstName,
        lastName,
        schoolId,
        gender
      });
      return res.status(200).json({
        status: 200,
        message: "Member have been Successfuly Added!",
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  }
  static async getMembers(req, res) {
    try {
      const userData = await Members.findAll();
      res.status(200).json({
        status: 200,
        message: "all Members ",
        data: userData,
      });
    } catch (error) {
      res.status(500).json({ status: 500, message: error.message });
    }
  }

  static async deleteMember(req, res) {
    try {
      const modelId = req.params.id;
      const found = await Members.findOne({
        where: { id: modelId },
      });
      if (found) {
        const deleteUser = await Members.destroy({
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
        message: "Member not found",
      });
    } catch (error) {
      res
        .status(500)
        .json({ status: 500, message: "server error" + error.message });
    }
  }
}

export default memberController;