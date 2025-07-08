"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ChannelWithKeywords } from "@/components/keywords-summary"
import { createKeyword } from "@/lib/actions/keywords"
import { createKeywordSchema, type CreateKeywordInput } from "@/lib/validations/keywords"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
import { Icons } from "@/components/icons"

interface AddKeywordFormProps {
  channels: ChannelWithKeywords[]
}

export function AddKeywordForm({ channels }: AddKeywordFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [keywords, setKeywords] = useState<string[]>([])
  const [currentInput, setCurrentInput] = useState("")

  const form = useForm<CreateKeywordInput>({
    resolver: zodResolver(createKeywordSchema),
    defaultValues: {
      name: "",
      channelId: "",
    },
  })

  const handleKeywordInput = (value: string) => {
    if (value.includes(',')) {
      const parts = value.split(',')
      const newKeyword = parts[0].trim()
      
      if (newKeyword) {
        setKeywords(prev => [...prev, newKeyword])
      }
      
      setCurrentInput(parts.slice(1).join(',').trim())
    } else {
      setCurrentInput(value)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && currentInput === "" && keywords.length > 0) {
      e.preventDefault()
      setKeywords(prev => prev.slice(0, -1))
    }
  }

  function removeKeyword(idx: number) {
    setKeywords(prev => prev.filter((_, i) => i !== idx))
  }

  async function onSubmit(data: CreateKeywordInput) {
    if (keywords.length === 0 && !currentInput.trim()) {
      toast({
        title: "Error",
        description: "Please enter at least one keyword",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    
    try {
      const allKeywords = [...keywords]
      if (currentInput.trim()) {
        allKeywords.push(currentInput.trim())
      }

      let successCount = 0
      let errorCount = 0

      for (const keyword of allKeywords) {
        const result = await createKeyword({
          name: keyword,
          channelId: data.channelId
        })
        
        if (result.error) {
          errorCount++
        } else {
          successCount++
        }
      }

      if (successCount > 0) {
        toast({
          title: "Success",
          description: `Added ${successCount} keyword${successCount !== 1 ? 's' : ''} successfully${errorCount > 0 ? ` (${errorCount} failed)` : ''}`,
        })
        setKeywords([])
        setCurrentInput("")
        form.reset()
      } else {
        toast({
          title: "Error",
          description: "Failed to add keywords",
          variant: "destructive",
        })
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Keyword</CardTitle>
        <CardDescription>
          Add keywords to monitor in one of your channels. Separate multiple keywords with commas.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Keywords</Label>
            <div className="relative">
              <div className="flex flex-wrap gap-2 p-2 border border-input rounded-md bg-background min-h-[40px]">
                {keywords.map((keyword, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                    onClick={() => removeKeyword(index)}
                  >
                    {keyword}
                    <Icons.close className="ml-1 h-3 w-3" />
                  </Badge>
                ))}
                <Input
                  id="name"
                  placeholder={keywords.length === 0 ? "Enter keywords separated by commas..." : "Add more keywords..."}
                  value={currentInput}
                  onChange={(e) => handleKeywordInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="border-0 p-0 focus-visible:ring-0 flex-1 min-w-[200px]"
                  disabled={isLoading}
                />
              </div>
            </div>
            {form.formState.errors.name && (
              <p className="text-sm text-destructive">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="channelId">Channel</Label>
            <Select
              onValueChange={(value) => form.setValue("channelId", value)}
              disabled={isLoading}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a channel" />
              </SelectTrigger>
              <SelectContent>
                {channels.map((channel) => (
                  <SelectItem key={channel.id} value={channel.id}>
                    <div className="flex items-center gap-2">
                      <span>{channel.name}</span>
                      <span className="text-xs text-muted-foreground">
                        ({channel.platform.name})
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {form.formState.errors.channelId && (
              <p className="text-sm text-destructive">
                {form.formState.errors.channelId.message}
              </p>
            )}
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Add Keywords
          </Button>
        </form>
      </CardContent>
    </Card>
  )
} 