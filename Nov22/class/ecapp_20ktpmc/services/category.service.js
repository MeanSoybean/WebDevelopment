import db from '../utils/db.js';

export default {
  findAll() {
    // return [
    //   { CatID: 1, CatName: 'Laptop' },
    //   { CatID: 2, CatName: 'Mobile' },
    //   { CatID: 3, CatName: 'Quần áo' },
    //   { CatID: 4, CatName: 'Giày dép' },
    //   { CatID: 5, CatName: 'Trang sức' },
    //   { CatID: 6, CatName: 'Khác' },
    // ];
    return db('categories');
  }
}