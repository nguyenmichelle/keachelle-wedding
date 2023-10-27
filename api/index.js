// index.js
import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

/**
 * logic for our api will go here
 */
export default {
  path: '/api',
  handler: app
}

app.get('/searchInvitee', async (req, res) => {
  const { query } = req
  const searchString = req.query.query

  const response =
    await prisma.$queryRaw`select *
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
                           ORDER BY CASE WHEN parent_id IS NULL THEN id ELSE parent_id END, id;`

  res.send(response)
})

app.get('/getFamilyMemberNames', async (req, res) => {
  const { query } = req
  const idString = req.query.query

  const response =
    await prisma.$queryRaw`select id, full_name, email, attending_welcome_party, attending_wedding
                           from Invitee
                           where id = ${idString}
                              or parent_id = ${idString}
                              or id in (select id from Invitee where parent_id = ${idString});`

  res.send(response)
})

app.get('/submitRsvp', async (req, res) => {
  const { query } = req
  const data = req.query

  Object.entries(data).map(async function ([key, value]) {
    let person = JSON.parse(value)
    await prisma.invitee.update({
      where: {
        id: person.id,
      },
      data: {
        full_name: person.full_name,
        first_name: person.first_name,
        last_name: person.last_name,
        attending_welcome_party: person.attending_welcome_party == 1? true : false,
        attending_wedding: person.attending_wedding == 1? true : false,
        modify_date: new Date()
      },
    })
  });

  res.sendStatus(200);
})
