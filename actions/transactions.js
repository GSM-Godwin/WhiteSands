"use server";
import { db } from "@/lib/db";

export const transactions = async ({
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
  }) => {
    try {
      const newTransaction = await db.transaction.create({
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
  
      return { success: true, transaction: newTransaction };
    } catch (error) {
      console.error('Error creating transaction:', error);
      return { success: false, error: 'Internal server error' };
    }
  };
