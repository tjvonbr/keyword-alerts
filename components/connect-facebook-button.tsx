"use client"

import React from "react"
import { Button } from "./ui/button"
import { Icons } from "./icons"

export default function ConnectFacebookButton() {
  return (
    <Button>
      <span className="flex">
        <Icons.facebook className="mr-2" />
        Connect
      </span>
    </Button>
  )
}