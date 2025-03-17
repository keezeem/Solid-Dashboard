import pgPromise from 'pg-promise';

const pgp = pgPromise();
const db = pgp({
  user: 'postgres',
  password: 'Eniola0411',
  host: 'localhost',
  port: 5432,
  database: 'solid_light',
});

export default db;
