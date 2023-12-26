import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();
const { Pool } = pg;

console.log(process.env.POSTGRES_DATABASE);

const databaseConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
};

const connection = new Pool(databaseConfig);
export default connection;