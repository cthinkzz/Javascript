const { Pool } = require('pg');

class Database {
  constructor() {
    if (!Database.instance) {
      this.pool = new Pool({
        user: 'user',
        host: 'localhost',
        database: 'my_database',
        password: 'password',
        port: 5432,
      });
      Database.instance = this;
    }
    return Database.instance;
  }

  query(sql, params) {
    return this.pool.query(sql, params);
  }
}

module.exports = new Database();
