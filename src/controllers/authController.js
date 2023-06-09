
import Models from "../database/models";
import bcrypt from "bcryptjs";
import { encode } from "../helpers/jwtTokenizer";
import { v4 as uuidv4 } from "uuid";
const { Users } = Models;


class authController {
  static async signup(req, res) {
    try {
      if (req.user) {
        return res.status(400).json({
          status: 400,
          message: "User with email already exists",
        });
      }
      const { fullName, email, password} = req.body;
      const salt = await bcrypt.genSaltSync(10);
      const hashPassword = await bcrypt.hashSync(password, salt);
      await Users.create({
        id: uuidv4(),
        fullName,
        email,
        role:"User",
        password: hashPassword,
      });
      return res.status(201).json({
        status: 201,
        message: "User have been created",
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  }
  static async singin(req, res) {
    const { email, password } = req.body;
    if (!req.user) {
      return res.status(404).json({
        status: 404,
        message: "User not found",
      });
    }
    const databaseEmail = req.user.email;
    const hashPassword = req.user.password;
    const decrePassword = await bcrypt.compare(password, hashPassword);

    if (databaseEmail == email) {
      if (decrePassword) {
        const token = await encode({ email });
        return res.status(200).json({
          status: 200,
          message: "Message",
          data: {
            user: req.user,
            token,
          },
        });
      }
    }
    return res.status(401).json({
      status: 401,
      message: "Password is not correct",
    });
  }
  static async getAllUser(req, res) {
    try {
      const userData = await Users.findAll();
      res.status(200).json({
        status: 200,
        message: "all users ",
        data: userData,
      });
    } catch (error) {
      res.status(500).json({ status: 500, message: error.message });
    }
  }

  
  static async deleteUser(req, res) {
    try {
      const modelId = req.params.id;
      const found = await Users.findOne({
        where: { id: modelId },
      });
      if (found) {
        const deleteUser = await Users.destroy({
          where: { id: modelId },
        });
        return res.status(200).json({
          status: 200,
          message: "user deleted ",
          data: deleteUser,
        });
      }
      res.status(404).json({
        status: 404,
        message: "user not found",
      });
    } catch (error) {
      res
        .status(500)
        .json({ status: 500, message: "server error" + error.message });
    }
  }


  static async updateUserRole(req, res) {
    try {
      const { role } = req.body;
      const modelId = req.params.id;
      const found = await Users.findOne({
        where: { id: modelId },
      });
      if (found) {
        const updatedStudent = await Users.update(
          {
            role
          },
          {
            where: { id: modelId },
            returning: true,
          }
        );
        return res.status(201).json({
          status: 201,
          message: "User updated successfull!",
          data: updatedStudent,
        });
      }
      return res.status(404).json({
        status: 404,
        message: "User not found",
      });
    } catch (error) {
      return res
        .status(500)
        .json({ status: 500, message: "server  error" + error.message });
    }
  }
}

export default authController;