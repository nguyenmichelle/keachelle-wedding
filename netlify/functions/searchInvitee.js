// netlify/functions/searchInvitee.js
// const { PrismaClient } = require('@prisma/client');

exports.handler = async (event, context) => {
  // const prisma = new PrismaClient();
  const mysql = require('mysql2');

  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
      // Provide SSL/TLS options here
      // Example options (customize to match your SSL/TLS configuration):
      rejectUnauthorized: false
    }
  };

  const pool = mysql.createPool(dbConfig);
  const promisePool = pool.promise();

  try {
    if (event.httpMethod !== 'GET') {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' }),
      };
    }
    console.log('here2')


    const searchString = event.queryStringParameters.query;
    console.log('here3')


    const [rows, fields] = await promisePool.query(`select *
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
    console.log('here4')

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
    // await prisma.$disconnect();
  }
};
