import bcrypt from "bcryptjs"
import { pool } from "./db"

export async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt)
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return bcrypt.compare(password, hashedPassword)
}

export async function createUser(
  username: string,
  email: string,
  password: string,
  securityQuestion: string,
  securityAnswer: string,
) {
  const hashedPassword = await hashPassword(password)
  const hashedAnswer = await hashPassword(securityAnswer)

  const [result] = await pool.execute(
    "INSERT INTO users (username, email, password, security_question, security_answer) VALUES (?, ?, ?, ?, ?)",
    [username, email, hashedPassword, securityQuestion, hashedAnswer],
  )

  return result
}

export async function verifyUser(username: string, password: string) {
  const [rows]: any = await pool.execute("SELECT * FROM users WHERE username = ?", [username])

  if (rows.length === 0) {
    throw new Error("User not found")
  }

  const user = rows[0]
  const isValid = await verifyPassword(password, user.password)

  if (!isValid) {
    throw new Error("Invalid password")
  }

  return {
    id: user.id,
    username: user.username,
    email: user.email,
  }
}

export async function verifySecurityAnswer(userId: number, answer: string) {
  const [rows]: any = await pool.execute("SELECT security_answer FROM users WHERE id = ?", [userId])

  if (rows.length === 0) {
    throw new Error("User not found")
  }

  const isValid = await verifyPassword(answer, rows[0].security_answer)
  return isValid
}

