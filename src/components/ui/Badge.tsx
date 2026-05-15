import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span className={cn('badge', className)}>
      <span className="glow-dot flex-shrink-0" />
      {children}
    </span>
  );
}
