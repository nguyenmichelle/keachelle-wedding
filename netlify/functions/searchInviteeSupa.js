const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    flowType: 'pkce',
  },
});

async function getIds (searchString) {
  const searchArray = searchString.split(/\s+/);

  const { data, idsError } = await supabase
    .from('invitee')
    .select('id')
    .or(`first_name.eq.${searchString},full_name.eq.${searchString},last_name.eq.${searchString},and(first_name.ilike.${searchArray[0]}%,last_name.eq.${searchArray[searchArray.length - 1]})`);

  return data.map(a=>a.id)
}

async function getParentIds (searchString) {
  const searchArray = searchString.split(/\s+/);

  const { data, idsError } = await supabase
    .from('invitee')
    .select('parent_id')
    .or(`first_name.eq.${searchString},full_name.eq.${searchString},last_name.eq.${searchString},and(first_name.ilike.${searchArray[0]}%,last_name.eq.${searchArray[searchArray.length - 1]})`);

  return data.map(a => a.parent_id ? a.parent_id : 3000);
}


exports.handler = async (event, context) => {
  try {
    if (event.httpMethod !== 'GET') {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' }),
      };
    }

    const searchString = event.queryStringParameters.query.toString().toUpperCase();

    const ids = await getIds(searchString);
    const parentIds = await getParentIds(searchString);
    const { data, error } = await supabase
      .from('invitee')
      .select('parent_id, full_name, first_name, id, last_name, address_line_1')
      .not('id', 'in', '(1,63)')
      .or(`parent_id.in.(${ids.join(',')}), id.in.(${parentIds.join(',')}), parent_id.in.(${parentIds.join(',')}), first_name.eq.${searchString},full_name.eq.${searchString},last_name.eq.${searchString}`)
      .order('id', { ascending: true });

    if (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Database Syntax Error' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
}
