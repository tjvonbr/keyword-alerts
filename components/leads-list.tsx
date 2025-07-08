import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lead } from "@/lib/data/leads";
import { ExternalLink, Mail, Phone, MapPin, Calendar, Hash } from "lucide-react";

interface LeadsListProps {
  leads: Lead[];
}

const getStatusColor = (status: Lead['status']) => {
  switch (status) {
    case 'new':
      return 'default';
    case 'contacted':
      return 'secondary';
    case 'qualified':
      return 'default';
    case 'converted':
      return 'default';
    case 'lost':
      return 'destructive';
    default:
      return 'secondary';
  }
};

const getStatusLabel = (status: Lead['status']) => {
  switch (status) {
    case 'new':
      return 'New';
    case 'contacted':
      return 'Contacted';
    case 'qualified':
      return 'Qualified';
    case 'converted':
      return 'Converted';
    case 'lost':
      return 'Lost';
    default:
      return status;
  }
};

export function LeadsList({ leads }: LeadsListProps) {
  if (leads.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-muted-foreground">No leads found</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Start monitoring keywords to discover potential leads
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {leads.map((lead) => (
        <Card key={lead.id} className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <CardTitle className="text-lg">{lead.name}</CardTitle>
                  <Badge variant={getStatusColor(lead.status)}>
                    {getStatusLabel(lead.status)}
                  </Badge>
                </div>
                <CardDescription className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {lead.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Hash className="h-3 w-3" />
                    {lead.keywordMatched}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {lead.postDate.toLocaleDateString()}
                  </div>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Contact Information */}
              <div className="flex flex-wrap gap-4">
                {lead.email && (
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a 
                      href={`mailto:${lead.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {lead.email}
                    </a>
                  </div>
                )}
                {lead.phone && (
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a 
                      href={`tel:${lead.phone}`}
                      className="text-blue-600 hover:underline"
                    >
                      {lead.phone}
                    </a>
                  </div>
                )}
                {lead.facebookProfileUrl && (
                  <div className="flex items-center gap-2 text-sm">
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    <a 
                      href={lead.facebookProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Facebook Profile
                    </a>
                  </div>
                )}
              </div>

              {/* Post Content */}
              <div>
                <h4 className="font-medium text-sm text-muted-foreground mb-2">Original Post:</h4>
                <p className="text-sm text-foreground bg-muted/50 p-3 rounded-md">
                  {lead.postContent}
                </p>
              </div>

              {/* Channel Information */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Channel: {lead.channelName}</span>
                <a 
                  href={lead.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 hover:underline"
                >
                  <ExternalLink className="h-3 w-3" />
                  View Post
                </a>
              </div>

              {/* Notes */}
              {lead.notes && (
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground mb-2">Notes:</h4>
                  <p className="text-sm text-foreground bg-blue-50 dark:bg-blue-950/20 p-3 rounded-md border-l-2 border-blue-200 dark:border-blue-800">
                    {lead.notes}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 