"use client"

import { useId, useMemo, useState } from "react"
import { EyeIcon, EyeOffIcon, CheckIcon, XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

interface Props {
  onSubmit: (e: React.FormEvent) => void
  showPassword: boolean
  toggleShowPassword: () => void
  onFlip: () => void
}

export function RegisterForm({ onSubmit, onFlip }: Props) {
  const id = useId()
  const [password, setPassword] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  const checkStrength = (pass: string) => [
    { regex: /.{8,}/, text: "At least 8 characters" },
    { regex: /[0-9]/, text: "At least 1 number" },
    { regex: /[a-z]/, text: "At least 1 lowercase letter" },
    { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
  ].map(req => ({
    met: req.regex.test(pass),
    text: req.text
  }))

  const strength = checkStrength(password)

  const strengthScore = useMemo(() => strength.filter(r => r.met).length, [strength])

  const getStrengthColor = (score: number) => {
    if (score === 0) return "bg-border"
    if (score <= 1) return "bg-red-500"
    if (score <= 2) return "bg-orange-500"
    if (score === 3) return "bg-amber-500"
    return "bg-emerald-500"
  }

  const getStrengthText = (score: number) => {
    if (score === 0) return "Enter a password"
    if (score <= 2) return "Weak password"
    if (score === 3) return "Medium strength"
    return "Strong password"
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create a new account to get started.</CardDescription>
      </CardHeader>
      <form onSubmit={onSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="register-name">Full Name</Label>
            <Input id="register-name" type="text" placeholder="Your name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="register-email">Email</Label>
            <Input id="register-email" type="email" placeholder="you@email.com" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor={id}>Password</Label>
            <div className="relative">
              <Input
                id={id}
                className="pe-9"
                placeholder="••••••••"
                type={isVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                aria-describedby={`${id}-description`}
              />
              <button
                type="button"
                className="absolute right-0 top-0 h-full px-3 text-muted-foreground"
                onClick={toggleVisibility}
                aria-label={isVisible ? "Hide password" : "Show password"}
              >
                {isVisible ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
              </button>
            </div>

            <div
              className="bg-border mt-2 h-1 w-full overflow-hidden rounded-full"
              role="progressbar"
              aria-valuenow={strengthScore}
              aria-valuemin={0}
              aria-valuemax={4}
            >
              <div
                className={`h-full ${getStrengthColor(strengthScore)} transition-all duration-500 ease-out`}
                style={{ width: `${(strengthScore / 4) * 100}%` }}
              ></div>
            </div>

            <p id={`${id}-description`} className="text-sm font-medium text-foreground">
              {getStrengthText(strengthScore)}. Must include:
            </p>

            <ul className="space-y-1.5" aria-label="Password requirements">
              {strength.map((req, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  {req.met ? (
                    <CheckIcon size={16} className="text-emerald-500" />
                  ) : (
                    <XIcon size={16} className="text-muted-foreground/80" />
                  )}
                  <span className={req.met ? "text-emerald-600" : "text-muted-foreground"}>
                    {req.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="terms" required />
            <Label htmlFor="terms" className="text-sm">
              I agree to the{" "}
              <a
                className="underline"
                href="https://originui.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                terms of service
              </a>
            </Label>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4 pt-3">
          <Button type="submit" className="w-full">
            Register
          </Button>
          <p className="text-sm text-center w-full">
            Already have an account?{" "}
            <button
              type="button"
              onClick={onFlip}
              className="text-blue-600 hover:underline font-medium"
            >
              Log in
            </button>
          </p>
        </CardFooter>
      </form>
    </Card>
  )
}
