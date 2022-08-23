import { RefreshIcon } from "@heroicons/react/outline";
import TweetBox from "./TweetBox";

const Feed = () => {
  return (
    <div className="col-span-7  border-x lg:col-span-5">
      <div className="flex items-center justify-between">
        <h1 className="pb-0 p-5 text-xl font-bold ">Home</h1>
        <RefreshIcon className="h-6 w-6 mr-5 mt-5 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>

      {/* tweet box */}
      <TweetBox />
    </div>
  );
};

export default Feed;
