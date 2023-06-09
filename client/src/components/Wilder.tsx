import axios from "axios";
import Skill, { ISkillProps } from "./Skill";
import blank_profile from "../assets/profile.png";

export interface IWilderProps {
  name: string;
  id: number;
  skills: ISkillProps[];
  photo_id: string;
}

const handleDelete = (id: number) => {
  axios.delete("http://localhost:8000/api/wilders/" + id);
};

const Wilder = ({ name, id, skills, photo_id }: IWilderProps) => {
  return (
    <article className="card">
      <img
        src={
          photo_id ? process.env.PUBLIC_URL + photo_id + ".png" : blank_profile
        }
        alt="Jane Doe Profile"
      />
      <h3>{name}</h3>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((skill) => (
          <Skill key={skill.title} title={skill.title} votes={skill.votes} />
        ))}
      </ul>
      <h4>Experience:</h4>
      <ul className="experience">
        <li>2018 - 2020: Vercel</li>
        <li>2016 - 2018: Orange</li>
        <li>2014 - 2016: Netflix</li>
      </ul>
    </article>
  );
};

export default Wilder;
