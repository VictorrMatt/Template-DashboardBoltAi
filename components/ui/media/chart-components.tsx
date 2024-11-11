"use client"

import { ComponentProps } from "react"
import {
  Line as RechartsLine,
  XAxis as RechartsXAxis,
  YAxis as RechartsYAxis,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip
} from "recharts"

type ChartProps = ComponentProps<typeof RechartsLineChart>
type LineProps = ComponentProps<typeof RechartsLine>
type XAxisProps = ComponentProps<typeof RechartsXAxis>
type YAxisProps = ComponentProps<typeof RechartsYAxis>

export function LineChart({ children, ...props }: ChartProps) {
  return <RechartsLineChart {...props}>{children}</RechartsLineChart>
}

export function Line({ 
  type = "monotone",
  strokeWidth = 2,
  dot = false,
  ...props 
}: LineProps) {
  return (
    <RechartsLine
      type={type}
      strokeWidth={strokeWidth}
      dot={dot}
      {...props}
    />
  )
}

export function XAxis({ 
  stroke = "#888888",
  fontSize = 12,
  tickLine = false,
  axisLine = false,
  ...props 
}: XAxisProps) {
  return (
    <RechartsXAxis
      stroke={stroke}
      fontSize={fontSize}
      tickLine={tickLine}
      axisLine={axisLine}
      {...props}
    />
  )
}

export function YAxis({ 
  stroke = "#888888",
  fontSize = 12,
  tickLine = false,
  axisLine = false,
  ...props 
}: YAxisProps) {
  return (
    <RechartsYAxis
      stroke={stroke}
      fontSize={fontSize}
      tickLine={tickLine}
      axisLine={axisLine}
      {...props}
    />
  )
}

export { ResponsiveContainer, CartesianGrid, Tooltip }