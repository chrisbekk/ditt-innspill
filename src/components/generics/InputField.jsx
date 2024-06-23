export default function InputField({
  id,
  label,
  type = 'text',
  placeholder,
  isRequired = false,
  value,
  handleChange,
}) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="hidden" aria-label="Søk i prosjekter">
        {label}
      </label>
      <input
        type={type}
        required={isRequired}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full h-10 py-7 pl-4 border border-neutral-300 rounded-sm focus:outline-none focus:border-custom_green focus:border-2"
      />
    </div>
  );
}
