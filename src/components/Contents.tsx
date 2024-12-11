import FormContainer from "./FormContainer";

export default function Contents() {
  return (
    <div className="w-1/2 h-fit mx-auto p-4 bg-neutral-300 text-black rounded-md shadow-2xl">
      <h1 className="text-2xl text-center font-bold font-mono underline">
        Carnet d'adresse
      </h1>
      <FormContainer />
    </div>
  );
}
