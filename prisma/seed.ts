import { prisma } from '@/lib/prisma/db/client'
import { hash } from 'bcrypt'

async function main() {
  const password = await hash('test', 12)

  const user = await prisma.user.upsert({
    where: { email: 'newmanferrer@test.com' },
    update: {},
    create: {
      email: 'newmanferrer@test.com',
      name: 'Newman',
      password
    }
  })

  console.log({ user })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
