const db = require('../utils/database');

module.exports = class ClassDemo {
  constructor(id, title, description, imageUrl, srcUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.srcUrl = srcUrl;
  }

  // READ
  static fetchAll() {
    return db.execute('SELECT * FROM classdemo');
  }
};
