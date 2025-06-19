"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { LoginForm } from "@/components/auth/LoginForm"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login submitted")

    localStorage.setItem("auth", "true")
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <LoginForm
        onSubmit={handleLoginSubmit}
        showPassword={showPassword}
        toggleShowPassword={() => setShowPassword(!showPassword)}
        onFlip={() => router.push("/register")}
      />
    </div>
  )
}
