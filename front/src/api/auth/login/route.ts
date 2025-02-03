 import { NextResponse } from "next/server"
import { verifyUser } from "../../../lib/auth"

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json()

    if (!username || !password) {
      return NextResponse.json({ error: "Username and password are required" }, { status: 400 })
    }

    const user = await verifyUser(username, password)

    return NextResponse.json({ user })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Invalid credentials" }, { status: 401 })
  }
}

