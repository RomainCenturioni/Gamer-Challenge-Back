import { User } from "../models/associations.js"

export const userController = {

    async getAll(_, res) {
        const users = await User.findAll();
        res.json(users);
    },

    async getOne(req, res){
        const { id } = req.params;
        const user = await User.findByPk(id);
        res.json(user);
    }

}