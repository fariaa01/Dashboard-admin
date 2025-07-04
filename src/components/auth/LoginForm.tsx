"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import {
  RiFacebookFill,
  RiGithubFill,
  RiGoogleFill,
  RiTwitterXFill,
} from "@remixicon/react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Props {
  showPassword: boolean
  toggleShowPassword: () => void
  onFlip: () => void
}

export function LoginForm({ showPassword, toggleShowPassword, onFlip }: Props) {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (email === "admin@email.com" && password === "12345678") {
      localStorage.setItem("auth", "true")
      router.push("/dashboard")
    } else {
      alert("Invalid credentials")
    }
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your credentials to access your account.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="login-email">Email</Label>
            <Input
              id="login-email"
              type="email"
              placeholder="you@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="login-password">Password</Label>
            <div className="relative">
              <Input
                id="login-password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3"
                onClick={toggleShowPassword}
              >
                {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300" />
            <Label htmlFor="remember" className="text-sm font-normal">
              Remember me
            </Label>
            <a href="#" className="ml-auto text-sm pb-5 underline">
              Forgot password?
            </a>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button type="submit" className="w-full">
            Sign In
          </Button>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="h-px flex-1 bg-border" />
            or continue with
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="flex flex-wrap gap-2 w-full">
            <Button
              className="flex-1"
              variant="outline"
              aria-label="Login with Google"
              size="icon"
            >
              <RiGoogleFill
                className="dark:text-primary text-[#DB4437]"
                size={16}
                aria-hidden="true"
              />
            </Button>
            <Button
              className="flex-1"
              variant="outline"
              aria-label="Login with Facebook"
              size="icon"
            >
              <RiFacebookFill
                className="dark:text-primary text-[#1877f2]"
                size={16}
                aria-hidden="true"
              />
            </Button>
            <Button
              className="flex-1"
              variant="outline"
              aria-label="Login with X"
              size="icon"
            >
              <RiTwitterXFill
                className="dark:text-primary text-[#14171a]"
                size={16}
                aria-hidden="true"
              />
            </Button>
            <Button
              className="flex-1"
              variant="outline"
              aria-label="Login with GitHub"
              size="icon"
            >
              <RiGithubFill
                className="dark:text-primary text-black"
                size={16}
                aria-hidden="true"
              />
            </Button>
          </div>

          <p className="text-sm text-center w-full mt-2">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={onFlip}
              className="text-blue-600 hover:underline font-medium"
            >
              Sign up
            </button>
          </p>
        </CardFooter>
      </form>
    </Card>
  )
}
