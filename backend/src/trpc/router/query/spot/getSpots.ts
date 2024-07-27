import { publicProcedure } from "../../../init";
import { SpotsController } from "../../../../controller";

export const getSpots = publicProcedure.query(() => {
  const controller = new SpotsController();

  return controller.listSpots();
});
