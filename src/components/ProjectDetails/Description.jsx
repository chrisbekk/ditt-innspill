export default function Description({ text }) {
  const textArray = text?.split('\n');
  return (
    <div className="w-full">
      {textArray?.map((p, index) => (
        <p key={index} className="my-5 tracking-wide">
          {p}
        </p>
      ))}
    </div>
  );
}
