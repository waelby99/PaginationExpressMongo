const Entity = require("../models/entity.model");

const getEntities = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const entities = await Entity.find({})
            .skip(skip)
            .limit(limit);

        const totalEntities = await Entity.countDocuments();
        const totalPages = Math.ceil(totalEntities / limit);

        res.status(200).json({
            entities,
            currentPage: page,
            totalPages,
            totalEntities,
            itemsPerPage: limit
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getEntityById = async (req, res) => {
    try {
        const { id } = req.params;
        const entity = await Entity.findById(id);
        if (!entity) {
            return res.status(404).json({ message: "Entity not found" });
        }
        res.status(200).json(entity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addEntity = async (req, res) => {
    try {
        const entity = await Entity.create(req.body);
        res.status(201).json(entity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateEntity = async (req, res) => {
    try {
        const { id } = req.params;
        const entity = await Entity.findByIdAndUpdate(id, req.body);
        if (!entity) {
            return res.status(404).json({ message: "Entity not found" });
        }
        const updatedEntity = await Entity.findById(id);
        res.status(200).json(updatedEntity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteEntity = async (req, res) => {
    try {
        const { id } = req.params;
        const entity = await Entity.findByIdAndDelete(id);
        if (!entity) {
            return res.status(404).json({ message: "Entity not found" });
        }
        res.status(200).json({ message: "Entity deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getEntities,
    getEntityById,
    addEntity,
    updateEntity,
    deleteEntity
};