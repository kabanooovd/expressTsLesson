import express, { Express } from "express";
import { userRouter } from "./users/users";
import { Server } from "http";
import { LoggerService } from "./logger/logger";

export class App {
	app: Express;
    server: Server;
    port: number;
    logger: LoggerService;

	constructor(logger: LoggerService) {
        this.app = express()
        this.port = 7000;
        this.logger = logger;
    }

    useRouts() {
        this.app.use("/users", userRouter)
    }


	public async init() {
        this.useRouts()
        this.server = this.app.listen(this.port)
        // console.log(`Server has startd... on ${this.port} port`)
        this.logger.log(`Server has startd... on ${this.port} port`)
    }
}
