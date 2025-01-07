import {
  Facebook,
  LucideIcon,
  MessageSquareText,
  PartyPopper,
  UsersRound,
} from "lucide-react"

export type IconName = keyof typeof Icons

export const Icons: Record<string, LucideIcon> = {
  facebook: Facebook,
  messages: MessageSquareText,
  party: PartyPopper,
  users: UsersRound
} as const