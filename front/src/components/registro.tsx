"use client"

import React from "react"
import { useState } from "react"

interface FormData {
  username: string
  email: string
  password: string
  securityQuestion: string
  securityAnswer: string
}

interface RegistroProps {
  onLoginClick: () => void
  setUser: (user: any) => void
}

const SECURITY_QUESTIONS = [
  "¿Cuál es el nombre de tu primera mascota?",
  "¿En qué ciudad naciste?",
  "¿Cuál es el nombre de tu mejor amigo de la infancia?",
  "¿Cuál fue tu primer auto?",
]

export default function Registro({ onLoginClick, setUser }: RegistroProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    securityQuestion: SECURITY_QUESTIONS[0],
    securityAnswer: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          securityQuestion: formData.securityQuestion,
          securityAnswer: formData.securityAnswer,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error)
      }

      // Set user after successful registration
      setUser([formData.username])
    } catch (err: any) {
      setError(err.message || "Ocurrió un error durante el registro")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-background font-mono p-4">
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden max-w-lg md:max-w-4xl w-full">
        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 bg-white w-full md:w-1/2">
          <div className="w-full max-w-md">
            <div className="space-y-1 mb-4">
              <h2 className="text-2xl font-bold">Crear cuenta</h2>
              <p className="text-gray-500">Ingresa tus datos para registrarte</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="usuario" className="block text-sm font-medium">
                  Usuario
                </label>
                <input
                  id="usuario"
                  name="username"
                  className="w-full rounded-md p-2 border-2 border-Brown-fist outline-none focus:border-Brown-third"
                  placeholder="Juan Pérez"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-md p-2 border-2 border-Brown-fist outline-none focus:border-Brown-third"
                  placeholder="juan@ejemplo.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium">
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="w-full rounded-md p-2 border-2 border-Brown-fist outline-none focus:border-Brown-third"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? "Ocultar" : "Mostrar"}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="securityQuestion" className="block text-sm font-medium">
                  Pregunta de seguridad
                </label>
                <select
                  id="securityQuestion"
                  name="securityQuestion"
                  className="w-full rounded-md p-2 border-2 border-Brown-fist outline-none focus:border-Brown-third"
                  value={formData.securityQuestion}
                  onChange={handleChange}
                  disabled={isLoading}
                >
                  {SECURITY_QUESTIONS.map((question) => (
                    <option key={question} value={question}>
                      {question}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="securityAnswer" className="block text-sm font-medium">
                  Respuesta de seguridad
                </label>
                <input
                  id="securityAnswer"
                  name="securityAnswer"
                  type="text"
                  className="w-full rounded-md p-2 border-2 border-Brown-fist outline-none focus:border-Brown-third"
                  required
                  value={formData.securityAnswer}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>

              {error && <div className="text-sm text-red-500">{error}</div>}

              <button
                type="submit"
                className="w-full bg-Brown-fist text-white rounded-md py-2 font-semibold hover:bg-Brown-sec transition-colors disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? "Registrando..." : "Registrarse"}
              </button>

              <p className="text-sm mt-4">
                ¿Ya tienes una cuenta?{" "}
                <button type="button" onClick={onLoginClick} className="text-amber-800 hover:underline">
                  Iniciar sesión
                </button>
              </p>
            </form>
          </div>
        </div>

        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('src/images/Login1.jpg')" }}
        ></div>
      </div>
    </section>
  )
}

