import { RefreshIcon } from "@heroicons/react/outline";

const Feed = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="pb-0 p-5 text-xl font-bold ">Home</h1>
        <RefreshIcon className="h-6 w-6 mr-5 mt-5 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>
    </div>
  );
};

export default Feed;
