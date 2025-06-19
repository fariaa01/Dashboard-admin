"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { RegisterForm } from "@/components/auth/RegisterForm"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Register submitted")

    router.push("/login")
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <RegisterForm
        onSubmit={handleRegisterSubmit}
        showPassword={showPassword}
        toggleShowPassword={() => setShowPassword(!showPassword)}
        onFlip={() => router.push("/login")}
      />
    </div>
  )
}
