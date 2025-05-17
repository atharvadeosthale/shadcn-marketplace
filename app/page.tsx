import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Paintbrush, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm">
              <span className="text-muted-foreground">Marketplace Beta</span>
              <div className="mx-2 h-4 w-[1px] bg-border" />
              <span className="text-foreground font-medium">Now Available</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Beautiful UI Components
                <span className="text-muted-foreground">
                  for your next project
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Discover and download premium shadcn components. Build modern
                interfaces faster than ever.
              </p>
            </div>

            <div className="flex gap-x-4">
              <Button className="group">
                Browse Components
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline">Documentation</Button>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative hidden lg:block">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-muted rounded-full mix-blend-multiply filter blur-xl opacity-70" />
            <div className="absolute bottom-0 -right-4 w-72 h-72 bg-muted rounded-full mix-blend-multiply filter blur-xl opacity-70" />
            <div className="relative">
              <div className="rounded-lg border bg-card shadow-lg">
                <div className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-semibold">Featured Components</h3>
                      <p className="text-sm text-muted-foreground">
                        Hand-picked for quality
                      </p>
                    </div>
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="aspect-[4/3] rounded-md bg-muted animate-pulse"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
