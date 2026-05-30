import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { BrandStory } from '@/components/BrandStory'
import { CreatorIntelligence } from '@/components/CreatorIntelligence'
import { CreatorManagement } from '@/components/CreatorManagement'
import { Analytics } from '@/components/Analytics'
import { SocialProof } from '@/components/SocialProof'
import { FeaturedCreators } from '@/components/FeaturedCreators'
import { Workflow } from '@/components/Workflow'
import { Testimonials } from '@/components/Testimonials'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <BrandStory />
      <CreatorIntelligence />
      <CreatorManagement />
      <Analytics />
      <SocialProof />
      <FeaturedCreators />
      <Workflow />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
