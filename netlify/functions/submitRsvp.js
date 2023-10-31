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

    const data = event.queryStringParameters;

    const updatePromises = Object.entries(data).map(async ([key, value]) => {
      let person = JSON.parse(value);

      await prisma.invitee.update({
        where: {
          id: person.id,
        },
        data: {
          full_name: person.full_name,
          first_name: person.first_name,
          last_name: person.last_name,
          attending_welcome_party: person.attending_welcome_party == 1 ? true : false,
          attending_wedding: person.attending_wedding == 1 ? true : false,
          modify_date: new Date(),
        },
      });
    });

    await Promise.all(updatePromises);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'RSVP data updated successfully' }),
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
