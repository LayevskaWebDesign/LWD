import type { ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className, ...rest }: ContainerProps): JSX.Element {
  return (
    <div className={cn('container-x', className)} {...rest}>
      {children}
    </div>
  );
}
