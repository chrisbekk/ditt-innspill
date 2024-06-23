export default function Button({ large = true, handleClick, children }) {
  return (
    <button
      onClick={handleClick}
      className={`bg-custom_black ${large ? 'py-3 px-8' : 'py-2 px-4 text-sm'} text-white font-light rounded-sm hover:bg-black transition-colors`}
    >
      <span className="flex gap-2 items-center">{children}</span>
    </button>
  );
}
