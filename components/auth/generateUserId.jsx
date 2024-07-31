import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const GenerateUserId = async () => {
    // Fetch the latest user record's ID
    const latestUser = await prisma.user.findFirst({
        orderBy: {
            id: 'desc'
        }
    });

    // Extract the latest ID number and increment it
    const latestId = latestUser?.id;
    let newIdNumber = 1;

    if (latestId) {
        const match = latestId.match(/WA-(\d+)/);
        if (match) {
            newIdNumber = parseInt(match[1], 10) + 1;
        }
    }

    // Generate new ID in the format WA-<number>
    return `WA-${newIdNumber}`;
};

export default GenerateUserId;
