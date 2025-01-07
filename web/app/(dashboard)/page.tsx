import EmptyGroups from "@/components/empty-groups"

export default function DashboardPage() {
  const groups = 0

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center">
      <h1 className="absolute top-0 left-0 text-2xl font-black">Your Facebook Groups</h1>
      <EmptyGroups />
    </div>
  )
}