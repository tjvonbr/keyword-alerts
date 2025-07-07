import { auth } from "@/auth";
import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardShell } from "@/components/dashboard-shell";
import { ChannelsKeywordsList } from "@/components/channels-keywords-list";
import { KeywordsSummary } from "@/components/keywords-summary";
import { getChannelsWithKeywordsByUserId } from "@/lib/channels";
import { redirect } from "next/navigation";
import React from "react";

export default async function KeywordsPage() {
  const session = await auth()

  if (!session?.user?.id) {
    redirect('/sign-in')
  }

  const channels = await getChannelsWithKeywordsByUserId(session.user.id)

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Keywords"
        text="Manage your keyword settings and monitor channels"
      />
      <KeywordsSummary channels={channels} />
      <ChannelsKeywordsList channels={channels} />
    </DashboardShell>
  );
}