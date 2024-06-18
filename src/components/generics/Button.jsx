export default function Button({ handleClick, children }) {
  return (
    <button
      onClick={handleClick}
      className="bg-custom_black py-3 px-8 text-white font-light rounded-sm hover:bg-black transition-colors"
    >
      <span className="flex gap-2 items-center">{children}</span>
    </button>
  );
}
