import Link from 'next/link';

import { Logo } from './logo';
import { Menu } from './menu';

export function TopBar() {
  return (
    <header className="flex h-20 items-center justify-between md:h-24">
      <div className="flex items-center gap-3">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <Menu />
    </header>
  )
}
