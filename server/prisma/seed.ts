import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const evan = await prisma.user.upsert({
    where: { email: 'evanmicahstern@gmail.com' },
    create: {
      email: 'evanmicahstern@gmail.com',
      externalAuthId: 'z6gdGnbSFCRiOaiQSKvtwdFBXja2',
    },
    update: { externalAuthId: 'z6gdGnbSFCRiOaiQSKvtwdFBXja2' },
  });
  console.log(`Created ${evan.externalAuthId}`);
}

main()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
