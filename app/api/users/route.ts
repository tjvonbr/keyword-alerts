import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import z  from "zod";

const userSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
})

export async function POST(req: NextRequest) {
  const json = await req.json()
  console.log("JSON", json);
  const body = userSchema.parse(json)

  const user = await prisma.user.findFirst({
    where: {
      email: body.email
    }
  })

  if (user) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const newUser = await prisma.user.create({
    data: {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
    }
  })

  return NextResponse.json(newUser, { status: 201 });
}