import express, { Express } from "express";
import { Server } from "http";
import { ExeptionFilter } from "./common/errors/exeption.filter";
import { LoggerService } from "./logger/logger";
import { UsersController } from "./users/users.controller";

export class App {
	app: Express;
	server: Server;
	port: number;
	logger: LoggerService;
	usersController: UsersController;
	exeptionFilter: ExeptionFilter;

	constructor(
		logger: LoggerService,
		usersController: UsersController,
		exeptionFilter: ExeptionFilter
	) {
		this.app = express();
		this.port = 7000;
		this.logger = logger;
		this.usersController = usersController;
		this.exeptionFilter = exeptionFilter;
	}

	useRouts() {
		this.app.use("/users", this.usersController.router);
	}

	useExeptionFilters() {
        this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter))
    }

	public async init() {
		this.useRouts();
		this.useExeptionFilters();
		this.server = this.app.listen(this.port);
		this.logger.log(`Server has startd... on ${this.port} port`);
	}
}
