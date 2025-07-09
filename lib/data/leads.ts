export interface Lead {
  id: string;
  name: string;
  facebookProfileUrl?: string;
  email?: string;
  phone?: string;
  location: string;
  channelId: string;
  channelName: string;
  platform: string;
  keywordMatched: string;
  postContent: string;
  postUrl: string;
  postDate: Date;
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export const leads: Lead[] = [
  {
    id: "lead-1",
    name: "Sarah Johnson",
    facebookProfileUrl: "https://facebook.com/sarah.johnson.123",
    email: "sarah.johnson@email.com",
    phone: "(480) 555-0123",
    location: "Scottsdale, AZ",
    channelId: "1",
    channelName: "Scottsdale Real Estate & Community",
    platform: "Facebook",
    keywordMatched: "move out cleaning",
    postContent: "Hi everyone! I'm moving out of my apartment in Scottsdale next week and need recommendations for a reliable move out cleaning service. My landlord is very particular about the condition. Any suggestions?",
    postUrl: "https://facebook.com/groups/scottsdale-real-estate/posts/123456789",
    postDate: new Date("2024-01-15T10:30:00Z"),
    status: "new",
    notes: "Looking for move out cleaning service. Apartment in Scottsdale area.",
    createdAt: new Date("2024-01-15T10:35:00Z"),
    updatedAt: new Date("2024-01-15T10:35:00Z"),
  },
  {
    id: "lead-2",
    name: "Mike Rodriguez",
    facebookProfileUrl: "https://facebook.com/mike.rodriguez.456",
    phone: "(602) 555-0456",
    location: "Phoenix, AZ",
    channelId: "1",
    channelName: "Scottsdale Real Estate & Community",
    platform: "Facebook",
    keywordMatched: "move out cleaning company in phoenix",
    postContent: "Does anyone know a good move out cleaning company in Phoenix? I'm selling my house and need it spotless for the new buyers. Budget is around $300-400.",
    postUrl: "https://facebook.com/groups/scottsdale-real-estate/posts/123456790",
    postDate: new Date("2024-01-14T14:20:00Z"),
    status: "contacted",
    notes: "Selling house, needs deep cleaning. Budget $300-400. Already sent quote.",
    createdAt: new Date("2024-01-14T14:25:00Z"),
    updatedAt: new Date("2024-01-16T09:15:00Z"),
  },
  {
    id: "lead-3",
    name: "Jennifer Chen",
    facebookProfileUrl: "https://facebook.com/jennifer.chen.789",
    email: "jennifer.chen@gmail.com",
    location: "Tempe, AZ",
    channelId: "1",
    channelName: "Scottsdale Real Estate & Community",
    platform: "Facebook",
    keywordMatched: "move out cleaning services",
    postContent: "URGENT: Need move out cleaning services for tomorrow! My lease ends and I have to be out by 5pm. Any recommendations for same-day service?",
    postUrl: "https://facebook.com/groups/scottsdale-real-estate/posts/123456791",
    postDate: new Date("2024-01-13T08:45:00Z"),
    status: "converted",
    notes: "Urgent same-day service needed. Successfully booked and completed.",
    createdAt: new Date("2024-01-13T08:50:00Z"),
    updatedAt: new Date("2024-01-14T18:30:00Z"),
  },
  {
    id: "lead-4",
    name: "David Thompson",
    facebookProfileUrl: "https://facebook.com/david.thompson.012",
    phone: "(480) 555-0789",
    location: "Mesa, AZ",
    channelId: "2",
    channelName: "Phoenix Business Network & Leads",
    platform: "Facebook",
    keywordMatched: "move out cleaning company",
    postContent: "I run a property management company and we're looking for a reliable move out cleaning company to work with on a regular basis. We have properties throughout the Phoenix metro area. Please DM me if you're interested in a business partnership.",
    postUrl: "https://facebook.com/groups/phoenix-business-network/posts/123456792",
    postDate: new Date("2024-01-12T16:10:00Z"),
    status: "qualified",
    notes: "Property management company looking for ongoing partnership. High-value lead.",
    createdAt: new Date("2024-01-12T16:15:00Z"),
    updatedAt: new Date("2024-01-15T11:20:00Z"),
  },
  {
    id: "lead-5",
    name: "Amanda Foster",
    facebookProfileUrl: "https://facebook.com/amanda.foster.345",
    email: "amanda.foster@outlook.com",
    phone: "(602) 555-0321",
    location: "Chandler, AZ",
    channelId: "3",
    channelName: "Arizona Entrepreneurs & Startups",
    platform: "Facebook",
    keywordMatched: "move out cleaning company in arizona",
    postContent: "Starting a new business and need to move out of my current office space. Looking for a professional move out cleaning company in Arizona that can handle commercial spaces. Any recommendations?",
    postUrl: "https://facebook.com/groups/arizona-entrepreneurs/posts/123456793",
    postDate: new Date("2024-01-11T12:30:00Z"),
    status: "new",
    notes: "Commercial space cleaning needed. New business owner.",
    createdAt: new Date("2024-01-11T12:35:00Z"),
    updatedAt: new Date("2024-01-11T12:35:00Z"),
  },
  {
    id: "lead-6",
    name: "Robert Kim",
    facebookProfileUrl: "https://facebook.com/robert.kim.678",
    location: "Gilbert, AZ",
    channelId: "4",
    channelName: "Mesa Local Business Directory",
    platform: "Facebook",
    keywordMatched: "move out cleaning",
    postContent: "My tenant just moved out and left the place a mess. Need a move out cleaning service that can handle pet stains and odors. Any local recommendations?",
    postUrl: "https://facebook.com/groups/mesa-local-business/posts/123456794",
    postDate: new Date("2024-01-10T09:15:00Z"),
    status: "lost",
    notes: "Pet stains and odors. Tenant damage. Went with competitor.",
    createdAt: new Date("2024-01-10T09:20:00Z"),
    updatedAt: new Date("2024-01-12T14:45:00Z"),
  },
  {
    id: "lead-7",
    name: "Lisa Martinez",
    facebookProfileUrl: "https://facebook.com/lisa.martinez.901",
    email: "lisa.martinez@yahoo.com",
    phone: "(480) 555-0654",
    location: "Scottsdale, AZ",
    channelId: "1",
    channelName: "Scottsdale Real Estate & Community",
    platform: "Facebook",
    keywordMatched: "move out cleaning company in scottsdale",
    postContent: "Looking for a move out cleaning company in Scottsdale that specializes in luxury homes. We have a 4-bedroom house that needs to be spotless for the new owners. Budget is flexible for quality work.",
    postUrl: "https://facebook.com/groups/scottsdale-real-estate/posts/123456795",
    postDate: new Date("2024-01-09T15:45:00Z"),
    status: "contacted",
    notes: "Luxury home, 4-bedroom. High-end client, flexible budget.",
    createdAt: new Date("2024-01-09T15:50:00Z"),
    updatedAt: new Date("2024-01-14T10:30:00Z"),
  },
  {
    id: "lead-8",
    name: "Kevin O'Brien",
    facebookProfileUrl: "https://facebook.com/kevin.obrien.234",
    location: "Tempe, AZ",
    channelId: "5",
    channelName: "Tempe Community & Events",
    platform: "Facebook",
    keywordMatched: "move out cleaning services",
    postContent: "ASU student here - need move out cleaning services for my apartment near campus. Looking for something affordable but reliable. Any student discounts available?",
    postUrl: "https://facebook.com/groups/tempe-community/posts/123456796",
    postDate: new Date("2024-01-08T11:20:00Z"),
    status: "new",
    notes: "ASU student, near campus, looking for affordable option with student discount.",
    createdAt: new Date("2024-01-08T11:25:00Z"),
    updatedAt: new Date("2024-01-08T11:25:00Z"),
  },
  {
    id: "lead-9",
    name: "Maria Gonzalez",
    facebookProfileUrl: "https://facebook.com/maria.gonzalez.567",
    phone: "(602) 555-0987",
    location: "Phoenix, AZ",
    channelId: "2",
    channelName: "Phoenix Business Network & Leads",
    platform: "Facebook",
    keywordMatched: "move out cleaning company",
    postContent: "I'm a real estate agent and have a client who needs move out cleaning for a 3-bedroom house in Phoenix. Looking for a company that can provide a certificate of completion for the landlord. Any recommendations?",
    postUrl: "https://facebook.com/groups/phoenix-business-network/posts/123456797",
    postDate: new Date("2024-01-07T13:40:00Z"),
    status: "qualified",
    notes: "Real estate agent referral. 3-bedroom house. Needs certificate of completion.",
    createdAt: new Date("2024-01-07T13:45:00Z"),
    updatedAt: new Date("2024-01-13T16:20:00Z"),
  },
  {
    id: "lead-10",
    name: "Thomas Wilson",
    facebookProfileUrl: "https://facebook.com/thomas.wilson.890",
    email: "thomas.wilson@hotmail.com",
    location: "Peoria, AZ",
    channelId: "1",
    channelName: "Scottsdale Real Estate & Community",
    platform: "Facebook",
    keywordMatched: "move out cleaning company in arizona",
    postContent: "Need a move out cleaning company in Arizona that can handle a large family home. We have 5 bedrooms, 3 bathrooms, and a finished basement. Looking for someone who can do it all in one day.",
    postUrl: "https://facebook.com/groups/scottsdale-real-estate/posts/123456798",
    postDate: new Date("2024-01-06T10:10:00Z"),
    status: "converted",
    notes: "Large family home - 5 bed, 3 bath, basement. One-day service. Successfully completed.",
    createdAt: new Date("2024-01-06T10:15:00Z"),
    updatedAt: new Date("2024-01-08T19:45:00Z"),
  }
];

export const getLeadsByUserId = (): Lead[] => {
  // In a real application, this would filter leads by userId
  // For now, return all leads as dummy data
  return leads;
};

export const getLeadsByChannelId = (channelId: string): Lead[] => {
  return leads.filter(lead => lead.channelId === channelId);
};

export const getLeadsByStatus = (status: Lead['status']): Lead[] => {
  return leads.filter(lead => lead.status === status);
};
