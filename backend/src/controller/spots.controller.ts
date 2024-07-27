import { ListSpotsUseCase } from "../use-cases/list-spots.use-case";
import { SpotData } from "@scoutspot/shared-types";

export class SpotsController {
  private listSpotsUseCase: ListSpotsUseCase;

  constructor() {
    this.listSpotsUseCase = new ListSpotsUseCase();
  }

  listSpots(): SpotData[] {
    return this.listSpotsUseCase.execute();
  }
}
