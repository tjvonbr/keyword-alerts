import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Channel, Keyword, Platform } from "@prisma/client";

export type ChannelWithKeywords = Channel & {
  keywords: Keyword[];
  platform: Platform;
};

interface KeywordsSummaryProps {
  channels: ChannelWithKeywords[];
}

export function KeywordsSummary({ channels }: KeywordsSummaryProps) {
  const totalChannels = channels.length;
  const totalKeywords = channels.reduce((sum, channel) => sum + channel.keywords.length, 0);
  const activeKeywords = channels.reduce((sum, channel) => 
    sum + channel.keywords.filter(k => k.status === 'ACTIVE').length, 0
  );
  const platforms = Array.from(new Set(channels.map(channel => channel.platform.name)));

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Channels</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalChannels}</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Keywords</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalKeywords}</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Keywords</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{activeKeywords}</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Platforms</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{platforms.length}</div>
          <p className="text-xs text-muted-foreground">
            {platforms.join(', ')}
          </p>
        </CardContent>
      </Card>
    </div>
  );
} 