import { Icons } from "../Icons";

export const Chat = () => {



  return (
    <div className="fixed bottom-0 right-0 pr-6 pb-4 z-50">
      <a href="" className="">
        <div className="relative bg-brand-sky p-3 rounded-full">
          <Icons.Chat size={32}/>
          <span className="absolute size-4 bg-red-500 rounded-full top-0 right-0"></span>
        </div>
      </a>
    </div>
  );
};