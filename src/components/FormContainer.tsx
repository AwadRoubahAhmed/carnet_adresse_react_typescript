import { useState } from "react";
import { AdresseType } from "./typescript/AdresseType";

export default function FormContainer() {
  //state;
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [addAdresses, setAddAdresses] = useState<AdresseType[]>([]);

  //Compotement;
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submited !!");
    const addContentsAdresse: AdresseType = {
      name,
      email,
    };

    if (name.length && email.length > 0) {
      setAddAdresses([...addAdresses, addContentsAdresse]);
    }
    setName("");
    setEmail("");
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  return (
    <div>
      <form action="sunbmit" onSubmit={handleSubmit} className="my-4">
        <div className="mb-3 flex items-center">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            placeholder="Name..."
            value={name}
            onChange={handleChangeName}
            className="w-full border-none mx-1 p-1 capitalize font-semibold"
          />
        </div>
        <div className=" flex  items-center">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            placeholder="Email..."
            value={email}
            onChange={handleChangeEmail}
            className="w-full border-none mx-1 p-1  font-semibold"
          />
        </div>
        <button
          type="submit"
          className="border w-full bg-slate-800 hover:bg-slate-700 text-white rounded-md mt-6"
        >
          Add
        </button>
      </form>
      <hr />
      <div>
        {addAdresses.length > 0 && (
          <ul className="flex flex-col ">
            {addAdresses.map((adresse) => (
              <li
                key={adresse.email}
                className="border bg-neutral-400 rounded-md my-1 p-3"
              >
                {adresse.name} : {adresse.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
