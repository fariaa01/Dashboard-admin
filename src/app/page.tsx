"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useMobile } from "@/hooks/use-mobile"
import { LoginForm } from "@/components/auth/LoginForm"
import { RegisterForm } from "@/components/auth/RegisterForm"
import "@/styles/flip.css"

export default function AuthPage() {
  const isMobile = useMobile()
  const [showLoginPassword, setShowLoginPassword] = useState(false)
  const [showRegisterPassword, setShowRegisterPassword] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login submitted")
  }

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Register submitted")
  }

  if (isMobile) {
    return (
      <div className="container flex items-center justify-center min-h-screen py-8">
        <Tabs defaultValue="login" className="w-full max-w-md">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Cadastro</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm
              onSubmit={handleLoginSubmit}
              showPassword={showLoginPassword}
              toggleShowPassword={() => setShowLoginPassword(!showLoginPassword)}
              onFlip={() => setIsFlipped(true)} 
            />
          </TabsContent>
          <TabsContent value="register">
            <RegisterForm
              onSubmit={handleRegisterSubmit}
              showPassword={showRegisterPassword}
              toggleShowPassword={() => setShowRegisterPassword(!showRegisterPassword)}
              onFlip={() => setIsFlipped(false)} // idem
            />
          </TabsContent>
        </Tabs>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flip-container w-[380px] h-[500px]">
        <div className={`flipper ${isFlipped ? "flipped" : ""}`}>
          <div className="front">
            <LoginForm
              onSubmit={handleLoginSubmit}
              showPassword={showLoginPassword}
              toggleShowPassword={() => setShowLoginPassword(!showLoginPassword)}
              onFlip={() => setIsFlipped(true)}
            />
          </div>
          <div className="back">
            <RegisterForm
              onSubmit={handleRegisterSubmit}
              showPassword={showRegisterPassword}
              toggleShowPassword={() => setShowRegisterPassword(!showRegisterPassword)}
              onFlip={() => setIsFlipped(false)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
