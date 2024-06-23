import { FaCircle } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';

export default function Tag({ name, handleClick }) {
  return (
    <div
      onClick={handleClick}
      className="border border-black rounded-full max-w-[120px] lg:max-w-max truncate flex gap-2 items-center px-2 py-1 hover:bg-neutral-100 hover:cursor-pointer"
    >
      <FaCircle className="text-[6px]" />
      <p className="text-ellipsis overflow-hidden ..">{name}</p>
      <RxCross2 className="text-[10px] text-black" />
    </div>
  );
}
