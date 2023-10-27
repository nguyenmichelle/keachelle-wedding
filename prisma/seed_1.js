const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main () {
  const invitee141 = await prisma.invitee.upsert({
    where: { id: 141 },
    update: {},
    create: {
      id: 141,
      full_name: 'JULIE RICKS',
      first_name: 'JULIE',
      last_name: 'RICKS',
      parent_id: 2,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null
    }
  })

  const invitee140 = await prisma.invitee.upsert({
    where: { id: 150 },
    update: {},
    create: {
      id: 150,
      full_name: 'KELSEY LYNCH',
      first_name: 'KELSEY',
      last_name: 'LYNCH',
      parent_id: null,
      address_line_1: '7621 S BRINKERHOFF DR',
      address_line_2: null,
      city: 'WEST JORDAN',
      state: 'UT',
      postal_code: '84084',
      country: 'UNITED STATES',
      email: 'TAYLORKE22@GMAIL.COM',
      number: '4356211926'
    }
  })

  const invitee151 = await prisma.invitee.upsert({
    where: { id: 151 },
    update: {},
    create: {
      id: 151,
      full_name: 'MAXI LOPEX',
      first_name: 'MAXI',
      last_name: 'LOPEZ',
      parent_id: 150,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null
    }
  })
  // const invitee142 = await prisma.invitee.upsert({
  //   where: { id: 142 },
  //   update: {},
  //   create: {
  //     id: 142,
  //     full_name: 'ARRIYA KHOPHA',
  //     first_name: 'ARRIYA',
  //     last_name: 'KHOPHA',
  //     parent_id: null,
  //     address_line_1: '2877 WEST MYERS LANE',
  //     address_line_2: null,
  //     city: 'RIVERTON',
  //     state: 'UT',
  //     postal_code: '84065',
  //     country: 'UNITED STATES',
  //     email: 'ARRIYAKHOPHA@GMAIL.COM',
  //     number: '8019536482'
  //   }
  // })
  // const invitee143 = await prisma.invitee.upsert({
  //   where: { id: 143 },
  //   update: {},
  //   create: {
  //     id: 143,
  //     full_name: 'PATRICK KHOPHA',
  //     first_name: 'PATRICK',
  //     last_name: 'KHOPHA',
  //     parent_id: 142,
  //     address_line_1: null,
  //     address_line_2: null,
  //     city: null,
  //     state: null,
  //     postal_code: null,
  //     country: null,
  //     email: null,
  //     number: null
  //   }
  // })
  // const invitee144 = await prisma.invitee.upsert({
  //   where: { id: 144 },
  //   update: {},
  //   create: {
  //     id: 144,
  //     full_name: 'TAYLOR MAXFIELD',
  //     first_name: 'TAYLOR',
  //     last_name: 'MAXFIELD',
  //     parent_id: 142,
  //     address_line_1: null,
  //     address_line_2: null,
  //     city: null,
  //     state: null,
  //     postal_code: null,
  //     country: null,
  //     email: null,
  //     number: null
  //   }
  // })
  // const invitee145 = await prisma.invitee.upsert({
  //   where: { id: 145 },
  //   update: {},
  //   create: {
  //     id: 145,
  //     full_name: 'LONG DINH',
  //     first_name: 'LONG',
  //     last_name: 'DINH',
  //     parent_id: null,
  //     address_line_1: '5507 PHILADELPHIAN CT',
  //     address_line_2: null,
  //     city: 'WEST JORDAN',
  //     state: 'UT',
  //     postal_code: '84081',
  //     country: 'USA',
  //     email: 'DINHDUCLONG2015@YAHOO.COM',
  //     number: '8323824704'
  //   }
  // })
  // const invitee146 = await prisma.invitee.upsert({
  //   where: { id: 146 },
  //   update: {},
  //   create: {
  //     id: 146,
  //     full_name: 'TIN TRAN',
  //     first_name: 'TIN',
  //     last_name: 'TRAN',
  //     parent_id: 145,
  //     address_line_1: null,
  //     address_line_2: null,
  //     city: null,
  //     state: null,
  //     postal_code: null,
  //     country: null,
  //     email: null,
  //     number: null
  //   }
  // })
  // const invitee147 = await prisma.invitee.upsert({
  //   where: { id: 147 },
  //   update: {},
  //   create: {
  //     id: 147,
  //     full_name: 'MIA DINH',
  //     first_name: 'MIA',
  //     last_name: 'DINH',
  //     parent_id: 145,
  //     address_line_1: null,
  //     address_line_2: null,
  //     city: null,
  //     state: null,
  //     postal_code: null,
  //     country: null,
  //     email: null,
  //     number: null
  //   }
  // })
  // const invitee148 = await prisma.invitee.upsert({
  //   where: { id: 148 },
  //   update: {},
  //   create: {
  //     id: 148,
  //     full_name: 'MASON DINH',
  //     first_name: 'MASON',
  //     last_name: 'DINH',
  //     parent_id: 145,
  //     address_line_1: null,
  //     address_line_2: null,
  //     city: null,
  //     state: null,
  //     postal_code: null,
  //     country: null,
  //     email: null,
  //     number: null
  //   }
  // })
  // const invitee149 = await prisma.invitee.upsert({
  //   where: { id: 149 },
  //   update: {},
  //   create: {
  //     id: 149,
  //     full_name: 'COREY RICKS',
  //     first_name: 'COREY',
  //     last_name: 'RICKS',
  //     parent_id: null,
  //     address_line_1: '697 TREJO ST',
  //     address_line_2: 'APT 224',
  //     city: 'REXBURG',
  //     state: 'IDAHO',
  //     postal_code: '83440',
  //     country: 'UNITED STATES',
  //     email: 'CRICKS100@GMAIL.COM',
  //     number: '2083900504'
  //   }
  // })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
