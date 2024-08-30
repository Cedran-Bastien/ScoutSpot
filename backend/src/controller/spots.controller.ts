import { ListSpotsUseCase } from "../use-cases/list-spots.use-case";
import { SpotData } from "@scoutspot/shared-types";
import { SpotsRepository } from "@/repository";

export class SpotsController {
  private listSpotsUseCase: ListSpotsUseCase;

  constructor(spotsRepository: SpotsRepository) {
    this.listSpotsUseCase = new ListSpotsUseCase(spotsRepository);
  }

  listSpots(): Promise<SpotData[]> {
    return this.listSpotsUseCase.execute();
  }
}
