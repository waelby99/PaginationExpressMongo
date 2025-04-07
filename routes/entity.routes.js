const express = require('express');
const router = express.Router();
const {
    getEntities,
    getEntityById,
    addEntity,
    updateEntity,
    deleteEntity
} = require("../controllers/entity.controller");

router.get('/', getEntities);
router.get('/:id', getEntityById);
router.post('/', addEntity);
router.put('/:id', updateEntity);
router.delete('/:id', deleteEntity);

module.exports = router;