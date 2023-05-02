import { Wilder } from "../entity/Wilder";
import dataSource from "../utils";
import { Request, Response } from "express";

export const playWithTypeOrm = async (req: Request, res: Response) => {
  const wilderRepository = dataSource.getRepository(Wilder);

  const wilder = new Wilder();
  wilder.name = "Timber";
  const result = await wilderRepository.save(wilder);

  const allWilders = await wilderRepository.find();
  const firstWilder = await wilderRepository.findOneBy({
    id: "1",
  }); // find by id
  const timber = await wilderRepository.findOneBy({
    name: "Timber",
  }); // find by name

  timber && timber.id && (await wilderRepository.delete(timber.id));
};
