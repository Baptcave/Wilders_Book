import { useState } from "react";
import axios from "axios";

const AddWilderForm = ({
  setLastUpdate,
}: {
  setLastUpdate: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [wilderName, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [gender, setGender] = useState("");
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/wilders", {
          name: wilderName,
          // age: age,
          // gender: gender,
          photo_id: Math.floor(Math.random() * 9),
        });
        setLastUpdate(new Date().getTime());
      }}
    >
      <h3>Add Wilder</h3>
      <label>Name </label>
      <input
        value={wilderName}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      {/* <label>Age </label>
      <input
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <br />
      <label>Gender </label>
      <select
        onChange={(e) => {
          setGender(e.target.value);
        }}
        name="wilders"
        id="wilderselectgender"
      >
        <option value="">--Please choose an option--</option>
        <option key="1" value="Male">
          Male
        </option>
        <option key="2" value="Female">
          Female
        </option>
      </select>
      <br /> */}
      <button>Submit</button>
    </form>
  );
};

export default AddWilderForm;
