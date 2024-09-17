import { SpotData } from "@scoutspot/shared-types";
import { SpotsRepository } from "@/repository";
import { PrismaSpotsRepository } from "@/repository/spots/prisma-spots.repository";

export class ListSpotsUseCase {
  private spotsRepositori: SpotsRepository;

  constructor(spotsRepository: SpotsRepository) {
    this.spotsRepositori = spotsRepository;
  }

  execute(): Promise<SpotData[]> {
    return this.spotsRepositori.getSpots();
  }
}
