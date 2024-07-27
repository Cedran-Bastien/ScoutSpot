import { SpotData } from "@scoutspot/shared-types";

export interface SpotsRepository {
  listSpots: Promise<SpotData[]>;
}
