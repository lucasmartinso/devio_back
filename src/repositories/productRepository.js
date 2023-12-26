import connection from "../databases/postgres.js";

export async function allCategories()  { 
    const promise = await connection.query(`
        SELECT * FROM categories
    `)

    return promise;
}