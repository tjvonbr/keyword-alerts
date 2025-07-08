import { auth } from "@/auth";
import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardShell } from "@/components/dashboard-shell";
// import EmptyIntegrations from "@/components/empty-integrations";
import { LeadsList } from "@/components/leads-list";
import { getIntegrationsByUserId } from "@/lib/integrations";
import { getLeadsByUserId } from "@/lib/data/leads";
// import { getPlatforms } from "@/lib/platforms";
import { redirect } from "next/navigation";
import React from "react";

export default async function LeadsPage() {
  const session = await auth()

  if (!session?.user?.id) {
    redirect('/sign-in')
  }

  const integrations = await getIntegrationsByUserId(session?.user?.id)
  // const platforms = await getPlatforms()
  const leads = await getLeadsByUserId()

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Leads"
        text={integrations && integrations.length < 1 ? "Connect your social media accounts to start monitoring keywords and finding leads" : "Manage your leads"}
      />
      <LeadsList leads={leads} />
    </DashboardShell>
  );
}