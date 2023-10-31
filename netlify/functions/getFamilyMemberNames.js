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

    const idString = event.queryStringParameters.query;

    const response = await prisma.$queryRaw`select id, full_name, email, attending_welcome_party, attending_wedding
                                             from Invitee
                                             where id = ${idString}
                                                or parent_id = ${idString}
                                                or id in (select id from Invitee where parent_id = ${idString});`;

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
