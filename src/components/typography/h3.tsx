import { cn } from '@/lib/utils'

export function H3({
  children,
  className = '',
}: Readonly<{
  children: React.ReactNode
  className?: string
}>) {
  return <h3 className={cn(className, 'scroll-m-20 text-2xl font-semibold tracking-tight')}>{children}</h3>
}
