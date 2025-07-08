import { auth } from "@/auth";
import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardShell } from "@/components/dashboard-shell";
import { ChannelsKeywordsList } from "@/components/channels-keywords-list";
import { AddKeywordForm } from "@/components/add-keyword-form";
import { redirect } from "next/navigation";
import React from "react";
import { channels } from "@/lib/data/channels";

export default async function KeywordsPage() {
  const session = await auth()

  if (!session?.user?.id) {
    redirect('/sign-in')
  }

  // const channels = await getChannelsWithKeywordsByUserId(session.user.id)

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Keywords"
        text="Manage your keyword settings and monitor channels"
      />
      
      <div className="mt-8 space-y-8">
        <AddKeywordForm channels={channels} />
        <div className="space-y-4">
          <h3 className="font-heading text-2xl md:text-3xl">Channels</h3>
          <ChannelsKeywordsList channels={channels} />
        </div>
      </div>
    </DashboardShell>
  );
}