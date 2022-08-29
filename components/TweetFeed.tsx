import { Tweet, Comment } from "../typings";
import TimeAgo from "react-timeago";
import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { fetchComments } from "../utils/fetchComments";

interface Props {
  tweet: Tweet;
}

const TweetFeed = ({ tweet }: Props) => {
  const [comments, setComments] = useState<Comment[]>();

  const refereshComments = async () => {
    const comments: Comment[] = await fetchComments(tweet._id);
    setComments(comments);
  };

  useEffect(() => {
    refereshComments();
  }, []);

  // console.log(comments);
  return (
    <div className=" flex flex-col space-x-3 border-y border-gray-100 p-5 ">
      <div className="flex space-x-3">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={tweet.profileImg}
          alt=""
        />
        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{tweet.username}</p>
            <p className="hidden text-[15px] text-gray-500 sm:inline">
              @{tweet.username.replace(/\s+/g, "").toLowerCase()} .
            </p>
            <TimeAgo
              className="text-gray-500  text-[15px]"
              date={tweet._createdAt}
            />
          </div>
          <p className="">{tweet?.text}</p>
          {tweet?.image && (
            <img
              src={tweet?.image}
              className="m-5 mb-1 ml-0 max-h-80 rounded-lg object-cover shadow-sm"
            />
          )}
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex cursor-pointer items-center space-x-4 text-gray-400">
          <ChatAlt2Icon className="h-5 w-5" />
          <p>5</p>
        </div>
        <div className="flex cursor-pointer items-center space-x-4 text-gray-400">
          <SwitchHorizontalIcon className="h-5 w-5" />
        </div>
        <div className="flex cursor-pointer items-center space-x-4 text-gray-400">
          <HeartIcon className="h-5 w-5" />
        </div>
        <div className="flex cursor-pointer items-center space-x-4 text-gray-400">
          <UploadIcon className="h-5 w-5" />
        </div>
      </div>

      {comments!?.length > 0 && (
        <div className="my-2 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-100 p-5">
          {comments?.map((comment) => (
            <div key={comment._id} className="flex relative space-x-2">
              <hr className="absolute left-5 top-10 h-8 border-x border-twitter/30" />
              <img
                className="mt-2 h-7 w-7 object-cover rounded-full "
                src={comment?.profileImg}
                alt=""
              />
              <div>
                <div className="flex items-center space-x-2">
                  <p className="mr-2 font-bold">{comment.username}</p>
                  <p className="hidden text-[15px] text-gray-500 sm:inline">
                    @{comment.username.replace(/\s+/g, "").toLowerCase()} .
                  </p>
                  <TimeAgo
                    className="text-gray-500  text-[15px]"
                    date={comment._createdAt}
                  />
                </div>
                <p className="text-gray-500">{comment?.comment}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TweetFeed;
