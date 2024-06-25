import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Pending() {
  return (
    <div className="h-screen flex items-center justify-center">
      <AiOutlineLoading3Quarters className="animate-spin text-4xl text-custom_green" />
    </div>
  );
}
