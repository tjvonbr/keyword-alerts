import { Facebook, Icon } from "lucide-react";
import { Button } from "./ui/button";

export default function EmptyGroups() {
  return (
    <div className="w-[600px] h-[200px] border rounded-md flex flex-col items-center space-y-4">
      <p className="text-lg font-bold">You haven&apos;t connected your Facebook profile yet!</p>
      <p>After connecting your account, the groups that you're members of will show up on this page.</p>
      <Button variant="default">
        Connect your Facebook account
      </Button>
    </div>
  )
}