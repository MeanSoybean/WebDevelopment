import knexObj from 'knex';

export default knexObj({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'ecdb_c'
  }
});