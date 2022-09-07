import Image from "next/image";
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";
import { useState } from "react";

const TweetBox = () => {
  const [input, setInput] = useState<string>("");
  return (
    <div className="flex space-x-2 p-5">
      <Image
        className="rounded-full"
        src={"https://links.papareact.com/gll"}
        height={50}
        width={50}
        objectFit="cover"
        alt="profile"
      />
      <div className="flex  flex-1 items-center pl-2">
        <form className="flex flex-1  flex-col">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="what's Happening?"
            className="h-19 w-full text-sm outline-none "
          />
          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-twitter">
              <PhotographIcon className="h-5 w-5 hover:cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <SearchCircleIcon className="h-5 w-5" />
              <EmojiHappyIcon className="h-5 w-5" />
              <CalendarIcon className="h-5 w-5" />
              <LocationMarkerIcon className="h-5 w-5" />
            </div>
            <button
              disabled={!input}
              className="bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TweetBox;
