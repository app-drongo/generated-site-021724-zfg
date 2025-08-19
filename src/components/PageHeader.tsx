// Template-enhanced component
// Generated: 2025-08-19T22:36:41.590Z
// Section: page-header
// Category: page-header
// Template ID: page-header-l001

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function PageHeaderTitleOnly() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/30 to-transparent">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-12 sm:py-16 lg:py-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            About Our Company
          </h1>
          <div className="mt-6">
            <Button variant="outline" size="sm" className="group">
              Learn More
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}