import { SearchIcon } from "@heroicons/react/outline";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Widgets = () => {
  return (
    <div className="px-2 mt-2 col-span-2 hidden overflow-hidden lg:inline lg:max-w-6xl">
      {/* search */}
      <div className="flex items-center space-x-2 bg-gray-100 p-2 mt-2 rounded-full">
        <SearchIcon className="h-6 text-gray-400" />
        <input
          type="text"
          placeholder="search Twitter"
          className="flex-1 outline-none bg-transparent "
        />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="BillGates"
        options={{ height: 400 }}
      />
    </div>
  );
};

export default Widgets;
