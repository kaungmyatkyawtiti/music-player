import { navItems } from "@/lib/items";
import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul className="mt-6">
        {
          navItems.map((item, ind) =>
            <Link
              key={ind}
              href={item.href}
            >
              <li
                className="text-foreground hover:bg-secondary rounded-md p-2 hoverEffect text-sm flex items-center gap-2 mb-4 group"
              >
                <item.icon size={20} />
                <span className="font-semibold text-foreground/70 group-hover:text-foreground">{item.name}</span>
              </li>
            </Link>
          )
        }
      </ul>
    </nav>
  )
}

