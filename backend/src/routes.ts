import { OrganiserController } from "./controller/OrganiserController";

export const Routes = [
    {
      method: "get",
      route: "/friends",
      controller: OrganiserController,
      action: "all",
    },
];