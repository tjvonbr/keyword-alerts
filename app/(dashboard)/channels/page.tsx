import { auth } from "@/auth";
import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardShell } from "@/components/dashboard-shell";
import EmptyIntegrations from "@/components/empty-integrations";
import { getIntegrationsByUserId } from "@/lib/integrations";
import { redirect } from "next/navigation";
import React from "react";

export default async function ChannelsPage() {

  const session = await auth()

  if (!session?.user?.id) {
    redirect('/sign-in')
  }

  const integrations = await getIntegrationsByUserId(session?.user?.id)

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Channels"
        text={integrations && integrations.length < 1 ? "Connect your social media accounts to start monitoring keywords and finding leads" : "Manage your channels and their settings"}
      />
      {integrations && integrations.length < 1 ? (
        <EmptyIntegrations />
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <p>Integrations found</p>
        </div>
      )}
    </DashboardShell>
  );
}