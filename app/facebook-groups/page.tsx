"use client";

import FacebookGroups from "@/components/facebook-groups";

export default function FacebookGroupsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">My Facebook Groups</h1>
      <div className="bg-white rounded-lg shadow-md">
        <FacebookGroups />
      </div>
    </div>
  );
} 