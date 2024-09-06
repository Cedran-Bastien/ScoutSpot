import { publicProcedure } from "../../../init";
import { SpotsController } from "../../../../controller";
import { PrismaSpotsRepository } from "@/repository/spots/prisma-spots.repository";

export const getSpots = publicProcedure.query(() => {
  const controller = new SpotsController(new PrismaSpotsRepository());

  return controller.listSpots();
});
