import express from "express";
import cors from "cors";
import dataSource from "./utils";
import wilderController from "./controller/WilderController";
import skillController from "./controller/SkillController";
import gradeController from "./controller/GradeController";
import playController from "./controller/PlayController";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world from express");
});

app.post("/api/wilders", wilderController.create);
app.get("/api/wilders", wilderController.read);
app.put("/api/wilders/:id", wilderController.update);
app.delete("/api/wilders/:id", wilderController.delete);
app.post("/api/createProfile", wilderController.createProfile);

app.post("/api/skills", skillController.create);
app.get("/api/skills", skillController.read);
app.delete("/api/skills/:id", skillController.delete);
app.put("/api/skills/:id", skillController.update);

app.post("/api/grades", gradeController.create);

// test endpoint
app.get("/api/play", playController.playWithTypeOrm);

const start = async (): Promise<void> => {
  await dataSource.initialize();

  app.listen(8000, () => {
    console.log("Server started");
  });
};

void start();
