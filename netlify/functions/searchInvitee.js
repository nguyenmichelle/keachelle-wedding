// netlify/functions/searchInvitee.js
const mysql = require('mysql2/promise')

exports.handler = async (event, context) => {
  const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
      // Provide SSL/TLS options here
      // Example options (customize to match your SSL/TLS configuration):
      rejectUnauthorized: false
    }
  });

  try {
    if (event.httpMethod !== 'GET') {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' }),
      };
    }

    const searchString = event.queryStringParameters.query;

    const [rows, fields] = await pool.query(`select *
                                            from themiche_wedding.Invitee
                                            where id in (select parent_id
                                                         from themiche_wedding.Invitee
                                                         where (full_name = '${searchString}' or last_name = '${searchString}' or
                                                                first_name = '${searchString}'))
                                               or parent_id in (select id
                                                                from themiche_wedding.Invitee
                                                                where (full_name = '${searchString}' or last_name = '${searchString}' or
                                                                       first_name = '${searchString}'))
                                               or parent_id in (select parent_id
                                                                from themiche_wedding.Invitee
                                                                where (full_name = '${searchString}' or last_name = '${searchString}' or
                                                                       first_name = '${searchString}'))
                                               or (full_name = '${searchString}' or last_name = '${searchString}' or
                                                   first_name = '${searchString}')
                                            ORDER BY CASE WHEN parent_id IS NULL THEN id ELSE parent_id END, id;`);

    return {
      statusCode: 200,
      body: JSON.stringify(rows)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error }),
    };
  } finally {
    pool.end();
  }
};
