import connection from "../databases/postgres.js";

export async function allCategories()  { 
    const { rows } = await connection.query(`
        SELECT * FROM categories
    `)

    return rows;
}