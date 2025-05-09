import ConnectFacebookButton from "./connect-facebook-button";

export default function EmptyGroups() {
  return (
    <div className="container w-[600px] h-[200px] border rounded-md flex flex-col items-center justify-center space-y-4 text-center">
      <p className="text-lg font-bold">You haven&apos;t setup any of your groups just yet!</p>
      <p>After connecting your account, the groups that you're members of will show up on this page.</p>
      <ConnectFacebookButton />
    </div>
  )
}