import { SpotData } from "@scoutspot/shared-types";

export interface SpotsRepository {
  getSpots: () => Promise<SpotData[]>;
}
