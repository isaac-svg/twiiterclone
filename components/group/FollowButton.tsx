import { IoMdPersonAdd } from "react-icons/io";

import { Button } from "@/components/ui/button"

export function FollowButton() {
  return (
    <Button className="rounded bg-[#2F80ED] text-white hover:bg-[#3182ed]">
      <IoMdPersonAdd className="mr-2 h-4 w-4 text-white"/>
      Follow
    </Button>
  )
}
