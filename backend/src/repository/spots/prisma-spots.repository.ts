import { SpotsRepository } from "../database.spots.repository";
import { SpotData } from "@scoutspot/shared-types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class PrismaSpotsRepository implements SpotsRepository {
  async getSpots(): Promise<SpotData[]> {
    return prisma.spots.findMany();
  }
}
