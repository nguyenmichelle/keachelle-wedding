const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main () {
  const invitee1 = await prisma.invitee.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      full_name: 'SAMANTHA BUTTERFIELD',
      first_name: 'SAMANTHA',
      last_name: 'BUTTERFIELD',
      parent_id: null,
      address_line_1: '939 W POTOMAC DR',
      address_line_2: null,
      city: 'MURRAY',
      state: 'UT',
      postal_code: '84123',
      country: 'UNITED STATES',
      email: 'SAM.BUTTERFIELD89@GMAIL.COM',
      number: '8016912396'
    }
  })
  const invitee63 = await prisma.invitee.upsert({
    where: { id: 63 },
    update: {},
    create: {
      id: 63,
      full_name: 'ANDREW BUTTERFIELD',
      first_name: 'ANDREW',
      last_name: 'BUTTERFIELD',
      parent_id: 1,
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
  const invitee2 = await prisma.invitee.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      full_name: 'RYAN RICKS',
      first_name: 'RYAN',
      last_name: 'RICKS',
      parent_id: null,
      address_line_1: '4427 PUTTING GREEN DR.',
      address_line_2: null,
      city: 'CORONA',
      state: 'CA',
      postal_code: '92883',
      country: 'USA',
      email: 'JULIE@RICKSFAMILY.ORG',
      number: '9518589300'
    }
  })
  const invitee3 = await prisma.invitee.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      full_name: 'NICOLE NGUYEN',
      first_name: 'NICOLE',
      last_name: 'NGUYEN',
      parent_id: null,
      address_line_1: '460 MONTEREY BLVD APT 206',
      address_line_2: null,
      city: 'SAN FRANCISCO',
      state: 'CA',
      postal_code: '94127',
      country: 'UNITED STATES',
      email: 'NICOLE.Y.NGUYEN@GMAIL.COM',
      number: '8016542437'
    }
  })
  const invitee64 = await prisma.invitee.upsert({
    where: { id: 64 },
    update: {},
    create: {
      id: 64,
      full_name: 'PLUS ONE',
      first_name: 'PLUS',
      last_name: 'ONE',
      parent_id: 3,
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
  const invitee4 = await prisma.invitee.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      full_name: 'VIRGIL RICKS',
      first_name: 'VIRGIL',
      last_name: 'RICKS',
      parent_id: null,
      address_line_1: '450 N PARK AVE',
      address_line_2: null,
      city: 'SHELLEY',
      state: 'ID',
      postal_code: '83274',
      country: null,
      email: 'VIRGILRICKS@GMAIL.COM',
      number: '208-881-1658'
    }
  })
  const invitee65 = await prisma.invitee.upsert({
    where: { id: 65 },
    update: {},
    create: {
      id: 65,
      full_name: 'RAQUEL RICKS',
      first_name: 'RAQUEL',
      last_name: 'RICKS',
      parent_id: 4,
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
  const invitee5 = await prisma.invitee.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      full_name: 'RHETT KAUFMAN',
      first_name: 'RHETT',
      last_name: 'KAUFMAN',
      parent_id: null,
      address_line_1: '967 CREEKHILL LANE APT #10',
      address_line_2: null,
      city: 'MIDVALE',
      state: 'UT',
      postal_code: '84047',
      country: 'US',
      email: 'RHETT_KAUFMAN@YAHOO.COM',
      number: '4357603249'
    }
  })
  const invitee66 = await prisma.invitee.upsert({
    where: { id: 66 },
    update: {},
    create: {
      id: 66,
      full_name: 'KAYA KAUFMAN',
      first_name: 'KAYA',
      last_name: 'KAUFMAN',
      parent_id: 5,
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
  const invitee6 = await prisma.invitee.upsert({
    where: { id: 6 },
    update: {},
    create: {
      id: 6,
      full_name: 'REBECCA CRAMER',
      first_name: 'REBECCA',
      last_name: 'CRAMER',
      parent_id: null,
      address_line_1: '1149 GLENGARY PL',
      address_line_2: null,
      city: 'COLORADO SPRINGS',
      state: 'CO',
      postal_code: '80921',
      country: null,
      email: 'JEFFANDBECCA@HOTMAIL.COM',
      number: '7195790567'
    }
  })
  const invitee67 = await prisma.invitee.upsert({
    where: { id: 67 },
    update: {},
    create: {
      id: 67,
      full_name: 'JEFF CRAMER',
      first_name: 'JEFF',
      last_name: 'CRAMER',
      parent_id: 6,
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
  const invitee7 = await prisma.invitee.upsert({
    where: { id: 7 },
    update: {},
    create: {
      id: 7,
      full_name: 'CLAY KAUFMAN',
      first_name: 'CLAY',
      last_name: 'KAUFMAN',
      parent_id: null,
      address_line_1: '1837 N BERRA BLVD',
      address_line_2: 'C304',
      city: 'TOOELE',
      state: 'UT',
      postal_code: '84074',
      country: 'UNITED STATES',
      email: 'KAUFMAN831@GMAIL.COM',
      number: '4357602114'
    }
  })
  const invitee68 = await prisma.invitee.upsert({
    where: { id: 68 },
    update: {},
    create: {
      id: 68,
      full_name: 'NAILA KAUFMAN',
      first_name: 'NAILA',
      last_name: 'KAUFMAN',
      parent_id: 7,
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
  const invitee8 = await prisma.invitee.upsert({
    where: { id: 8 },
    update: {},
    create: {
      id: 8,
      full_name: 'RYNDON RICKS',
      first_name: 'RYNDON',
      last_name: 'RICKS',
      parent_id: null,
      address_line_1: '2551 E 300 N',
      address_line_2: null,
      city: 'SAINT ANTHONY',
      state: 'ID',
      postal_code: '83445',
      country: 'UNITED STATES',
      email: 'RYNDON@GMAIL.COM',
      number: '2085578082'
    }
  })
  const invitee69 = await prisma.invitee.upsert({
    where: { id: 69 },
    update: {},
    create: {
      id: 69,
      full_name: 'REBECCA THAYNE-RICKS',
      first_name: 'REBECCA',
      last_name: 'THAYNE-RICKS',
      parent_id: 8,
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
  const invitee9 = await prisma.invitee.upsert({
    where: { id: 9 },
    update: {},
    create: {
      id: 9,
      full_name: 'JAY CRITCHLOW',
      first_name: 'JAY',
      last_name: 'CRITCHLOW',
      parent_id: null,
      address_line_1: '9809 S. FARMSTEAD CIRCLE',
      address_line_2: null,
      city: 'SOUTH JORDAN',
      state: 'UT',
      postal_code: '84095',
      country: 'USA',
      email: 'PAULACRITCHLOW@MAC.COM',
      number: '801-824-0031'
    }
  })
  const invitee70 = await prisma.invitee.upsert({
    where: { id: 70 },
    update: {},
    create: {
      id: 70,
      full_name: 'PAULA CRITCHLOW',
      first_name: 'PAULA',
      last_name: 'CRITCHLOW',
      parent_id: 9,
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
  const invitee71 = await prisma.invitee.upsert({
    where: { id: 71 },
    update: {},
    create: {
      id: 71,
      full_name: 'MARSHA KAUFMAN',
      first_name: 'MARSHA',
      last_name: 'KAUFMAN',
      parent_id: 9,
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
  const invitee72 = await prisma.invitee.upsert({
    where: { id: 72 },
    update: {},
    create: {
      id: 72,
      full_name: 'COLBY CRITCHLOW',
      first_name: 'COLBY',
      last_name: 'CRITCHLOW',
      parent_id: 9,
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
  const invitee10 = await prisma.invitee.upsert({
    where: { id: 10 },
    update: {},
    create: {
      id: 10,
      full_name: 'NANCY STOUT',
      first_name: 'NANCY',
      last_name: 'STOUT',
      parent_id: null,
      address_line_1: '320 BLUEBELL STREET',
      address_line_2: null,
      city: 'REXBURG',
      state: 'ID',
      postal_code: '83440',
      country: 'USA',
      email: 'STOUTNANCY@HOTMAIL.COM',
      number: '6157969763'
    }
  })
  const invitee73 = await prisma.invitee.upsert({
    where: { id: 73 },
    update: {},
    create: {
      id: 73,
      full_name: 'JORJI TAYLOR',
      first_name: 'JORJI',
      last_name: 'TAYLOR',
      parent_id: 10,
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
  const invitee11 = await prisma.invitee.upsert({
    where: { id: 11 },
    update: {},
    create: {
      id: 11,
      full_name: 'DEVON MEANS',
      first_name: 'DEVON',
      last_name: 'MEANS',
      parent_id: null,
      address_line_1: '3834 W TAMARISK COURT',
      address_line_2: null,
      city: 'SOUTH JORDAN',
      state: 'UT',
      postal_code: '84009',
      country: 'UNITED STATES',
      email: 'DEVON.MEANS@HOTMAIL.COM',
      number: '8019161392'
    }
  })
  const invitee74 = await prisma.invitee.upsert({
    where: { id: 74 },
    update: {},
    create: {
      id: 74,
      full_name: 'MIKAYLA MEANS',
      first_name: 'MIKAYLA',
      last_name: 'MEANS',
      parent_id: 11,
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
  const invitee12 = await prisma.invitee.upsert({
    where: { id: 12 },
    update: {},
    create: {
      id: 12,
      full_name: 'BRIAN VAN TREASE',
      first_name: 'BRIAN',
      last_name: 'VAN TREASE',
      parent_id: null,
      address_line_1: '420 W CADBURY DRIVE APT E308',
      address_line_2: null,
      city: 'SOUTH JORDAN',
      state: 'UT',
      postal_code: '84095',
      country: null,
      email: 'BVANTREASE661@GMAIL.COM',
      number: '6614331535'
    }
  })
  const invitee75 = await prisma.invitee.upsert({
    where: { id: 75 },
    update: {},
    create: {
      id: 75,
      full_name: 'SHAYLEE RIDDLE',
      first_name: 'SHAYLEE',
      last_name: 'RIDDLE',
      parent_id: 12,
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
  const invitee13 = await prisma.invitee.upsert({
    where: { id: 13 },
    update: {},
    create: {
      id: 13,
      full_name: 'ALEX MOSS',
      first_name: 'ALEX',
      last_name: 'MOSS',
      parent_id: null,
      address_line_1: '5074 E TAHOE WAY',
      address_line_2: null,
      city: 'EAGLE MOUNTAIN',
      state: 'UT',
      postal_code: '84005',
      country: 'UNITED STATES',
      email: 'MOSS.ALEX22@GMAIL.COM',
      number: '8018600513'
    }
  })
  const invitee76 = await prisma.invitee.upsert({
    where: { id: 76 },
    update: {},
    create: {
      id: 76,
      full_name: 'NATALIE MOSS',
      first_name: 'NATALIE',
      last_name: 'MOSS',
      parent_id: 13,
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
  const invitee14 = await prisma.invitee.upsert({
    where: { id: 14 },
    update: {},
    create: {
      id: 14,
      full_name: 'JULIE NGUYEN',
      first_name: 'JULIE',
      last_name: 'NGUYEN',
      parent_id: null,
      address_line_1: '5442 W RIDGE PEAK DR',
      address_line_2: null,
      city: 'WEST JORDAN',
      state: 'UT',
      postal_code: '84081',
      country: 'UNITED STATES',
      email: 'SCULIE.NGUYEN@OUTLOOK.COM',
      number: '8018096079'
    }
  })
  const invitee77 = await prisma.invitee.upsert({
    where: { id: 77 },
    update: {},
    create: {
      id: 77,
      full_name: 'SCOTT NGUYEN',
      first_name: 'SCOTT',
      last_name: 'NGUYEN',
      parent_id: 14,
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
  const invitee78 = await prisma.invitee.upsert({
    where: { id: 78 },
    update: {},
    create: {
      id: 78,
      full_name: 'NORA NGUYEN',
      first_name: 'NORA',
      last_name: 'NGUYEN',
      parent_id: 14,
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
  const invitee15 = await prisma.invitee.upsert({
    where: { id: 15 },
    update: {},
    create: {
      id: 15,
      full_name: 'NGOC DIEP',
      first_name: 'NGOC',
      last_name: 'DIEP',
      parent_id: null,
      address_line_1: '4004 DOWNING ST',
      address_line_2: null,
      city: 'ANNANDALE',
      state: 'VA',
      postal_code: '22003',
      country: 'UNITED STATES',
      email: 'HUONGTT1971@YAHOO.COM',
      number: '7036534372'
    }
  })
  const invitee79 = await prisma.invitee.upsert({
    where: { id: 79 },
    update: {},
    create: {
      id: 79,
      full_name: 'LEE NGUYEN',
      first_name: 'LEE',
      last_name: 'NGUYEN',
      parent_id: 15,
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
  const invitee16 = await prisma.invitee.upsert({
    where: { id: 16 },
    update: {},
    create: {
      id: 16,
      full_name: 'KYRA JOHN',
      first_name: 'KYRA',
      last_name: 'JOHN',
      parent_id: null,
      address_line_1: '696 N 400 W',
      address_line_2: null,
      city: 'LOGAN',
      state: 'UT',
      postal_code: '84321',
      country: 'UNITED STATES',
      email: 'JOHNKYRA488@GMAIL.COM',
      number: '3852713056'
    }
  })
  const invitee80 = await prisma.invitee.upsert({
    where: { id: 80 },
    update: {},
    create: {
      id: 80,
      full_name: 'KEVIN GUADARRAMA',
      first_name: 'KEVIN',
      last_name: 'GUADARRAMA',
      parent_id: 16,
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
  const invitee17 = await prisma.invitee.upsert({
    where: { id: 17 },
    update: {},
    create: {
      id: 17,
      full_name: 'THAI TRAN',
      first_name: 'THAI',
      last_name: 'TRAN',
      parent_id: null,
      address_line_1: '658 E APPLE TREE DR.',
      address_line_2: null,
      city: 'SANDY',
      state: 'UT',
      postal_code: '84070',
      country: 'UNITED STATES',
      email: 'ITZTHAITRAN@GMAIL.COM',
      number: '8018595372'
    }
  })
  const invitee81 = await prisma.invitee.upsert({
    where: { id: 81 },
    update: {},
    create: {
      id: 81,
      full_name: 'DUNG NINH',
      first_name: 'DUNG',
      last_name: 'NINH',
      parent_id: 17,
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
  const invitee82 = await prisma.invitee.upsert({
    where: { id: 82 },
    update: {},
    create: {
      id: 82,
      full_name: 'BICH TRAN',
      first_name: 'BICH',
      last_name: 'TRAN',
      parent_id: 17,
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
  const invitee83 = await prisma.invitee.upsert({
    where: { id: 83 },
    update: {},
    create: {
      id: 83,
      full_name: 'CRYSTAL NINH',
      first_name: 'CRYSTAL',
      last_name: 'NINH',
      parent_id: 17,
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
  const invitee84 = await prisma.invitee.upsert({
    where: { id: 84 },
    update: {},
    create: {
      id: 84,
      full_name: 'SOPHIA NINH',
      first_name: 'SOPHIA',
      last_name: 'NINH',
      parent_id: 17,
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
  const invitee85 = await prisma.invitee.upsert({
    where: { id: 85 },
    update: {},
    create: {
      id: 85,
      full_name: 'LEXI NINH',
      first_name: 'LEXI',
      last_name: 'NINH',
      parent_id: 17,
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
  const invitee18 = await prisma.invitee.upsert({
    where: { id: 18 },
    update: {},
    create: {
      id: 18,
      full_name: 'DANIEL HARDEN',
      first_name: 'DANIEL',
      last_name: 'HARDEN',
      parent_id: null,
      address_line_1: '555 N SIR ANTHONY CIRCLE',
      address_line_2: null,
      city: 'SALT LAKE CITY',
      state: 'UT',
      postal_code: '84116',
      country: 'UNITED STATES',
      email: 'DANIELSHARDEN@GMAIL.COM',
      number: '8019136399'
    }
  })
  const invitee19 = await prisma.invitee.upsert({
    where: { id: 19 },
    update: {},
    create: {
      id: 19,
      full_name: 'LE VU-DIAZ',
      first_name: 'LE',
      last_name: 'VU-DIAZ',
      parent_id: null,
      address_line_1: '3051 W MOUNT LOGAN WAY',
      address_line_2: null,
      city: 'TAYLORSVILLE',
      state: 'UT',
      postal_code: '84129',
      country: 'UNITED STATES',
      email: '00LEVU@GMAIL.COM',
      number: '8016629386'
    }
  })
  const invitee86 = await prisma.invitee.upsert({
    where: { id: 86 },
    update: {},
    create: {
      id: 86,
      full_name: 'NICK DIAZ',
      first_name: 'NICK',
      last_name: 'DIAZ',
      parent_id: 19,
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
  const invitee20 = await prisma.invitee.upsert({
    where: { id: 20 },
    update: {},
    create: {
      id: 20,
      full_name: 'UAN TRAN',
      first_name: 'UAN',
      last_name: 'TRAN',
      parent_id: null,
      address_line_1: '100 MEADOW LN',
      address_line_2: null,
      city: 'STAFFORD',
      state: 'VA',
      postal_code: '22556',
      country: 'USA',
      email: 'UANTRAN67@YAHOO.COM',
      number: '5712140655'
    }
  })
  const invitee87 = await prisma.invitee.upsert({
    where: { id: 87 },
    update: {},
    create: {
      id: 87,
      full_name: 'ANGELA TRAN',
      first_name: 'ANGELA',
      last_name: 'TRAN',
      parent_id: 20,
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
  const invitee21 = await prisma.invitee.upsert({
    where: { id: 21 },
    update: {},
    create: {
      id: 21,
      full_name: 'ANH TRAN',
      first_name: 'ANH',
      last_name: 'TRAN',
      parent_id: null,
      address_line_1: '3707 CHANEL RD',
      address_line_2: null,
      city: 'ANNADALE',
      state: 'VA',
      postal_code: '22003',
      country: 'UNITED STATES',
      email: 'ANNIEME91@GMAIL.COM',
      number: '7037407773'
    }
  })
  const invitee88 = await prisma.invitee.upsert({
    where: { id: 88 },
    update: {},
    create: {
      id: 88,
      full_name: 'QUYNH NGUYEN',
      first_name: 'QUYNH',
      last_name: 'NGUYEN',
      parent_id: 21,
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
  const invitee22 = await prisma.invitee.upsert({
    where: { id: 22 },
    update: {},
    create: {
      id: 22,
      full_name: 'MYLAN CHAU',
      first_name: 'MYLAN',
      last_name: 'CHAU',
      parent_id: null,
      address_line_1: '5467 W 4455 S',
      address_line_2: null,
      city: 'WEST VALLEY CITY',
      state: 'UT',
      postal_code: '84120',
      country: 'UNITED STATES',
      email: 'MYLAN_CHAU@YAHOO.COM',
      number: '8018159381'
    }
  })
  const invitee23 = await prisma.invitee.upsert({
    where: { id: 23 },
    update: {},
    create: {
      id: 23,
      full_name: 'AUTUMROSE STUBBS',
      first_name: 'AUTUMROSE',
      last_name: 'STUBBS',
      parent_id: null,
      address_line_1: '8336 S VALKYRIE WAY',
      address_line_2: null,
      city: 'WEST JORDAN',
      state: 'UT',
      postal_code: '84088-4478',
      country: 'UNITED STATES',
      email: 'AUTUMROSE1234@GMAIL.COM',
      number: '8015298094'
    }
  })
  const invitee90 = await prisma.invitee.upsert({
    where: { id: 90 },
    update: {},
    create: {
      id: 90,
      full_name: 'DOMINIC NGUYEN',
      first_name: 'DOMINIC',
      last_name: 'NGUYEN',
      parent_id: 23,
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
  const invitee24 = await prisma.invitee.upsert({
    where: { id: 24 },
    update: {},
    create: {
      id: 24,
      full_name: 'PHAT TRAN',
      first_name: 'PHAT',
      last_name: 'TRAN',
      parent_id: null,
      address_line_1: '7159 SORRENTO WAY',
      address_line_2: null,
      city: 'WEST JORDAN',
      state: 'UT',
      postal_code: '84081',
      country: 'UNITED STATES',
      email: 'TRANPHATONLINE@YAHOO.COM',
      number: '8018778899'
    }
  })
  const invitee91 = await prisma.invitee.upsert({
    where: { id: 91 },
    update: {},
    create: {
      id: 91,
      full_name: 'QUYEN TRAN',
      first_name: 'QUYEN',
      last_name: 'TRAN',
      parent_id: 24,
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
  const invitee92 = await prisma.invitee.upsert({
    where: { id: 92 },
    update: {},
    create: {
      id: 92,
      full_name: 'LUCY TRAN',
      first_name: 'LUCY',
      last_name: 'TRAN',
      parent_id: 24,
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
  const invitee25 = await prisma.invitee.upsert({
    where: { id: 25 },
    update: {},
    create: {
      id: 25,
      full_name: 'LISA VU',
      first_name: 'LISA',
      last_name: 'VU',
      parent_id: null,
      address_line_1: '1055 W PROVINCE WAY UNIT 109',
      address_line_2: null,
      city: 'SAINT GEORGE',
      state: 'UT',
      postal_code: '84129-6848',
      country: 'UNITED STATES',
      email: 'LISATRVU@GMAIL.COM',
      number: '8019195138'
    }
  })
  const invitee26 = await prisma.invitee.upsert({
    where: { id: 26 },
    update: {},
    create: {
      id: 26,
      full_name: 'CHỊ BÉ',
      first_name: 'CHỊ',
      last_name: 'BÉ',
      parent_id: null,
      address_line_1: '7159 S SORRENTO WAY',
      address_line_2: null,
      city: 'WEST JORDAN',
      state: 'UT',
      postal_code: '84081',
      country: 'USA',
      email: 'NTRAN121088@GMAIL.COM',
      number: '8019153064'
    }
  })
  const invitee94 = await prisma.invitee.upsert({
    where: { id: 94 },
    update: {},
    create: {
      id: 94,
      full_name: 'BAC 2 TRAI',
      first_name: 'BAC 2',
      last_name: 'TRAI',
      parent_id: 26,
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
  const invitee95 = await prisma.invitee.upsert({
    where: { id: 95 },
    update: {},
    create: {
      id: 95,
      full_name: 'BAC 2 GÁI',
      first_name: 'BAC 2',
      last_name: 'GÁI',
      parent_id: 26,
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
  const invitee27 = await prisma.invitee.upsert({
    where: { id: 27 },
    update: {},
    create: {
      id: 27,
      full_name: 'BRIAN KIM',
      first_name: 'BRIAN',
      last_name: 'KIM',
      parent_id: null,
      address_line_1: '3684 S STATION PARK COVE',
      address_line_2: null,
      city: 'WEST VALLEY CITY',
      state: 'UT',
      postal_code: '84128-2434',
      country: 'UNITED STATES',
      email: 'KIM.BK.BRIAN@GMAIL.COM',
      number: '8018889634'
    }
  })
  const invitee28 = await prisma.invitee.upsert({
    where: { id: 28 },
    update: {},
    create: {
      id: 28,
      full_name: 'ERIKA CHANTHANOME',
      first_name: 'ERIKA',
      last_name: 'CHANTHANOME',
      parent_id: null,
      address_line_1: '4460 W 6200 S',
      address_line_2: null,
      city: 'KEARNS',
      state: 'UT',
      postal_code: '84118',
      country: 'UNITED STATES',
      email: 'ERIKACHANTHANOME@GMAIL.COM',
      number: '8018846675'
    }
  })
  const invitee96 = await prisma.invitee.upsert({
    where: { id: 96 },
    update: {},
    create: {
      id: 96,
      full_name: 'ANTHONY CHANTHANOME',
      first_name: 'ANTHONY',
      last_name: 'CHANTHANOME',
      parent_id: 28,
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
  const invitee97 = await prisma.invitee.upsert({
    where: { id: 97 },
    update: {},
    create: {
      id: 97,
      full_name: 'ALEJANDRO OLIVAREZ',
      first_name: 'ALEJANDRO',
      last_name: 'OLIVAREZ',
      parent_id: 28,
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
  const invitee98 = await prisma.invitee.upsert({
    where: { id: 98 },
    update: {},
    create: {
      id: 98,
      full_name: 'ANDY KHAMPHASITHIVONG',
      first_name: 'ANDY',
      last_name: 'KHAMPHASITHIVONG',
      parent_id: 28,
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
  const invitee99 = await prisma.invitee.upsert({
    where: { id: 99 },
    update: {},
    create: {
      id: 99,
      full_name: 'SAM KHAMPHASITHIVONG',
      first_name: 'SAM',
      last_name: 'KHAMPHASITHIVONG',
      parent_id: 28,
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
  const invitee100 = await prisma.invitee.upsert({
    where: { id: 100 },
    update: {},
    create: {
      id: 100,
      full_name: 'PUMA XAYASO',
      first_name: 'PUMA',
      last_name: 'XAYASO',
      parent_id: 28,
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
  const invitee29 = await prisma.invitee.upsert({
    where: { id: 29 },
    update: {},
    create: {
      id: 29,
      full_name: 'JESSICA KAING',
      first_name: 'JESSICA',
      last_name: 'KAING',
      parent_id: null,
      address_line_1: '266 4TH AVE',
      address_line_2: 'APT. 104',
      city: 'SALT LAKE CITY',
      state: 'UT',
      postal_code: '84103',
      country: 'USA',
      email: 'JESSICAKAING@GMAIL.COM',
      number: '8016166513'
    }
  })
  const invitee101 = await prisma.invitee.upsert({
    where: { id: 101 },
    update: {},
    create: {
      id: 101,
      full_name: 'CHRISTOPHER OWENS',
      first_name: 'CHRISTOPHER',
      last_name: 'OWENS',
      parent_id: 29,
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
  const invitee30 = await prisma.invitee.upsert({
    where: { id: 30 },
    update: {},
    create: {
      id: 30,
      full_name: 'KIP CRITCHLOW',
      first_name: 'KIP',
      last_name: 'CRITCHLOW',
      parent_id: null,
      address_line_1: '4726 W. EMMA MINE DR.',
      address_line_2: null,
      city: 'HERRIMAN',
      state: 'UT',
      postal_code: '84096',
      country: 'UNITED STATES',
      email: 'KIPDCRITCHLOW@GMAIL.COM',
      number: '8016806672'
    }
  })
  const invitee102 = await prisma.invitee.upsert({
    where: { id: 102 },
    update: {},
    create: {
      id: 102,
      full_name: 'NICOLE CRITCHLOW',
      first_name: 'NICOLE',
      last_name: 'CRITCHLOW',
      parent_id: 30,
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
  const invitee103 = await prisma.invitee.upsert({
    where: { id: 103 },
    update: {},
    create: {
      id: 103,
      full_name: 'COLTON CRITCHLOW',
      first_name: 'COLTON',
      last_name: 'CRITCHLOW',
      parent_id: 30,
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
  const invitee139 = await prisma.invitee.upsert({
    where: { id: 139 },
    update: {},
    create: {
      id: 139,
      full_name: 'LAYLA CRITCHLOW',
      first_name: 'LAYLA',
      last_name: 'CRITCHLOW',
      parent_id: 30,
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
    where: { id: 140 },
    update: {},
    create: {
      id: 140,
      full_name: 'JAXON CRITCHLOW',
      first_name: 'JAXON',
      last_name: 'CRITCHLOW',
      parent_id: 30,
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
  const invitee31 = await prisma.invitee.upsert({
    where: { id: 31 },
    update: {},
    create: {
      id: 31,
      full_name: 'PAXTON TRAN',
      first_name: 'PAXTON',
      last_name: 'TRAN',
      parent_id: null,
      address_line_1: '3439 WILLOW VALLEY RD',
      address_line_2: null,
      city: 'SOUTH JORDAN',
      state: 'UT',
      postal_code: '84095',
      country: 'US',
      email: 'TRANPAXTON@GMAIL.COM',
      number: '801-867-8653'
    }
  })
  const invitee32 = await prisma.invitee.upsert({
    where: { id: 32 },
    update: {},
    create: {
      id: 32,
      full_name: 'JUSTICE BROWN',
      first_name: 'JUSTICE',
      last_name: 'BROWN',
      parent_id: null,
      address_line_1: '2241 E LANEY AVE',
      address_line_2: '#G',
      city: 'HOLLADAY',
      state: 'UT',
      postal_code: '84119',
      country: null,
      email: 'JUSTICE.ABROWN93@GMAIL.COM',
      number: '8910297920'
    }
  })
  const invitee33 = await prisma.invitee.upsert({
    where: { id: 33 },
    update: {},
    create: {
      id: 33,
      full_name: 'MITCHELL DOM',
      first_name: 'MITCHELL',
      last_name: 'DOM',
      parent_id: null,
      address_line_1: '572 WEST 2200 NORTH',
      address_line_2: null,
      city: 'LEHI',
      state: 'UT',
      postal_code: '84043',
      country: 'UNITED STATES',
      email: 'MDOM027@GMAIL.COM',
      number: '8018034391'
    }
  })
  const invitee34 = await prisma.invitee.upsert({
    where: { id: 34 },
    update: {},
    create: {
      id: 34,
      full_name: 'PRACHI KARNA',
      first_name: 'PRACHI',
      last_name: 'KARNA',
      parent_id: null,
      address_line_1: '1070 BIRCHBROOK CIR',
      address_line_2: null,
      city: 'COTTONWOOD HEIGHTS',
      state: 'UT',
      postal_code: '84047',
      country: 'UNITED STATES',
      email: 'PRACHIKARNA@HOTMAIL.COM',
      number: '8019490917'
    }
  })
  const invitee35 = await prisma.invitee.upsert({
    where: { id: 35 },
    update: {},
    create: {
      id: 35,
      full_name: 'JAMES KAYSAVANG',
      first_name: 'JAMES',
      last_name: 'KAYSAVANG',
      parent_id: null,
      address_line_1: '496 WEST 1ST AVE',
      address_line_2: null,
      city: 'MIDVALE',
      state: 'UT',
      postal_code: '84047',
      country: 'UNITED STATES',
      email: 'KAYSAVANG@YAHOO.COM',
      number: '8018914647'
    }
  })
  const invitee104 = await prisma.invitee.upsert({
    where: { id: 104 },
    update: {},
    create: {
      id: 104,
      full_name: 'JJ KAYSAVANG',
      first_name: 'JJ',
      last_name: 'KAYSAVANG',
      parent_id: 35,
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
  const invitee36 = await prisma.invitee.upsert({
    where: { id: 36 },
    update: {},
    create: {
      id: 36,
      full_name: 'TRAVIS MITCHELL',
      first_name: 'TRAVIS',
      last_name: 'MITCHELL',
      parent_id: null,
      address_line_1: '550 S 400 E APT 3302',
      address_line_2: null,
      city: 'SALT LAKE CITY',
      state: 'UT',
      postal_code: '84111',
      country: 'UNITED STATES',
      email: 'TRAVIS.MITCHELL1111@GMAIL.COM',
      number: '8019137743'
    }
  })
  const invitee37 = await prisma.invitee.upsert({
    where: { id: 37 },
    update: {},
    create: {
      id: 37,
      full_name: 'ALYSSA TRATOS',
      first_name: 'ALYSSA',
      last_name: 'TRATOS',
      parent_id: null,
      address_line_1: '12306 S ELENA CANYON COVE',
      address_line_2: null,
      city: 'HERRIMAN',
      state: 'UT',
      postal_code: '84096',
      country: 'UNITED STATES',
      email: 'ALYSSAP.TRATOS@GMAIL.COM',
      number: '3854957578'
    }
  })
  const invitee105 = await prisma.invitee.upsert({
    where: { id: 105 },
    update: {},
    create: {
      id: 105,
      full_name: 'SAMMY DIPHIBANE',
      first_name: 'SAMMY',
      last_name: 'DIPHIBANE',
      parent_id: 37,
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
  const invitee38 = await prisma.invitee.upsert({
    where: { id: 38 },
    update: {},
    create: {
      id: 38,
      full_name: 'CHANDLER COLLINS',
      first_name: 'CHANDLER',
      last_name: 'COLLINS',
      parent_id: null,
      address_line_1: '702 PHEASANT VIEW DR.',
      address_line_2: null,
      city: 'DRAPER',
      state: 'UT',
      postal_code: '84020',
      country: null,
      email: 'COLLINS.CHANDLER21@GMAIL.COM',
      number: '8012434047'
    }
  })
  const invitee106 = await prisma.invitee.upsert({
    where: { id: 106 },
    update: {},
    create: {
      id: 106,
      full_name: 'STEPHANIE JONES',
      first_name: 'STEPHANIE',
      last_name: 'JONES',
      parent_id: 38,
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
  const invitee40 = await prisma.invitee.upsert({
    where: { id: 40 },
    update: {},
    create: {
      id: 40,
      full_name: 'LUDOVICA FARESE',
      first_name: 'LUDOVICA',
      last_name: 'FARESE',
      parent_id: null,
      address_line_1: '497 BROADWAY',
      address_line_2: 'APT 303',
      city: 'PROVIDENCE',
      state: 'RI',
      postal_code: '2909',
      country: 'UNITED STATES',
      email: 'LUDOFARESE@GMAIL.COM',
      number: '8016961767'
    }
  })
  const invitee107 = await prisma.invitee.upsert({
    where: { id: 107 },
    update: {},
    create: {
      id: 107,
      full_name: 'SPENCER LAPLATA',
      first_name: 'SPENCER',
      last_name: 'LAPLATA',
      parent_id: 40,
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
  const invitee41 = await prisma.invitee.upsert({
    where: { id: 41 },
    update: {},
    create: {
      id: 41,
      full_name: 'DAVID VU',
      first_name: 'DAVID',
      last_name: 'VU',
      parent_id: null,
      address_line_1: '10730 SOUTH LAKE RUN ROAD',
      address_line_2: '3104',
      city: 'SOUTH JORDAN',
      state: 'UT',
      postal_code: '84009',
      country: 'UNITED STATES',
      email: 'DAVIDVU801@GMAIL.COM',
      number: '8016629382'
    }
  })
  const invitee42 = await prisma.invitee.upsert({
    where: { id: 42 },
    update: {},
    create: {
      id: 42,
      full_name: 'JESSICA BOUNSANGA',
      first_name: 'JESSICA',
      last_name: 'BOUNSANGA',
      parent_id: null,
      address_line_1: '6125 N TALBOT SPRINGS CT',
      address_line_2: null,
      city: 'NORTH LAS VEGAS',
      state: 'NV',
      postal_code: '89081',
      country: 'UNITED STATES',
      email: 'JESSABOUN@HOTMAIL.COM',
      number: '8015560469'
    }
  })
  const invitee108 = await prisma.invitee.upsert({
    where: { id: 108 },
    update: {},
    create: {
      id: 108,
      full_name: 'KEVIN TRUONG',
      first_name: 'KEVIN',
      last_name: 'TRUONG',
      parent_id: 42,
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
  const invitee109 = await prisma.invitee.upsert({
    where: { id: 109 },
    update: {},
    create: {
      id: 109,
      full_name: 'JERRY BOUNSANGA',
      first_name: 'JERRY',
      last_name: 'BOUNSANGA',
      parent_id: 42,
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
  const invitee43 = await prisma.invitee.upsert({
    where: { id: 43 },
    update: {},
    create: {
      id: 43,
      full_name: 'THOMAS MCTAGGART',
      first_name: 'THOMAS',
      last_name: 'MCTAGGART',
      parent_id: null,
      address_line_1: '3756 SOUTH 700 WEST',
      address_line_2: null,
      city: 'SOUTH SALT LAKE',
      state: 'UT',
      postal_code: '84119',
      country: 'UNITED STATES',
      email: 'THOMASMCT9@GMAIL.COM',
      number: '8018708972'
    }
  })
  const invitee44 = await prisma.invitee.upsert({
    where: { id: 44 },
    update: {},
    create: {
      id: 44,
      full_name: 'TAYLOR HENNESSY TALBOT',
      first_name: 'TAYLOR',
      last_name: 'TALBOT',
      parent_id: null,
      address_line_1: '11253 S OHENRY ROAD',
      address_line_2: null,
      city: 'SANDY',
      state: 'UT',
      postal_code: '84070',
      country: 'UNITED STATES',
      email: 'TTALBOT@HENNESSYCONSTRUCTION.COM',
      number: '8018313600'
    }
  })
  const invitee110 = await prisma.invitee.upsert({
    where: { id: 110 },
    update: {},
    create: {
      id: 110,
      full_name: 'GABRIELLE MARIE LAFALAM',
      first_name: 'GABRIELLE',
      last_name: 'LAFALAM',
      parent_id: 44,
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
  const invitee45 = await prisma.invitee.upsert({
    where: { id: 45 },
    update: {},
    create: {
      id: 45,
      full_name: 'JULIA HARRIS',
      first_name: 'JULIA',
      last_name: 'HARRIS',
      parent_id: null,
      address_line_1: '707 E 380 S',
      address_line_2: null,
      city: 'AMERICAN FORK',
      state: 'UT',
      postal_code: '84003',
      country: 'UNITED STATES',
      email: 'JOJULIAORELLANA@GMAIL.COM',
      number: '8016568489'
    }
  })
  const invitee111 = await prisma.invitee.upsert({
    where: { id: 111 },
    update: {},
    create: {
      id: 111,
      full_name: 'PLUS ONE',
      first_name: 'PLUS',
      last_name: 'ONE',
      parent_id: 45,
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
  const invitee46 = await prisma.invitee.upsert({
    where: { id: 46 },
    update: {},
    create: {
      id: 46,
      full_name: 'LUC RUSSELL',
      first_name: 'LUC',
      last_name: 'RUSSELL',
      parent_id: null,
      address_line_1: '4281 S 1350 E',
      address_line_2: null,
      city: 'MILLCREEK',
      state: 'UT',
      postal_code: '84124',
      country: 'UNITED STATES',
      email: 'LUCSW92@HOTMAIL.COM',
      number: '6617541744'
    }
  })
  const invitee112 = await prisma.invitee.upsert({
    where: { id: 112 },
    update: {},
    create: {
      id: 112,
      full_name: 'CAMILLE RUSSELL',
      first_name: 'CAMILLE',
      last_name: 'RUSSELL',
      parent_id: 46,
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
  const invitee47 = await prisma.invitee.upsert({
    where: { id: 47 },
    update: {},
    create: {
      id: 47,
      full_name: 'JADE WONG',
      first_name: 'JADE',
      last_name: 'WONG',
      parent_id: null,
      address_line_1: '6783 S ENCHANTMENT CV',
      address_line_2: null,
      city: 'MIDVALE',
      state: 'UT',
      postal_code: '84047',
      country: 'USA',
      email: 'THISBEJADE@GMAIL.COM',
      number: '8019318776'
    }
  })
  const invitee113 = await prisma.invitee.upsert({
    where: { id: 113 },
    update: {},
    create: {
      id: 113,
      full_name: 'BYRON TUCKER',
      first_name: 'BYRON',
      last_name: 'TUCKER',
      parent_id: 47,
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
  const invitee114 = await prisma.invitee.upsert({
    where: { id: 114 },
    update: {},
    create: {
      id: 114,
      full_name: 'BRANDON WONG',
      first_name: 'BRANDON',
      last_name: 'WONG',
      parent_id: 47,
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
  const invitee48 = await prisma.invitee.upsert({
    where: { id: 48 },
    update: {},
    create: {
      id: 48,
      full_name: 'RUSMEY BOUNSANGA',
      first_name: 'RUSMEY',
      last_name: 'BOUNSANGA',
      parent_id: null,
      address_line_1: '4309 W SILVER PEAK LN',
      address_line_2: null,
      city: 'HERRIMAN',
      state: 'UT',
      postal_code: '84096',
      country: null,
      email: 'RUSMEYB@GMAIL.COM',
      number: '8014935182'
    }
  })
  const invitee115 = await prisma.invitee.upsert({
    where: { id: 115 },
    update: {},
    create: {
      id: 115,
      full_name: 'MAKAYLEE TRAN',
      first_name: 'MAKAYLEE',
      last_name: 'TRAN',
      parent_id: 48,
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
  const invitee49 = await prisma.invitee.upsert({
    where: { id: 49 },
    update: {},
    create: {
      id: 49,
      full_name: 'WILLIAM THAMMAVONG',
      first_name: 'WILLIAM',
      last_name: 'THAMMAVONG',
      parent_id: null,
      address_line_1: '5408 SAGUARO DR',
      address_line_2: null,
      city: 'WEST JORDAN',
      state: 'UT',
      postal_code: '84081',
      country: 'UNITED STATES',
      email: 'WILLTHAMZIZZLE@GMAIL.COM',
      number: '8017031817'
    }
  })
  const invitee116 = await prisma.invitee.upsert({
    where: { id: 116 },
    update: {},
    create: {
      id: 116,
      full_name: 'BRIAN THAMMAVONG',
      first_name: 'BRIAN',
      last_name: 'THAMMAVONG',
      parent_id: 49,
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
  const invitee117 = await prisma.invitee.upsert({
    where: { id: 117 },
    update: {},
    create: {
      id: 117,
      full_name: 'ERICA KIM',
      first_name: 'ERICA',
      last_name: 'KIM',
      parent_id: 49,
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
  const invitee50 = await prisma.invitee.upsert({
    where: { id: 50 },
    update: {},
    create: {
      id: 50,
      full_name: 'HAYDEN BABKA',
      first_name: 'HAYDEN',
      last_name: 'BABKA',
      parent_id: null,
      address_line_1: '498 E PHEASANT VIEW DRIVE',
      address_line_2: null,
      city: 'DRAPER',
      state: 'UT',
      postal_code: '84020',
      country: null,
      email: 'HAYDENBABKA@GMAIL.COM',
      number: '8016642336'
    }
  })
  const invitee118 = await prisma.invitee.upsert({
    where: { id: 118 },
    update: {},
    create: {
      id: 118,
      full_name: 'MIA QUINTERO',
      first_name: 'MIA',
      last_name: 'QUINTERO',
      parent_id: 50,
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
  const invitee51 = await prisma.invitee.upsert({
    where: { id: 51 },
    update: {},
    create: {
      id: 51,
      full_name: 'TANNER BARR',
      first_name: 'TANNER',
      last_name: 'BARR',
      parent_id: null,
      address_line_1: '1180 WEST CAPERNAUM ROAD',
      address_line_2: null,
      city: 'WEST JORDAN',
      state: 'UT',
      postal_code: '84088',
      country: 'UNITED STATES',
      email: 'TBARR06@GMAIL.COM',
      number: '8015581745'
    }
  })
  const invitee119 = await prisma.invitee.upsert({
    where: { id: 119 },
    update: {},
    create: {
      id: 119,
      full_name: 'ASHLEY STROUP',
      first_name: 'ASHLEY',
      last_name: 'STROUP',
      parent_id: 51,
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
  const invitee52 = await prisma.invitee.upsert({
    where: { id: 52 },
    update: {},
    create: {
      id: 52,
      full_name: 'ANGEL NINH-HO',
      first_name: 'ANGEL',
      last_name: 'NINH-HO',
      parent_id: null,
      address_line_1: '11758 S DISTRICT DR. UNIT 903',
      address_line_2: null,
      city: 'SOUTH JORDAN',
      state: 'UT',
      postal_code: '84095',
      country: 'UNITED STATES',
      email: 'ANGELNINH@GMAIL.COM',
      number: '2099155724'
    }
  })
  const invitee120 = await prisma.invitee.upsert({
    where: { id: 120 },
    update: {},
    create: {
      id: 120,
      full_name: 'KENNY HO',
      first_name: 'KENNY',
      last_name: 'HO',
      parent_id: 52,
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
  const invitee53 = await prisma.invitee.upsert({
    where: { id: 53 },
    update: {},
    create: {
      id: 53,
      full_name: 'ERENDIRA LOPEZ',
      first_name: 'ERENDIRA',
      last_name: 'LOPEZ',
      parent_id: null,
      address_line_1: '1980 W 3500 S',
      address_line_2: 'STE 106',
      city: 'WEST VALLEY',
      state: 'UT',
      postal_code: '84119',
      country: null,
      email: 'E.LOP094@GMAIL.COM',
      number: '3856950898'
    }
  })
  const invitee121 = await prisma.invitee.upsert({
    where: { id: 121 },
    update: {},
    create: {
      id: 121,
      full_name: 'KADAN ATKIN',
      first_name: 'KADAN',
      last_name: 'ATKIN',
      parent_id: 53,
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
  const invitee54 = await prisma.invitee.upsert({
    where: { id: 54 },
    update: {},
    create: {
      id: 54,
      full_name: 'RUBY NGUYEN',
      first_name: 'RUBY',
      last_name: 'NGUYEN',
      parent_id: null,
      address_line_1: '12173 S YUKON RIVER LANE',
      address_line_2: null,
      city: 'HERRIMAN',
      state: 'UT',
      postal_code: '84096',
      country: 'SALT LAKE',
      email: 'NTBNGOC223@GMAIL.COM',
      number: '8019000998'
    }
  })
  const invitee122 = await prisma.invitee.upsert({
    where: { id: 122 },
    update: {},
    create: {
      id: 122,
      full_name: 'JASON TRAN',
      first_name: 'JASON',
      last_name: 'TRAN',
      parent_id: 54,
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
  const invitee123 = await prisma.invitee.upsert({
    where: { id: 123 },
    update: {},
    create: {
      id: 123,
      full_name: 'ELLA TRAN',
      first_name: 'ELLA',
      last_name: 'TRAN',
      parent_id: 54,
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
  const invitee124 = await prisma.invitee.upsert({
    where: { id: 124 },
    update: {},
    create: {
      id: 124,
      full_name: 'AVA TRAN',
      first_name: 'AVA',
      last_name: 'TRAN',
      parent_id: 54,
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
  const invitee55 = await prisma.invitee.upsert({
    where: { id: 55 },
    update: {},
    create: {
      id: 55,
      full_name: 'JENNIE RATTANATAY',
      first_name: 'JENNIE',
      last_name: 'RATTANATAY',
      parent_id: null,
      address_line_1: '11534 S SWEET GRASS CT',
      address_line_2: null,
      city: 'DRAPER',
      state: 'UT',
      postal_code: '84020',
      country: 'UNITED STATES',
      email: 'J.RATTANATAY@GMAIL.COM',
      number: '8013860695'
    }
  })
  const invitee125 = await prisma.invitee.upsert({
    where: { id: 125 },
    update: {},
    create: {
      id: 125,
      full_name: 'GABE CARMONA',
      first_name: 'GABE',
      last_name: 'CARMONA',
      parent_id: 55,
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
  const invitee56 = await prisma.invitee.upsert({
    where: { id: 56 },
    update: {},
    create: {
      id: 56,
      full_name: 'AUBREY SENGDENG',
      first_name: 'AUBREY',
      last_name: 'SENGDENG',
      parent_id: null,
      address_line_1: '7465 S GRANT GROVE LANE',
      address_line_2: null,
      city: 'WEST JORDAN',
      state: 'UT',
      postal_code: '84084',
      country: 'UNITED STATES',
      email: 'LIN.AUBREY@GMAIL.COM',
      number: '8014338647'
    }
  })
  const invitee126 = await prisma.invitee.upsert({
    where: { id: 126 },
    update: {},
    create: {
      id: 126,
      full_name: 'MAIKIE SENGDENG',
      first_name: 'MAIKIE',
      last_name: 'SENGDENG',
      parent_id: 56,
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
  const invitee127 = await prisma.invitee.upsert({
    where: { id: 127 },
    update: {},
    create: {
      id: 127,
      full_name: 'BABY SENGDENG',
      first_name: 'BABY',
      last_name: 'SENGDENG',
      parent_id: 56,
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
  const invitee57 = await prisma.invitee.upsert({
    where: { id: 57 },
    update: {},
    create: {
      id: 57,
      full_name: 'STEPHANIE NGUYEN',
      first_name: 'STEPHANIE',
      last_name: 'NGUYEN',
      parent_id: null,
      address_line_1: '4539 W WATCHMEN WAY',
      address_line_2: null,
      city: 'HERRIMAN',
      state: 'UT',
      postal_code: '84096',
      country: 'UNITED STATES',
      email: 'NGUYEN.STEPH94@GMAIL.COM',
      number: '8014134537'
    }
  })
  const invitee128 = await prisma.invitee.upsert({
    where: { id: 128 },
    update: {},
    create: {
      id: 128,
      full_name: 'PICHAI KAYSAVANG',
      first_name: 'PICHAI',
      last_name: 'KAYSAVANG',
      parent_id: 57,
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
  const invitee129 = await prisma.invitee.upsert({
    where: { id: 129 },
    update: {},
    create: {
      id: 129,
      full_name: 'RUBY KAYSAVANG',
      first_name: 'RUBY',
      last_name: 'KAYSAVANG',
      parent_id: 57,
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
  const invitee58 = await prisma.invitee.upsert({
    where: { id: 58 },
    update: {},
    create: {
      id: 58,
      full_name: 'MAURO SELIS',
      first_name: 'MAURO',
      last_name: 'SELIS',
      parent_id: null,
      address_line_1: '3757 W SOLEIL LOFTS LN UNIT M205',
      address_line_2: null,
      city: 'HERRIMAN',
      state: 'UT',
      postal_code: '84096',
      country: 'UNITED STATES',
      email: 'MAURO18SELIS@GMAIL.COM',
      number: '8017083574'
    }
  })
  const invitee59 = await prisma.invitee.upsert({
    where: { id: 59 },
    update: {},
    create: {
      id: 59,
      full_name: 'LINDA VU',
      first_name: 'LINDA',
      last_name: 'VU',
      parent_id: null,
      address_line_1: '14886 S SURI RISE LN',
      address_line_2: 'H107',
      city: 'HERRIMAN',
      state: 'UT',
      postal_code: '84096',
      country: 'UNITED STATES',
      email: 'LINDAVU312@OUTLOOK.COM',
      number: '3852150371'
    }
  })
  const invitee60 = await prisma.invitee.upsert({
    where: { id: 60 },
    update: {},
    create: {
      id: 60,
      full_name: 'HENRY NGUYEN',
      first_name: 'HENRY',
      last_name: 'NGUYEN',
      parent_id: null,
      address_line_1: '3533 W ARTISTIC CIR',
      address_line_2: null,
      city: 'SOUTH JORDAN',
      state: 'UT',
      postal_code: '84095',
      country: 'UNITED STATES',
      email: 'HENRYNGUYEN552@GMAIL.COM',
      number: '8018595391'
    }
  })
  const invitee130 = await prisma.invitee.upsert({
    where: { id: 130 },
    update: {},
    create: {
      id: 130,
      full_name: 'TAYLOR SENGPRESEUT',
      first_name: 'TAYLOR',
      last_name: 'SENGPRESEUT',
      parent_id: 60,
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
  const invitee131 = await prisma.invitee.upsert({
    where: { id: 131 },
    update: {},
    create: {
      id: 131,
      full_name: 'KENNY NGUYEN',
      first_name: 'KENNY',
      last_name: 'NGUYEN',
      parent_id: 60,
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
  const invitee132 = await prisma.invitee.upsert({
    where: { id: 132 },
    update: {},
    create: {
      id: 132,
      full_name: 'DUNG NGUYEN',
      first_name: 'DUNG',
      last_name: 'NGUYEN',
      parent_id: 60,
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
  const invitee133 = await prisma.invitee.upsert({
    where: { id: 133 },
    update: {},
    create: {
      id: 133,
      full_name: 'LIEN PHAM',
      first_name: 'LIEN',
      last_name: 'PHAM',
      parent_id: 60,
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
  const invitee61 = await prisma.invitee.upsert({
    where: { id: 61 },
    update: {},
    create: {
      id: 61,
      full_name: 'HAILEY RANSLEY',
      first_name: 'HAILEY',
      last_name: 'RANSLEY',
      parent_id: 60,
      address_line_1: '834 E 3900 S F105',
      address_line_2: null,
      city: 'SALT LAKE CITY',
      state: 'UT',
      postal_code: '84107',
      country: null,
      email: 'HAILEYRANSLEY@GMAIL.COM',
      number: '2084404816'
    }
  })
  const invitee62 = await prisma.invitee.upsert({
    where: { id: 62 },
    update: {},
    create: {
      id: 62,
      full_name: 'ETHAN NGUYEN',
      first_name: 'ETHAN',
      last_name: 'NGUYEN',
      parent_id: null,
      address_line_1: '3439 W WILLOW VALLEY RD',
      address_line_2: null,
      city: 'SOUTH JORDAN',
      state: 'UT',
      postal_code: '84095',
      country: 'UNITED STATES',
      email: 'ETHAN_ANHBA@YAHOO.COM',
      number: '8016459363'
    }
  })
  const invitee134 = await prisma.invitee.upsert({
    where: { id: 134 },
    update: {},
    create: {
      id: 134,
      full_name: 'VICKIE DUONG',
      first_name: 'VICKIE',
      last_name: 'DUONG',
      parent_id: 62,
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
  const invitee135 = await prisma.invitee.upsert({
    where: { id: 135 },
    update: {},
    create: {
      id: 135,
      full_name: 'JOHNNY NGUYEN',
      first_name: 'JOHNNY',
      last_name: 'NGUYEN',
      parent_id: 62,
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
  const invitee136 = await prisma.invitee.upsert({
    where: { id: 136 },
    update: {},
    create: {
      id: 136,
      full_name: 'NICK NGUYEN',
      first_name: 'NICK',
      last_name: 'NGUYEN',
      parent_id: 62,
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
  const invitee137 = await prisma.invitee.upsert({
    where: { id: 137 },
    update: {},
    create: {
      id: 137,
      full_name: 'ANGELINA NGUYEN',
      first_name: 'ANGELINA',
      last_name: 'NGUYEN',
      parent_id: 62,
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
  const invitee138 = await prisma.invitee.upsert({
    where: { id: 138 },
    update: {},
    create: {
      id: 138,
      full_name: 'MADISYN BURT',
      first_name: 'MADISYN',
      last_name: 'BURT',
      parent_id: 62,
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
