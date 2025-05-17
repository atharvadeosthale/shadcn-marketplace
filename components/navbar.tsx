import { ThemeToggler } from "./theme-toggler";

export default function Navbar() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        <div className="text-2xl font-bold tracking-tighter bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
          shadcn store
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggler />
        </div>
      </div>
    </div>
  );
}
