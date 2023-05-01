import { Wilder } from "../entity/Wilder";
import { Profile } from "../entity/Profile";
import dataSource from "../utils";
import { Request, Response } from "express";

const wilderController = {
  create: async (req: Request, res: Response) => {
    try {
      const wilder = await dataSource.getRepository(Wilder).create(req.body);
      const results = await dataSource.getRepository(Wilder).save(wilder);
      const wilderFound = await dataSource
        .getRepository(Wilder)
        .findOneByOrFail({ name: req.body.name });
      console.log(wilderFound);
      wilderController.addProfileToWilder(
        wilderFound,
        req.body.gender,
        req.body.age,
        req.body.photo_id
      );
      res.send("Wilder Created");
    } catch (err) {
      console.log(err);
      res.send("Error while creating the wilder");
    }
  },
  read: async (req: Request, res: Response) => {
    try {
      const allWilders = await dataSource
        .getRepository(Wilder)
        .find({ relations: { grades: { skill: true }, profile: true } });
      res.send(allWilders);
    } catch (err) {
      console.log(err);
      res.send("Error while reading the wilders");
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await dataSource.getRepository(Wilder).delete(req.params.id);
      res.send("Wilder deleted");
    } catch (err) {
      console.log(err);
      res.send("Error while deleting the wilder");
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const updateResult = await dataSource
        .getRepository(Wilder)
        .update(req.params.id, req.body);
      res.send(updateResult);
    } catch (err) {
      console.log(err);
      res.send("Error while updating");
    }
  },

  addProfileToWilder: async (
    wilder: Wilder,
    gender?: string,
    age?: string,
    photo_id?: string
  ) => {
    console.log("addProfileToWilder");
    const profile = new Profile();
    profile.id = wilder.id;
    profile.gender = gender || "Unkown";
    profile.photo_id = photo_id || "99";
    profile.age = age || "0";
    await dataSource.manager.save(profile);
    // wilder.profile = req.body;
    wilder.profile = profile;
    await dataSource.getRepository(Wilder).save(wilder);
    console.log("Profile created");
  },
  createProfile: async (req: Request, res: Response) => {
    try {
      console.log("wilder name" + req.body.wilderName);
      const wilder = await dataSource
        .getRepository(Wilder)
        .findOneByOrFail({ name: req.body.wilderName });
      console.log(wilder);

      if (wilder) {
        console.log("wilder found");
        wilderController.addProfileToWilder(
          wilder,
          req.body.gender,
          req.body.age,
          req.body.photo_id
        );
      } else {
        console.log("wilder not found");
        res.send("Wilder not found");
      }
    } catch (err) {
      console.log(err);
      res.send("Error while creating the profile");
    }
  },
};

export default wilderController;
