import { ChannelWithKeywords } from "@/components/keywords-summary";
import { KeywordStatus } from "@prisma/client";

export const channels: ChannelWithKeywords[] = [
  {
    id: "1",
    name: "Scottsdale Real Estate & Community",
    userId: "1",
    platformId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    keywords: [
      { name: 'move out cleaning', id: 'kw1', userId: '1', platformId: '1', createdAt: new Date(), updatedAt: new Date(), status: KeywordStatus.ACTIVE, channelId: '1' },
      { name: 'move out cleaning services', id: 'kw2', userId: '1', platformId: '1', createdAt: new Date(), updatedAt: new Date(), status: KeywordStatus.ACTIVE, channelId: '1' },
      { name: 'move out cleaning company', id: 'kw3', userId: '1', platformId: '1', createdAt: new Date(), updatedAt: new Date(), status: KeywordStatus.ACTIVE, channelId: '1' },
      { name: 'move out cleaning company in scottsdale', id: 'kw4', userId: '1', platformId: '1', createdAt: new Date(), updatedAt: new Date(), status: KeywordStatus.ACTIVE, channelId: '1' },
      { name: 'move out cleaning company in phoenix', id: 'kw5', userId: '1', platformId: '1', createdAt: new Date(), updatedAt: new Date(), status: KeywordStatus.ACTIVE, channelId: '1' },
      { name: 'move out cleaning company in arizona', id: 'kw6', userId: '1', platformId: '1', createdAt: new Date(), updatedAt: new Date(), status: KeywordStatus.ACTIVE, channelId: '1' }
    ],
    platform: {
      id: "1",
      name: "Facebook",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    id: "2", 
    name: "Phoenix Business Network & Leads",
    userId: "1",
    platformId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    keywords: [],
    platform: {
      id: "1",
      name: "Facebook",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    id: "3",
    name: "Arizona Entrepreneurs & Startups",
    userId: "1",
    platformId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    keywords: [],
    platform: {
      id: "1",
      name: "Facebook",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    id: "4",
    name: "Mesa Local Business Directory",
    userId: "1",
    platformId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    keywords: [],
    platform: {
      id: "1",
      name: "Facebook",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    id: "5",
    name: "Tempe Community & Events",
    userId: "1",
    platformId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    keywords: [],
    platform: {
      id: "1",
      name: "Facebook",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
]