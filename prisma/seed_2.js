const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main () {
  const invitee152 = await prisma.invitee.upsert({
    where: { id: 152 },
    update: {},
    create: {
      id: 152,
      full_name: 'TA TRAN',
      first_name: 'TA',
      last_name: 'TRAN',
      parent_id: null,
      address_line_1: '7983 NEWLAND CIR',
      address_line_2: null,
      city: 'ARVADA',
      state: 'CO',
      postal_code: '80003',
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee153 = await prisma.invitee.upsert({
    where: { id: 153 },
    update: {},
    create: {
      id: 153,
      full_name: 'HUONG TRAN',
      first_name: 'HUONG',
      last_name: 'TRAN',
      parent_id: 153,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee154 = await prisma.invitee.upsert({
    where: { id: 154 },
    update: {},
    create: {
      id: 154,
      full_name: 'STACEY TRAN',
      first_name: 'STACEY',
      last_name: 'TRAN',
      parent_id: 153,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee155 = await prisma.invitee.upsert({
    where: { id: 155 },
    update: {},
    create: {
      id: 155,
      full_name: 'SU TRAN',
      first_name: 'SU',
      last_name: 'TRAN',
      parent_id: null,
      address_line_1: '29582 BRIGHT SPOT RD',
      address_line_2: null,
      city: 'HIGHLAND',
      state: 'CA',
      postal_code: '92346',
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee156 = await prisma.invitee.upsert({
    where: { id: 156 },
    update: {},
    create: {
      id: 156,
      full_name: 'VAN TRAN',
      first_name: 'VAN',
      last_name: 'TRAN',
      parent_id: 155,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee157 = await prisma.invitee.upsert({
    where: { id: 157 },
    update: {},
    create: {
      id: 157,
      full_name: 'PHI TRAN',
      first_name: 'PHI',
      last_name: 'TRAN',
      parent_id: null,
      address_line_1: '4834 W SUNNY VISTA LN',
      address_line_2: null,
      city: 'WEST JORDAN',
      state: 'UT',
      postal_code: '84081',
      country: null,
      email: 'PHUONGTRANNNN@GMAIL.COM',
      number: '8019169908',
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee158 = await prisma.invitee.upsert({
    where: { id: 158 },
    update: {},
    create: {
      id: 158,
      full_name: 'PHUONG TRAN',
      first_name: 'PHUONG',
      last_name: 'TRAN',
      parent_id: 157,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee159 = await prisma.invitee.upsert({
    where: { id: 159 },
    update: {},
    create: {
      id: 159,
      full_name: 'TORI TRAN',
      first_name: 'TORI',
      last_name: 'TRAN',
      parent_id: 157,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee160 = await prisma.invitee.upsert({
    where: { id: 160 },
    update: {},
    create: {
      id: 160,
      full_name: 'PHUNG TRAN',
      first_name: 'PHUNG',
      last_name: 'TRAN',
      parent_id: 157,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee161 = await prisma.invitee.upsert({
    where: { id: 161 },
    update: {},
    create: {
      id: 161,
      full_name: 'CHRISTOPHER NGUYEN',
      first_name: 'CHRISTOPHER',
      last_name: 'NGUYEN',
      parent_id: null,
      address_line_1: '3410 SHILOH CREEK CIR',
      address_line_2: null,
      city: 'BLUFFDALE',
      state: 'UT',
      postal_code: '84065',
      country: null,
      email: 'AMANDAWILDORCHID@GMAIL.COM',
      number: '8018569118',
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee162 = await prisma.invitee.upsert({
    where: { id: 162 },
    update: {},
    create: {
      id: 162,
      full_name: 'AMANDA NGUYEN',
      first_name: 'AMANDA',
      last_name: 'NGUYEN',
      parent_id: 161,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee163 = await prisma.invitee.upsert({
    where: { id: 163 },
    update: {},
    create: {
      id: 163,
      full_name: 'PHILIP NGUYEN',
      first_name: 'PHILIP',
      last_name: 'NGUYEN',
      parent_id: 161,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee164 = await prisma.invitee.upsert({
    where: { id: 164 },
    update: {},
    create: {
      id: 164,
      full_name: 'BRITTANY NGUYEN',
      first_name: 'BRITTANY',
      last_name: 'NGUYEN',
      parent_id: 161,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee165 = await prisma.invitee.upsert({
    where: { id: 165 },
    update: {},
    create: {
      id: 165,
      full_name: 'CHELSEA NGUYEN',
      first_name: 'CHELSEA',
      last_name: 'NGUYEN',
      parent_id: 161,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee166 = await prisma.invitee.upsert({
    where: { id: 166 },
    update: {},
    create: {
      id: 166,
      full_name: 'HUY BUI',
      first_name: 'HUY',
      last_name: 'BUI',
      parent_id: null,
      address_line_1: '5022 S JORDAN CANAL RD',
      address_line_2: null,
      city: 'TAYLORSVILLE',
      state: 'UT',
      postal_code: '84129',
      country: null,
      email: 'VANESSATHUVAN.LE@FACEBOOK.COM',
      number: '8014484763',
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee167 = await prisma.invitee.upsert({
    where: { id: 167 },
    update: {},
    create: {
      id: 167,
      full_name: 'VANESSA LE',
      first_name: 'VANESSA',
      last_name: 'LE',
      parent_id: 166,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee168 = await prisma.invitee.upsert({
    where: { id: 168 },
    update: {},
    create: {
      id: 168,
      full_name: 'ZACHARY BUI',
      first_name: 'ZACHARY',
      last_name: 'BUI',
      parent_id: 166,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee169 = await prisma.invitee.upsert({
    where: { id: 169 },
    update: {},
    create: {
      id: 169,
      full_name: 'ZANDER BUI',
      first_name: 'ZANDER',
      last_name: 'BUI',
      parent_id: 166,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee170 = await prisma.invitee.upsert({
    where: { id: 170 },
    update: {},
    create: {
      id: 170,
      full_name: 'CINDY CRITCHLOW',
      first_name: 'CINDY',
      last_name: 'CRITCHLOW',
      parent_id: null,
      address_line_1: '2230 SOUTH AMMON',
      address_line_2: 'APT. 2',
      city: 'AMMON',
      state: 'ID',
      postal_code: '83406',
      country: null,
      email: 'CCRITCHLOW64@GMAIL.COM',
      number: '208-360-2773',
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee171 = await prisma.invitee.upsert({
    where: { id: 171 },
    update: {},
    create: {
      id: 171,
      full_name: 'PAUL CRITCHLOW',
      first_name: 'PAUL',
      last_name: 'CRITCHLOW',
      parent_id: 170,
      address_line_1: 'P. O. BOX 71',
      address_line_2: null,
      city: 'GEORGETOWN',
      state: 'ID',
      postal_code: '83239',
      country: 'USA',
      email: 'PCRITCHLOW739@GMAIL.COM',
      number: '208-540-0163',
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee172 = await prisma.invitee.upsert({
    where: { id: 172 },
    update: {},
    create: {
      id: 172,
      full_name: 'LINDA CRITCHLOW',
      first_name: 'LINDA',
      last_name: 'CRITCHLOW',
      parent_id: 170,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee173 = await prisma.invitee.upsert({
    where: { id: 173 },
    update: {},
    create: {
      id: 173,
      full_name: 'JUSTIN DO',
      first_name: 'JUSTIN',
      last_name: 'DO',
      parent_id: null,
      address_line_1: '6891 W MESA ARCH DR',
      address_line_2: null,
      city: 'WEST JORDAN',
      state: 'UTAH',
      postal_code: '84081',
      country: 'USA',
      email: 'JUSTINDOY2K@GMAIL.COM',
      number: '4352259620',
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee174 = await prisma.invitee.upsert({
    where: { id: 174 },
    update: {},
    create: {
      id: 174,
      full_name: 'SAVANNAH DO',
      first_name: 'SAVANNAH',
      last_name: 'DO',
      parent_id: 173,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee175 = await prisma.invitee.upsert({
    where: { id: 175 },
    update: {},
    create: {
      id: 175,
      full_name: 'NATHAN DO',
      first_name: 'NATHAN',
      last_name: 'DO',
      parent_id: 173,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee176 = await prisma.invitee.upsert({
    where: { id: 176 },
    update: {},
    create: {
      id: 176,
      full_name: 'CHRISTINA NHAN',
      first_name: 'CHRISTINA',
      last_name: 'NHAN',
      parent_id: null,
      address_line_1: '2122 THERESA COVE',
      address_line_2: null,
      city: 'WEST VALLEY CITY',
      state: 'UT',
      postal_code: '84119',
      country: 'USA',
      email: 'CHRISTINANHAN@HOTMAIL.COM',
      number: '8016962640',
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee177 = await prisma.invitee.upsert({
    where: { id: 177 },
    update: {},
    create: {
      id: 177,
      full_name: 'JOHN TA',
      first_name: 'JOHN',
      last_name: 'TA',
      parent_id: 176,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee178 = await prisma.invitee.upsert({
    where: { id: 178 },
    update: {},
    create: {
      id: 178,
      full_name: 'LEANG NGUYEN',
      first_name: 'LEANG',
      last_name: 'NGUYEN',
      parent_id: null,
      address_line_1: '10811 S BIG MEADOW DR.',
      address_line_2: null,
      city: 'SOUTH JORDAN',
      state: 'UT',
      postal_code: '84009',
      country: 'USA',
      email: 'LEANGSNGUYEN@GMAIL.COM',
      number: 'US +13032040135',
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee179 = await prisma.invitee.upsert({
    where: { id: 179 },
    update: {},
    create: {
      id: 179,
      full_name: 'BENJAMIN NGUYEN',
      first_name: 'BENJAMIN',
      last_name: 'NGUYEN',
      parent_id: 178,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee180 = await prisma.invitee.upsert({
    where: { id: 180 },
    update: {},
    create: {
      id: 180,
      full_name: 'BRANDON NGUYEN',
      first_name: 'BRANDON',
      last_name: 'NGUYEN',
      parent_id: null,
      address_line_1: '7337 W CARIBBEAN LN',
      address_line_2: null,
      city: 'PEORIA',
      state: 'AZ',
      postal_code: '85381',
      country: 'UNITED STATES',
      email: 'BRANDONTHENGUYEN@GMAIL.COM',
      number: '4806767979',
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee181 = await prisma.invitee.upsert({
    where: { id: 181 },
    update: {},
    create: {
      id: 181,
      full_name: 'HONG HO',
      first_name: 'HONG',
      last_name: 'HO',
      parent_id: 180,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee182 = await prisma.invitee.upsert({
    where: { id: 182 },
    update: {},
    create: {
      id: 182,
      full_name: 'HAT VUONG',
      first_name: 'HAT',
      last_name: 'VUONG',
      parent_id: 180,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee183 = await prisma.invitee.upsert({
    where: { id: 183 },
    update: {},
    create: {
      id: 183,
      full_name: 'AIDAN VUONG',
      first_name: 'AIDAN',
      last_name: 'VUONG',
      parent_id: 180,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee184 = await prisma.invitee.upsert({
    where: { id: 184 },
    update: {},
    create: {
      id: 184,
      full_name: 'LON RICKS',
      first_name: 'LON',
      last_name: 'RICKS',
      parent_id: null,
      address_line_1: 'P. O. BOX 27',
      address_line_2: null,
      city: 'NEWDALE',
      state: 'ID',
      postal_code: '83436',
      country: 'USA',
      email: 'LONRICKS@GMAIL.COM',
      number: '208-390-1636',
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee185 = await prisma.invitee.upsert({
    where: { id: 185 },
    update: {},
    create: {
      id: 185,
      full_name: 'BEVERLY RICKS',
      first_name: 'BEVERYLY',
      last_name: 'RICKS',
      parent_id: 184,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee186 = await prisma.invitee.upsert({
    where: { id: 186 },
    update: {},
    create: {
      id: 186,
      full_name: 'NGA DUONG',
      first_name: 'NGA',
      last_name: 'DUONG',
      parent_id: null,
      address_line_1: '4813 W 8820 S',
      address_line_2: null,
      city: 'WEST JORDAN',
      state: 'UT',
      postal_code: '84081',
      country: 'UNITED STATES',
      email: 'NGATHDUONG@YAHOO.COM',
      number: '8015123427',
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee187 = await prisma.invitee.upsert({
    where: { id: 187 },
    update: {},
    create: {
      id: 187,
      full_name: 'TUAN NGUYEN',
      first_name: 'TUAN',
      last_name: 'NGUYEN',
      parent_id: 186,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee188 = await prisma.invitee.upsert({
    where: { id: 188 },
    update: {},
    create: {
      id: 188,
      full_name: 'YEN NGUYEN',
      first_name: 'YEN',
      last_name: 'NGUYEN',
      parent_id: 186,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee189 = await prisma.invitee.upsert({
    where: { id: 189 },
    update: {},
    create: {
      id: 189,
      full_name: 'MATTHEW NGUYEN',
      first_name: 'MATTHEW',
      last_name: 'NGUYEN',
      parent_id: 186,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee190 = await prisma.invitee.upsert({
    where: { id: 190 },
    update: {},
    create: {
      id: 190,
      full_name: 'CLAUDIO GONZALEZ',
      first_name: 'CLAUDIO',
      last_name: 'GONZALEZ',
      parent_id: null,
      address_line_1: '6315 SW CANYON COURT',
      address_line_2: 'APT 91300',
      city: 'PORTLAND',
      state: 'OR',
      postal_code: '97221',
      country: 'USA',
      email: 'GONZALEZCLAUDIO92@GMAIL.COM',
      number: '3852887502',
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee191 = await prisma.invitee.upsert({
    where: { id: 191 },
    update: {},
    create: {
      id: 191,
      full_name: 'ARTEM POPOVYCH',
      first_name: 'ARTEM',
      last_name: 'POPOVYCH',
      parent_id: 190,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee192 = await prisma.invitee.upsert({
    where: { id: 192 },
    update: {},
    create: {
      id: 192,
      full_name: 'ANGI PHAOPHONGSAVATH',
      first_name: 'ANGI',
      last_name: 'PHAOPHONGSAVATH',
      parent_id: null,
      address_line_1: '12331 S PEDROIA ST',
      address_line_2: null,
      city: 'HERRIMAN',
      state: 'UT',
      postal_code: '84096',
      country: null,
      email: 'ANGI.LUONG2012@GMAIL.COM',
      number: '8013495360',
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee193 = await prisma.invitee.upsert({
    where: { id: 193 },
    update: {},
    create: {
      id: 193,
      full_name: 'DENNIS PHAOPHONGSAVATH',
      first_name: 'DENNIS',
      last_name: 'PHAOPHONGSAVATH',
      parent_id: 192,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee194 = await prisma.invitee.upsert({
    where: { id: 194 },
    update: {},
    create: {
      id: 194,
      full_name: 'QUINN PHAOPHONGSAVATH',
      first_name: 'QUINN',
      last_name: 'PHAOPHONGSAVATH',
      parent_id: 192,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee195 = await prisma.invitee.upsert({
    where: { id: 195 },
    update: {},
    create: {
      id: 195,
      full_name: 'DREAM GRIMES',
      first_name: 'DREAM',
      last_name: 'GRIMES',
      parent_id: null,
      address_line_1: '1921 NORTH 2475 WEST',
      address_line_2: null,
      city: 'CLEARFIELD',
      state: 'UT',
      postal_code: '84015',
      country: 'UNITED STATES',
      email: 'DREAMGRIMES@GMAIL.COM',
      number: '8013909166',
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee196 = await prisma.invitee.upsert({
    where: { id: 196 },
    update: {},
    create: {
      id: 196,
      full_name: 'TOMMY VILAIPAN',
      first_name: 'TOMMY',
      last_name: 'VILAIPAN',
      parent_id: 195,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee197 = await prisma.invitee.upsert({
    where: { id: 197 },
    update: {},
    create: {
      id: 197,
      full_name: 'BRAXTON ANGELL',
      first_name: 'BRAXTON',
      last_name: 'ANGELL',
      parent_id: null,
      address_line_1: '2046 E 10180 S',
      address_line_2: null,
      city: 'SANDY',
      state: 'UT',
      postal_code: '84092',
      country: 'UNITED STATES',
      email: 'BRAXTON.ANGELL@GMAIL.COM',
      number: '8015581100',
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee198 = await prisma.invitee.upsert({
    where: { id: 198 },
    update: {},
    create: {
      id: 198,
      full_name: 'KEATON MADRID',
      first_name: 'KEATON',
      last_name: 'MADRID',
      parent_id: null,
      address_line_1: '875 EAST EMERALD DRIVE',
      address_line_2: null,
      city: 'SANDY',
      state: 'UT',
      postal_code: '84094',
      country: 'UNITED STATES',
      email: 'KMAD2818@HOTMAIL.COM',
      number: '8016644560',
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee199 = await prisma.invitee.upsert({
    where: { id: 199 },
    update: {},
    create: {
      id: 199,
      full_name: 'CHRISTOPHER KONESAVANH',
      first_name: 'CHRISTOPHER',
      last_name: 'KONESAVANH',
      parent_id: null,
      address_line_1: '8983 S GALILEE WAY',
      address_line_2: null,
      city: 'WEST JORDAN',
      state: 'UT',
      postal_code: '84088',
      country: 'UNITED STATES',
      email: 'CKONESAV@GMAIL.COM',
      number: '8015203307',
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee200 = await prisma.invitee.upsert({
    where: { id: 200 },
    update: {},
    create: {
      id: 200,
      full_name: 'STEVE KONESAVANH',
      first_name: 'STEVE',
      last_name: 'KONESAVANH',
      parent_id: 199,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee201 = await prisma.invitee.upsert({
    where: { id: 201 },
    update: {},
    create: {
      id: 201,
      full_name: 'MAY KONESAVANH',
      first_name: 'MAY',
      last_name: 'KONESAVANH',
      parent_id: 199,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee202 = await prisma.invitee.upsert({
    where: { id: 202 },
    update: {},
    create: {
      id: 202,
      full_name: 'BILLY KONESAVANH',
      first_name: 'BILLY',
      last_name: 'KONESAVANH',
      parent_id: 199,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee203 = await prisma.invitee.upsert({
    where: { id: 203 },
    update: {},
    create: {
      id: 203,
      full_name: 'TANYA KONESAVANH',
      first_name: 'TANYA',
      last_name: 'KONESAVANH',
      parent_id: 199,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee204 = await prisma.invitee.upsert({
    where: { id: 204 },
    update: {},
    create: {
      id: 204,
      full_name: 'LOUIS NGO',
      first_name: 'LOUIS',
      last_name: 'NGO',
      parent_id: 199,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee205 = await prisma.invitee.upsert({
    where: { id: 205 },
    update: {},
    create: {
      id: 205,
      full_name: 'WHITNEY UONG',
      first_name: 'WHITNEY',
      last_name: 'UONG',
      parent_id: 199,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee206 = await prisma.invitee.upsert({
    where: { id: 206 },
    update: {},
    create: {
      id: 206,
      full_name: 'TYLER BOUNYASANE',
      first_name: 'TYLER',
      last_name: 'BOUNYASANE',
      parent_id: null,
      address_line_1: '8854 S SHORT LEAF DR',
      address_line_2: null,
      city: 'WEST JORDAN',
      state: 'UT',
      postal_code: '84088',
      country: 'UNITED STATES',
      email: 'TBOUNYAS@GMAIL.COM',
      number: '4805706625',
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })

  const invitee207 = await prisma.invitee.upsert({
    where: { id: 207 },
    update: {},
    create: {
      id: 207,
      full_name: 'AARON KWOK',
      first_name: 'AARON',
      last_name: 'KWOK',
      parent_id: null,
      address_line_1: '10320 S GOLDEN WILLOW DR',
      address_line_2: null,
      city: 'SANDY',
      state: 'UT',
      postal_code: '84070',
      country: 'USA',
      email: 'MR.AARONKWOK@YAHOO.COM',
      number: '8019169304',
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
    }
  })
  const invitee208 = await prisma.invitee.upsert({
    where: { id: 208 },
    update: {},
    create: {
      id: 208,
      full_name: 'NOELANI CRUZ',
      first_name: 'NOELANI',
      last_name: 'CRUZ',
      parent_id: 207,
      address_line_1: null,
      address_line_2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      email: null,
      number: null,
      attending_welcome_party: null,
      attending_wedding: null,
      modify_date: null
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
