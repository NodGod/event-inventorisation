import { Request, Response } from 'express';
import { AppDataSource } from "../data-source";
import { Organiser } from '../entity/Organiser';

export class OrganiserController{

}

export const createOrganiser = async (req: Request, res: Response) => {
  const { name, description, phoneNumber, email, events } = req.body;

  const organiser = new Organiser();
  organiser.name = name;
  organiser.phoneNumber = phoneNumber;
  organiser.email = email;

  // Assuming events is an array of event objects
  organiser.events = events;

  const organiserRepository = AppDataSource.getRepository(Organiser);
  await organiserRepository.save(organiser);

  res.status(201).json({ organiser });
};

export const getAllOrganisers = async (req: Request, res: Response) => {
  const organiserRepository = AppDataSource.getRepository(Organiser);
  const organisers = await organiserRepository.find({ relations: ['events'] });

  res.json({ organisers });
};
