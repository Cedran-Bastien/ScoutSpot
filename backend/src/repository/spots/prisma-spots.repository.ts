import { SpotsRepository } from "../spots.repository";

class PrismaSpotsRepository implements SpotsRepository {
  listSpots() {
    return Promise.resolve();
  }
}
