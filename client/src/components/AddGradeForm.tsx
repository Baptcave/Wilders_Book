import axios from "axios";
import { useEffect, useState } from "react";
import { IWilderProps } from "./Wilder";
import { ISkillProps } from "./Skill";

const AddGradeForm = () => {
  const [wilderId, setWilderId] = useState<string>("");
  const [skillId, setSkillId] = useState<string>("");
  const [grade, setGrade] = useState<string>("");
  const [wilders, setWilders] = useState<IWilderProps[]>([]);
  const [skills, setSkills] = useState<ISkillProps[]>([]);
  useEffect(() => {
    const fetchWilders = async () => {
      const wildersAPI = await axios.get<IWilderProps[]>(
        "http://localhost:8000/api/wilders"
      );
      console.log("wilders", wildersAPI);
      setWilders(wildersAPI.data);
    };
    const fetchSkills = async () => {
      const skillsAPI = await axios.get<ISkillProps[]>(
        "http://localhost:8000/api/skills"
      );
      console.log("skills", skillsAPI);
      setSkills(skillsAPI.data);
    };
    fetchWilders();
    fetchSkills();
  }, []);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/grades", {
          wilderId: wilderId,
          skillId: skillId,
          grade: grade,
        });
      }}
    >
      <h3>Add Grade to Wilder</h3>
      wilderid
      <select
        onChange={(e) => {
          setWilderId(e.target.value);
        }}
        name="wilders"
        id="wilderselect"
      >
        <option value="">--Please choose an option--</option>
        {wilders.map((wilder) => (
          <option key={wilder.id} value={wilder.id}>
            {wilder.name}
          </option>
        ))}
      </select>
      <br></br>
      skillid
      <select
        onChange={(e) => {
          setSkillId(e.target.value);
        }}
        name="skills"
        id="wilderselectskill"
      >
        <option value="">--Please choose an option--</option>
        {skills.map((skill) => (
          <option key={skill.id} value={skill.title}>
            {skill.title}
          </option>
        ))}
      </select>
      <br></br>
      grade
      <input
        value={grade}
        onChange={(e) => {
          setGrade(e.target.value);
        }}
      />
      <br></br>
      <button>Submit</button>
    </form>
  );
};

export default AddGradeForm;
