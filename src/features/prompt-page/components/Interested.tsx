import { useInterested } from "../hooks/useInterested";
import { WizardNavigation } from "./WizardNavigation";
import { vacationInterests } from "@/constant/interests";

export const Interested = () => {
  const {selectedInterests, isLoading, isError, isValid, handleTogglePreferences, handleSubmit} = useInterested();

  return (
    <section className=" w-2/3 m-auto ">
      <div className="text-center">
        <h1 className="mt-10 mb-8 text-4xl font-bold ">
          Beritahu kami apa yang Anda minati
        </h1>
        <p className="text-slate-400 text-lg pb-12">Pilih semua yang berlaku</p>
      </div>

      <div className=" flex flex-wrap gap-4 justify-center">
        {vacationInterests.map((interest) => (
          <label
            key={interest.value}
            className="inline-flex items-center gap-2 rounded-full border px-6 py-4 text-base font-semibold hover:bg-slate-200 has-[:checked]:bg-[#34e0a1] cursor-pointer has-[:checked]:text-black"
          >
            <input
              type="checkbox"
              value={interest.value}
              className="appearance-none hidden checked:border-transparent w-5 h-5 rounded"
              onChange={() => handleTogglePreferences(interest.value)}
              checked={selectedInterests.includes(interest.value)}
            />
            <span>{interest.label}</span>
          </label>
        ))}
      </div>
      {isError && <p className="text-red-500 text-center mt-4">{isError}</p>}
      {isLoading ? (<p className="text-xl text-slate-400 text-center mt-3 font-semibold animate-pulse">Please wait...</p>) :
      (<WizardNavigation onSubmit={handleSubmit} isValid={isValid} />)}
    </section>
  );
};
