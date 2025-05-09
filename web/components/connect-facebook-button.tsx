"use client"

import React from "react"
import { Button } from "./ui/button"
import { Icons } from "./icons"

export default function ConnectFacebookButton() {
  const [isLoading, setIsLoading] = React.useState(false)

  return (
    <Button>
      {isLoading ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <span className="flex">
          <Icons.facebook className="mr-2" />
          Connect
        </span>
      )}
    </Button>
  )
}