import {
  BellIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  HashtagIcon,
  HomeIcon,
  MailIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import SideBarsOptions from "./SideBarsOptions";

const SideBar = () => {
  return (
    <div>
      <Image
        className="h-10 w-10"
        src="https://toppng.com/uploads/preview/twitter-logo-11549680523gyu1fhgduu.png"
        alt="logo"
        width={50}
        height={50}
        objectFit={"contain"}
      />
      <SideBarsOptions Icon={HomeIcon} title="Home" />
      <SideBarsOptions Icon={HashtagIcon} title="Explore" />
      <SideBarsOptions Icon={BellIcon} title="Notifications" />
      <SideBarsOptions Icon={MailIcon} title="Messages" />
      <SideBarsOptions Icon={BookmarkIcon} title="Bookmarks" />
      <SideBarsOptions Icon={CollectionIcon} title="List" />
      <SideBarsOptions Icon={DotsCircleHorizontalIcon} title="More" />

      <SideBarsOptions Icon={UserIcon} title="Sign in" />
    </div>
  );
};

export default SideBar;
