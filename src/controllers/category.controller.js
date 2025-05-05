import { Category } from "../models/associations.js"

export const categoryController = {

    async getAll(_, res) {
        const categories = await Category.findAll({
            include: 'game'
        });
        res.json(categories);
    },

    async getOne(req, res){
        const { id } = req.params;
        const category = await Category.findByPk(id);
        res.json(category);
    },

}