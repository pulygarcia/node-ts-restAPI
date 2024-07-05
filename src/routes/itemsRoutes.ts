import express from 'express';
import { createItem, findItemByID, getAllItems, updateItem } from '../services/items.services';

const router = express.Router();

router.get('/', getAllItems);
router.get('/:id', findItemByID);
router.post('/', createItem);
router.put('/:id', updateItem);



export default router