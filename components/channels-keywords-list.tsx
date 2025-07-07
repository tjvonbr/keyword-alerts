import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Channel, Keyword, Platform } from "@prisma/client";
import { Badge } from "./ui/badge";

type ChannelWithKeywords = Channel & {
  keywords: Keyword[];
  platform: Platform;
};

interface ChannelsKeywordsListProps {
  channels: ChannelWithKeywords[];
}

export function ChannelsKeywordsList({ channels }: ChannelsKeywordsListProps) {
  if (channels.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-muted-foreground">No channels found</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Connect your social media accounts to start monitoring keywords and finding leads
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {channels.map((channel) => (
        <Card key={channel.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">{channel.name}</CardTitle>
                <CardDescription>
                  Platform: {channel.platform.name}
                </CardDescription>
              </div>
              <Badge variant="secondary">
                {channel.keywords.length} keyword{channel.keywords.length !== 1 ? 's' : ''}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            {channel.keywords.length > 0 ? (
              <div className="space-y-3">
                <h4 className="font-medium text-sm text-muted-foreground">Keywords:</h4>
                <div className="flex flex-wrap gap-2">
                  {channel.keywords.map((keyword) => (
                    <Badge 
                      key={keyword.id} 
                      variant={keyword.status === 'ACTIVE' ? 'default' : 'secondary'}
                    >
                      {keyword.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                No keywords configured for this channel
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 