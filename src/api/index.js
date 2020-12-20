import {Router} from "express";
import gasStationKeepingRouter from "./gasStation";

const apiRouter = new Router();

apiRouter.use("/gasStation", gasStationKeepingRouter);

export default apiRouter;