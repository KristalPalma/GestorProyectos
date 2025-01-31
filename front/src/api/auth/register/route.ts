import { NextResponse } from "next/server"
import { createUser } from "../../../lib/auth"

export async function POST(request: Request) {
  try {
    const { username, email, password, securityQuestion, securityAnswer } = await request.json()

    // Basic validation
    if (!username || !email || !password || !securityQuestion || !securityAnswer) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    await createUser(username, email, password, securityQuestion, securityAnswer)

    return NextResponse.json({ message: "User created successfully" })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Something went wrong" }, { status: 500 })
  }
}

