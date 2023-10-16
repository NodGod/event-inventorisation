import * as bodyParser from "body-parser";
import * as express from 'express';
import router from "./routes";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { Item } from "./entity/Item";
import { OrganisedEvent } from "./entity/Event";
import { Organiser } from "./entity/Organiser";

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();
    app.use(bodyParser.json());
    app.use('/api', router);
    //app.use(auth);
    // Routes.forEach((route) => {
    //   (app as any)[route.method](
    //     route.route,
    //     (req: Request, res: Response, next: Function) => {
    //       const result = new (route.controller as any)()[route.action](
    //         req,
    //         res,
    //         next,
    //       );
    //       if (result instanceof Promise) {
    //         result.then((result) =>
    //           result !== null && result !== undefined
    //             ? res.send(result)
    //             : undefined
    //         );
    //       } else if (result !== null && result !== undefined) {
    //         res.json(result);
    //       }
    //     },
    //   );
    // });

    // setup express app here

    // start express server
    app.listen(3000);

    // insert test data
    await seedDB();

    console.log(
      "Express server has started on port 3000. Open http://localhost:3000 to see results",
    );
  }).catch((error) => console.log(error));

async function seedDB() {
  // insert new hobbies for test
  const res = await AppDataSource.manager.find(Organiser);
  if (res.length === 0) {
    const item1 = new Item();
    item1.name = "Duct tape 50m";
    item1.price = 4.99;
    item1.quantity = 5;
    await AppDataSource.manager.save(item1);
    const item2 = new Item();
    item2.name = "Zip ties 100 pieces";
    item2.price = 2.99;
    item2.quantity = 3;
    await AppDataSource.manager.save(item2);
    const item3 = new Item();
    item3.name = "Extension cord 5m";
    item3.price = 3.99;
    item3.quantity = 5;
    await AppDataSource.manager.save(item3);
    const event1 = new OrganisedEvent();
    event1.name = "BetaLAN";
    event1.description = "Event where you bring our own computer to play video games"
    event1.address = "Studentu g. 50";
    event1.date = new Date(2023, 10, 27);
    event1.items = [item1, item2, item3];
    await AppDataSource.manager.save(event1);
    const item4 = new Item();
    item4.name = "Hot Tub";
    item4.price = 200;
    item4.quantity = 2;
    await AppDataSource.manager.save(item4);
    const event2 = new OrganisedEvent();
    event2.name = "Buk Sveikas";
    event2.description = "Event where you can chill in a hot tub during a break"
    event2.address = "Studentu g. 50";
    event2.date = new Date(2024, 2, 10);
    event2.items = [item4];
    await AppDataSource.manager.save(event2);
    const organiser1 = new Organiser();
    organiser1.name = "InfoSA";
    organiser1.email = "pirmininkas@infosa.lt";
    organiser1.phoneNumber = "888888888";
    organiser1.events = [event1, event2];
    await AppDataSource.manager.save(organiser1);
  }
}
