import {Router} from "express";
import gasStationKeepingControler from "./controler";
import passport from "passport";

const gasStationKeepingRouter = new Router();
gasStationKeepingRouter.get("/", gasStationKeepingControler.get);
gasStationKeepingRouter.get("/:id", gasStationKeepingControler.getById);
gasStationKeepingRouter.post("/", passport.authenticate("jwt", {session:false}), gasStationKeepingControler.post);
gasStationKeepingRouter.delete("/:id", passport.authenticate("jwt", {session:false}), gasStationKeepingControler.delete);
gasStationKeepingRouter.patch("/:id", passport.authenticate("jwt", {session:false}), gasStationKeepingControler.patch);

export default gasStationKeepingRouter;