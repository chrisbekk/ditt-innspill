export default function AltHeader({ setToggleFilter }) {
  return (
    <div className="w-full h-16 flex md:hidden">
      <div className=" h-full w-full relative">
        <label htmlFor="search" className="block" aria-hidden>
          Søk
        </label>
        <input
          type="text"
          id="search"
          className="absolute inset-0 bg-slate-50 focus:outline-none"
          placeholder="Søk"
        />
      </div>
      <button
        onClick={() => setToggleFilter(prev => !prev)}
        className="hover:bg-gray-100 transition-colors px-4"
      >
        <img src="./filterbars.svg" />
      </button>
    </div>
  );
}
