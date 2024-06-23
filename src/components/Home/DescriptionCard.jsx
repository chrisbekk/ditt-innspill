export default function DescriptionCard({ src, alt, children }) {
  return (
    <div>
      <div className="h-[690px] md:h-[387px] md:w-full max-w-[500px] mx-auto">
        <img src={src} alt={alt} className="h-full w-full object-contain" />
      </div>
      {children}
    </div>
  );
}
