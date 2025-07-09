"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Lead } from "@/lib/data/leads";
import { ExternalLink, Mail, Phone, MapPin, Calendar, Hash, Search, X } from "lucide-react";
import { useState, useMemo } from "react";

interface LeadsListProps {
  leads: Lead[];
}

interface Filters {
  searchTerm: string;
  status: string;
  channel: string;
  platform: string;
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
  const [filters, setFilters] = useState<Filters>({
    searchTerm: "",
    status: "all",
    channel: "all",
    platform: "all",
  });

  // Get unique values for filter options
  const uniqueChannels = useMemo(() => {
    const channels = Array.from(new Set(leads.map(lead => lead.channelName)));
    return channels.sort();
  }, [leads]);

  const uniquePlatforms = useMemo(() => {
    const platforms = Array.from(new Set(leads.map(lead => lead.platform)));
    return platforms.sort();
  }, [leads]);

  // Filter leads based on all filters
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      // Name search
      if (filters.searchTerm && !lead.name.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
        return false;
      }

      // Status filter
      if (filters.status !== "all" && lead.status !== filters.status) {
        return false;
      }

      // Channel filter
      if (filters.channel !== "all" && lead.channelName !== filters.channel) {
        return false;
      }

      // Platform filter
      if (filters.platform !== "all" && lead.platform !== filters.platform) {
        return false;
      }

      return true;
    });
  }, [leads, filters]);

  const clearFilters = () => {
    setFilters({
      searchTerm: "",
      status: "all",
      channel: "all",
      platform: "all",
    });
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== "" && value !== "all");

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
    <div className="space-y-6">
      {/* Search and Filter Controls */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search leads by name..."
            value={filters.searchTerm}
            onChange={(e) => setFilters(prev => ({ ...prev, searchTerm: e.target.value }))}
            className="pl-10"
          />
        </div>

        {/* Filter Dropdowns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Status Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Status</label>
            <Select value={filters.status} onValueChange={(value) => setFilters(prev => ({ ...prev, status: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="All statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All statuses</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="contacted">Contacted</SelectItem>
                <SelectItem value="qualified">Qualified</SelectItem>
                <SelectItem value="converted">Converted</SelectItem>
                <SelectItem value="lost">Lost</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Channel Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Channel</label>
            <Select value={filters.channel} onValueChange={(value) => setFilters(prev => ({ ...prev, channel: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="All channels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All channels</SelectItem>
                {uniqueChannels.map((channel) => (
                  <SelectItem key={channel} value={channel}>
                    {channel}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Platform Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Platform</label>
            <Select value={filters.platform} onValueChange={(value) => setFilters(prev => ({ ...prev, platform: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="All platforms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All platforms</SelectItem>
                {uniquePlatforms.map((platform) => (
                  <SelectItem key={platform} value={platform}>
                    {platform}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
              Clear all filters
            </Button>
          </div>
        )}
      </div>

      {/* Results count */}
      {hasActiveFilters && (
        <div className="text-sm text-muted-foreground">
          Showing {filteredLeads.length} of {leads.length} leads
        </div>
      )}

      {/* No results message */}
      {hasActiveFilters && filteredLeads.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-muted-foreground">No leads found</h3>
            <p className="text-sm text-muted-foreground mt-2">
              No leads match your current filters
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={clearFilters}
              className="mt-4"
            >
              Clear filters
            </Button>
          </div>
        </div>
      )}

      {/* Leads Grid */}
      <div className="grid gap-6">
        {filteredLeads.map((lead) => (
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
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
                  </div>
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
    </div>
  );
} 