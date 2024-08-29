import express from 'express';
import { createItem, findItemByID, getAllItems, updateItem, removeItem } from '../services/items.services';

const router = express.Router();

router.get('/', getAllItems);
router.get('/:id', findItemByID);
router.post('/', createItem);
router.put('/:id', updateItem);
router.delete('/:id', removeItem);



export default router