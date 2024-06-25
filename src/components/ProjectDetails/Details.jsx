export default function Details({ details }) {
  console.log(details);
  return (
    <div className="w-full p-10 bg-custom_yellow">
      <h2 className="text-2xl md:text-3xl font-medium">Detaljer om plan</h2>
      <div className="text-[#4B4A4C] tracking-wide mt-10">
        <div className="mb-6 md:grid md:grid-cols-[0.4fr_1fr]">
          <p>Status</p>
          <p>{details?.status}</p>
        </div>
        <div className="mb-6 md:grid md:grid-cols-[0.4fr_1fr]">
          <p>Plannavn</p>
          <p>{details?.planName}</p>
        </div>
        <div className="mb-6 md:grid md:grid-cols-[0.4fr_1fr]">
          <p>Plantype</p>
          <p>{details?.planType}</p>
        </div>
        <div className="mb-6 md:grid md:grid-cols-[0.4fr_1fr]">
          <p>Nasjonal arealplanID</p>
          <p>{details?.planID}</p>
        </div>
        <div className="mb-6 md:grid md:grid-cols-[0.4fr_1fr]">
          <p>Lenke til plan</p>
          <a href={details?.link}>Se i arealplaner.no</a>
        </div>
      </div>
    </div>
  );
}
