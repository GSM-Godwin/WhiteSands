// pages/api/createTransaction.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const {
      pickupLocation,
      dropoffLocation,
      weight,
      height,
      length,
      width,
      name,
      id,
      email,
      phone,
      isDangerousGoods,
      isLiveAnimals,
      isHumanRemains,
      isSeaFreight,
    } = req.body;

    // Create a new transaction record in the database
    const newTransaction = await prisma.$transaction.create({
      data: {
        pickupLocation,
        dropoffLocation,
        weight,
        height,
        length,
        width,
        name,
        id,
        email,
        phone,
        isDangerousGoods,
        isLiveAnimals,
        isHumanRemains,
        isSeaFreight,
      },
    });

    res.status(201).json({ message: 'Transaction created successfully', transaction: newTransaction });
  } catch (error) {
    console.error('Error creating transaction:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
  console.log(message);
}
