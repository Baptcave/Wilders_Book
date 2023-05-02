import { Wilder } from "../entity/Wilder";
import dataSource from "../utils";
import { Request, Response } from "express";
import { Not } from "typeorm";
const playController = {
  playWithTypeOrm: async (req: Request, res: Response) => {
    console.log("let play With TypeOrm");
    const wilderRepository = dataSource.getRepository(Wilder);

    const wilder = new Wilder();
    wilder.name = "James";
    const result = await wilderRepository.save(wilder);
    console.log("result", result);
    const allWilders = await wilderRepository.find();
    console.log("allWilders" + allWilders);
    const firstWilder = await wilderRepository.findOneBy({
      id: "2",
    }); // find by id
    console.log("first wilder name : " + firstWilder);
    const James = await wilderRepository.findOneBy({
      name: "James",
    }); // find by name
    console.log("James : " + James?.id);

    James &&
      (await wilderRepository.update(James.id, {
        name: "Eric" + James.id,
      })); // update

    wilderRepository
      .find({
        where: {
          version: 2,
        },
        order: {
          name: "ASC",
          id: "DESC",
        },
        take: 5, // pagination
        skip: 1, // pagination
      })
      .then((allV2Wilders) => {
        allV2Wilders.forEach((wilder) => {
          console.log("wilder v2 : " + wilder.name);
        });
      }); // find all
    James && James.id && (await wilderRepository.delete(James.id));

    const loadedPosts = await wilderRepository.findBy({
      name: Not("Eric"),
    });
    loadedPosts.forEach((wilder) => {
      console.log("wilder différent d'Eric : " + wilder.name);
    });

    const [allWilders2, wildersCount] = await wilderRepository.findAndCount();
    console.log("allWilders length : " + allWilders2.length);
    console.log("wildersCount : " + wildersCount);

    // find all Eric:
    const allEric = await wilderRepository.find({
      where: {
        name: "Eric",
      },
    });
    console.log("allEric : " + allEric.length + " wilders");
    // delete all Eric:
    // await wilderRepository.remove(allEric);
  },
};
export default playController;
