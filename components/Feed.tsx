import { RefreshIcon } from "@heroicons/react/outline";
import { Tweet } from "../typings";
import TweetBox from "./TweetBox";
import TweetFeed from "./TweetFeed";

interface tweetProps {
  tweets: Tweet[];
}

const Feed = ({ tweets }: tweetProps) => {
  return (
    <div className="col-span-7  border-x lg:col-span-5">
      <div className="flex items-center justify-between">
        <h1 className="pb-0 p-5 text-xl font-bold ">Home</h1>
        <RefreshIcon className="h-6 w-6 mr-5 mt-5 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>

      {/* tweet box */}
      <div>
        <TweetBox />
      </div>

      {/* tweet Feed */}
      <div>
        {tweets.map((tweet) => (
          <TweetFeed key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
