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
  console.log(`Created ${evan.id}`);

  await prisma.tag.deleteMany();
  await prisma.tag.createMany({
    data: [
      {
        userId: evan.id,
        name: 'Favorite',
      },
      {
        userId: evan.id,
        name: 'For Trade',
      },
    ],
  });
  console.log('created tags');

  // console.log(`Creating collection`);
  // let collection = await prisma.collection.findFirst({
  //   where: { user: { id: { equals: evan.id } } },
  // });
  // if (!collection) {
  //   collection = await prisma.collection.create({
  //     data: { name: "Evan's Collection", user: { connect: { id: evan.id } } },
  //   });
  // }

  // console.log(`Getting set codes`);
  // const setCodes = (
  //   await prisma.scryfallSet.findMany({
  //     take: 5,
  //     orderBy: [{ releasedAt: 'desc' }],
  //     where: { cardCount: { gt: 0 }, setType: { contains: 'expansion' } },
  //     select: { code: true },
  //   })
  // ).map((set) => set.code);

  // console.log(`Deleting old data`);
  // await prisma.cardsInCollection.deleteMany();

  // for (const setCode of setCodes) {
  //   console.log(`Creating collection for ${setCode}`);
  //   const cards = await prisma.card.findMany({
  //     take: 20,
  //     orderBy: [{ id: 'desc' }],
  //     where: { scryfallCard: { setCode: { equals: setCode } } },
  //   });

  //   console.log(`Updating collection with cards`);
  //   await prisma.collection.update({
  //     where: { id: collection.id },
  //     data: {
  //       cards: {
  //         create: cards.map((card) => ({
  //           count: 2,
  //           card: {
  //             connect: {
  //               id: card.id,
  //             },
  //           },
  //         })),
  //       },
  //     },
  //   });
  //   console.log(`Finished processing set ${setCode}`);
  // }
  // console.log(`Finished processing collection`);
}

main()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
