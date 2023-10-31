// netlify/functions/searchInvitee.js
const { PrismaClient } = require('@prisma/client');

exports.handler = async (event, context) => {
  const prisma = new PrismaClient();

  try {
    if (event.httpMethod !== 'GET') {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' }),
      };
    }

    const searchString = event.queryStringParameters.query;

    const response = await prisma.$queryRaw`select *
                                            from themiche_wedding.Invitee
                                            where id in (select parent_id
                                                         from themiche_wedding.Invitee
                                                         where (full_name = ${searchString} or last_name = ${searchString} or
                                                                first_name = ${searchString}))
                                               or parent_id in (select id
                                                                from themiche_wedding.Invitee
                                                                where (full_name = ${searchString} or last_name = ${searchString} or
                                                                       first_name = ${searchString}))
                                               or parent_id in (select parent_id
                                                                from themiche_wedding.Invitee
                                                                where (full_name = ${searchString} or last_name = ${searchString} or
                                                                       first_name = ${searchString}))
                                               or (full_name = ${searchString} or last_name = ${searchString} or
                                                   first_name = ${searchString})
                                            ORDER BY CASE WHEN parent_id IS NULL THEN id ELSE parent_id END, id;`;

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  } finally {
    await prisma.$disconnect();
  }
};
