"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Users,
  UserPlus,
  ShoppingCart,
  DollarSign,
  TrendingUp,
} from "lucide-react"
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

const chartData = [
  { month: "Jan", value: 2400, profit: 1200 },
  { month: "Feb", value: 1398, profit: 1800 },
  { month: "Mar", value: 9800, profit: 4600 },
  { month: "Apr", value: 3908, profit: 2900 },
  { month: "May", value: 4800, profit: 3400 },
  { month: "Jun", value: 3800, profit: 2100 },
  { month: "Jul", value: 4300, profit: 3200 },
]

const recentRecords = [
  { id: "001", name: "João Silva", email: "joao@email.com", status: "Active", date: "2024-01-15" },
  { id: "002", name: "Maria Santos", email: "maria@email.com", status: "Pending", date: "2024-01-14" },
  { id: "003", name: "Pedro Costa", email: "pedro@email.com", status: "Active", date: "2024-01-13" },
  { id: "004", name: "Ana Oliveira", email: "ana@email.com", status: "Inactive", date: "2024-01-12" },
  { id: "005", name: "Carlos Lima", email: "carlos@email.com", status: "Active", date: "2024-01-11" },
]

const chartConfig = {
  value: { label: "Revenue", color: "#7c3aed" },
  profit: { label: "Profit", color: "#14b8a6" },
}

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto p-6 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Overview of system metrics and activities</p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <TrendingUp className="h-4 w-4" />
            <span>Updated 5 minutes ago</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gray-100 border border-gray-300 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-sm font-medium text-gray-700">Active Users</CardTitle>
              <Users className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">2,847</div>
              <p className="text-xs text-green-600 mt-1">+12.5% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 border border-gray-300 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-sm font-medium text-gray-700">New Signups</CardTitle>
              <UserPlus className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">324</div>
              <p className="text-xs text-green-600 mt-1">+8.2% this week</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 border border-gray-300 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-sm font-medium text-gray-700">Monthly Sales</CardTitle>
              <ShoppingCart className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">1,429</div>
              <p className="text-xs text-red-600 mt-1">-2.1% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 border border-gray-300 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-sm font-medium text-gray-700">Total Profit</CardTitle>
              <DollarSign className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">R$ 89,247</div>
              <p className="text-xs text-green-600 mt-1">+15.3% from last month</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <Card className="flex-1 bg-gray-100 border border-gray-300 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Growth Trend</CardTitle>
              <CardDescription className="text-gray-600">Monthly indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" tick={{ fill: "#4b5563" }} />
                    <YAxis tick={{ fill: "#4b5563" }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#7c3aed"
                      strokeWidth={2}
                      fill="url(#colorValue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="flex-1 bg-gray-100 border border-gray-300 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Monthly Profit</CardTitle>
              <CardDescription className="text-gray-600">Profit variation</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" tick={{ fill: "#4b5563" }} />
                    <YAxis tick={{ fill: "#4b5563" }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="profit"
                      stroke="#14b8a6"
                      strokeWidth={2}
                      fill="url(#colorProfit)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gray-100 border border-gray-300 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">Recent Records</CardTitle>
            <CardDescription className="text-gray-600">Last 5 users registered</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-gray-300">
                  <TableHead className="text-gray-600">ID</TableHead>
                  <TableHead className="text-gray-600">Name</TableHead>
                  <TableHead className="text-gray-600">Email</TableHead>
                  <TableHead className="text-gray-600">Status</TableHead>
                  <TableHead className="text-gray-600">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentRecords.map((record) => (
                  <TableRow key={record.id} className="border-gray-300">
                    <TableCell className="text-gray-700 font-mono text-sm">#{record.id}</TableCell>
                    <TableCell className="text-gray-900 font-medium">{record.name}</TableCell>
                    <TableCell className="text-gray-700">{record.email}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          record.status === "Active"
                            ? "bg-green-600 text-white"
                            : record.status === "Pending"
                            ? "bg-yellow-500 text-white"
                            : "bg-red-600 text-white"
                        }
                      >
                        {record.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-600 text-sm">
                      {new Date(record.date).toLocaleDateString("en-US")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
