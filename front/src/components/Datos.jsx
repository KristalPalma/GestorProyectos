"use client"

import { useState } from "react"

export function Formulario({ setUser, onRegisterClick }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showResetForm, setShowResetForm] = useState(false)
  const [securityAnswer, setSecurityAnswer] = useState("")
  const [securityQuestion, setSecurityQuestion] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error)
      }

      setUser([data.user.username])
    } catch (err) {
      setError(err.message || "Error al iniciar sesión")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleForgotPassword = async (e) => {
    e.preventDefault()
    setError("")

    try {
      // Verify security answer
      const res = await fetch("/api/auth/verify-security", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          securityAnswer,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error)
      }

      // Here you would typically implement password reset logic
      alert("Respuesta correcta. Aquí implementarías el cambio de contraseña.")
      setShowResetForm(false)
    } catch (err) {
      setError(err.message || "Error al verificar la respuesta")
    }
  }

  if (showResetForm) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-background font-mono p-4">
        <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden max-w-lg md:max-w-4xl w-full">
          <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 bg-white w-full md:w-1/2">
            <form onSubmit={handleForgotPassword} className="w-full">
              <h2 className="text-2xl font-bold mb-6">Recuperar contraseña</h2>
              <div className="space-y-4">
                <div className="flex flex-col text-left">
                  <label className="text-lg mb-1">Usuario</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="rounded-md p-2 border-2 border-Brown-fist outline-none focus:border-Brown-third"
                    placeholder="Ingresa tu usuario"
                    required
                  />
                </div>

                <div className="flex flex-col text-left">
                  <label className="text-lg mb-1">Pregunta de seguridad</label>
                  <p className="text-gray-600 mb-2">{securityQuestion || "Ingresa tu usuario primero"}</p>
                  <input
                    type="text"
                    value={securityAnswer}
                    onChange={(e) => setSecurityAnswer(e.target.value)}
                    className="rounded-md p-2 border-2 border-Brown-fist outline-none focus:border-Brown-third"
                    placeholder="Respuesta de seguridad"
                    required
                  />
                </div>

                {error && <p className="text-red-500">{error}</p>}

                <button
                  type="submit"
                  className="w-full bg-Brown-fist text-white rounded-md py-2 font-semibold hover:bg-Brown-sec transition-colors"
                >
                  Verificar respuesta
                </button>

                <button
                  type="button"
                  onClick={() => setShowResetForm(false)}
                  className="w-full mt-2 bg-gray-200 text-gray-800 rounded-md py-2 font-semibold hover:bg-gray-300 transition-colors"
                >
                  Volver al inicio de sesión
                </button>
              </div>
            </form>
          </div>

          <div
            className="hidden md:block md:w-1/2 bg-cover bg-center"
            style={{ backgroundImage: "url('src/images/Login1.jpg')" }}
          ></div>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-background font-mono p-4">
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden max-w-lg md:max-w-4xl w-full">
        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 bg-white w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="w-full">
            <h1 className="text-3xl font-bold mb-6">Iniciar sesión</h1>
            <div className="flex flex-col text-left mb-4">
              <label className="text-lg mb-1">Usuario</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="rounded-md p-2 border-2 border-Brown-fist outline-none focus:border-Brown-third"
                placeholder="Ingresa tu usuario"
              />
            </div>
            <div className="flex flex-col text-left mb-4">
              <label className="text-lg mb-1">Contraseña</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="rounded-md p-2 border-2 border-Brown-fist outline-none focus:border-Brown-third"
                placeholder="Ingresa tu contraseña"
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 bg-Brown-beige" />
                <label className="text-sm">Recordar contraseña</label>
              </div>
              <button
                type="button"
                onClick={() => setShowResetForm(true)}
                className="text-sm text-amber-800 hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-Brown-fist text-white rounded-md py-2 font-semibold hover:bg-Brown-sec transition-colors disabled:opacity-50"
            >
              {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
            </button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            <p className="text-sm mt-4">
              ¿No tienes una cuenta?{" "}
              <button type="button" onClick={onRegisterClick} className="text-amber-800 hover:underline">
                Regístrate
              </button>
            </p>
          </form>
        </div>

        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('src/images/Login1.jpg')" }}
        ></div>
      </div>
    </section>
  )
}

