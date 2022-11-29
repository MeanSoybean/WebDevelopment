import express from 'express';
import categoryService from '../services/category.service.js';

const router = express.Router();

router.get('/', async function (req, res) {
  const list = await categoryService.findAll();
  // console.log(list);
  res.render('vwCategory/index', {
    categories: list,
    empty: list.length === 0
  });
})

export default router;