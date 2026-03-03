import { Link, Navigate, useParams } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock, Tag } from "lucide-react";
import { motion } from "motion/react";
import type React from "react";
import { blogPosts } from "./BlogPage";

type BlogContent = {
  title: string;
  category: string;
  readTime: string;
  date: string;
  content: string;
};

const blogContent: Record<string, BlogContent> = {
  "maximize-uber-earnings": {
    title: "How to Maximize Daily Earnings on Uber in Mumbai",
    category: "Earnings Strategy",
    readTime: "6 min read",
    date: "March 2026",
    content: `
Mumbai is one of India's most active ride-hailing markets — and that means serious earning potential for Uber drivers who know how to work the system. Whether you're new to the platform or looking to increase your existing income, these proven strategies will help you earn significantly more every day.

## 1. Master Surge Pricing Zones

Surge pricing is your best friend. Uber's dynamic pricing kicks in when demand exceeds supply — and in Mumbai, this happens predictably in specific areas.

**Key surge zones include:**
- Bandra-Kurla Complex (BKC) on weekday mornings and evenings
- Andheri and Goregaon during IT park office hours
- South Mumbai (Nariman Point, Fort) during business hours
- Airports (CST, BKC corridor) during international flight arrivals

Stay near these zones and monitor the Uber driver app's heat map during these windows to position yourself perfectly.

## 2. Run Airport Routes Strategically

Airport rides generate high fares with lower effort. Chhatrapati Shivaji Maharaj International Airport (Terminal 1 and 2) offers consistent demand, especially between 5 AM–8 AM and 8 PM–12 AM when international flights land.

Join the airport queue patiently — it moves fast and the guaranteed long fares are worth the wait.

## 3. Leverage Morning and Evening Rush Hours

The golden windows for Mumbai Uber earnings are:
- **Morning:** 7:30 AM – 10:30 AM
- **Evening:** 5:30 PM – 9:30 PM

Corporate commuters in Powai, Vikhroli, Thane, and BKC generate consistent demand. Position yourself near metro stations, office parks, and residential hubs at these times.

## 4. Maintain Your Rating Above 4.7

A high rating unlocks Uber Select and Uber Premier rides, which pay 30–50% more. Simple habits that protect your rating:
- Greet passengers warmly
- Keep the car cool and clean
- Don't cancel rides unnecessarily
- Follow GPS routes

## 5. Use Multiple Platforms Simultaneously

While focusing primarily on Uber, keeping your Ola and Rapido apps active fills the gaps during low Uber demand periods. The National Mobility Wagon R is approved for all three platforms — use this to your advantage.

## 6. Avoid Midday Lulls

The 11 AM – 2 PM window has the lowest ride demand. Use this time to:
- Rest in a shaded area
- Eat and rehydrate
- Check vehicle conditions
- Plan your afternoon positioning

By working smart — not just hard — Mumbai Uber drivers with National Mobility vehicles are achieving daily earnings that exceed traditional employment. Apply today and start your journey to financial independence.
    `,
  },
  "best-driving-hours": {
    title: "Best Driving Hours in Mumbai for Higher Ride-Hailing Income",
    category: "Driver Tips",
    readTime: "5 min read",
    date: "February 2026",
    content: `
Timing is everything in ride-hailing. Mumbai's complex rhythm of corporate life, late-night entertainment, and weekend tourism creates distinct earning windows — and knowing them can double your daily income.

## The Mumbai Ride-Hailing Time Map

### Morning Rush: 7:00 AM – 10:30 AM (★★★★★)

This is the single most important earning window of the day. Mumbai's corporate workers, students, and professionals flood the roads heading to BKC, Nariman Point, Bandra, Andheri, and Lower Parel.

**Best areas to position yourself:**
- Residential towers in Powai, Hiranandani, and Thane
- Western suburbs (Borivali, Kandivali, Malad) heading south
- Navi Mumbai tech corridors heading toward BKC

Expect surge pricing between 8:00–9:30 AM in most corporate zones.

### Midday Lull: 11:00 AM – 2:00 PM (★★)

Demand drops significantly. Use this to rest, refuel, or reposition. Some hospitals and shopping areas maintain moderate demand, but earnings per hour drop substantially.

### Afternoon Revival: 2:30 PM – 5:00 PM (★★★)

School pickups, hospital appointments, and early corporate exits create a moderate demand window. South Mumbai to North Mumbai routes perform well.

### Evening Rush: 5:30 PM – 9:30 PM (★★★★★)

Equal to the morning rush in demand. Workers heading home, dinner outings, and movie shows drive intense demand across the city.

**Top earning zones:**
- BKC, Andheri East, Powai heading to Western suburbs
- Lower Parel to Bandra corridor
- Restaurants zones in Bandra, Juhu, and Colaba

### Late Night Weekend: Friday & Saturday 10:00 PM – 2:00 AM (★★★★)

Mumbai's nightlife creates premium surge opportunities. Rides from pubs in Bandra, Lower Parel, and Juhu to residential areas command 1.5x–2.5x pricing regularly.

## Weekday vs Weekend Strategy

**Weekdays (Mon–Fri):** Focus on morning and evening corporate commutes. Consistent, predictable demand.

**Weekends (Sat–Sun):** Morning demand is lower. Shift strategy toward afternoon mall/leisure trips and late-night entertainment rides.

## Seasonal Considerations

**Monsoon (June–September):** Surge pricing activates easily as people avoid walking. Your earnings can increase 20–40% during heavy rains. Ensure your vehicle is well-maintained — National Mobility handles this automatically.

Understanding Mumbai's timing patterns is the fastest way to increase your income without working more hours. Position smart, and let the demand come to you.
    `,
  },
  "wagon-r-fuel-tips": {
    title: "Fuel Efficiency Tips for Maruti Wagon R Drivers",
    category: "Vehicle Care",
    readTime: "4 min read",
    date: "January 2026",
    content: `
Fuel is your largest operational expense as a ride-hailing driver. For every rupee you save on fuel, that's pure profit added to your income. The Maruti Wagon R is one of India's most fuel-efficient vehicles — but even the best car needs smart driving to deliver its full potential.

## 1. Smooth Acceleration is Everything

The single biggest fuel waster is aggressive acceleration. When you press the accelerator hard from a standstill or after braking, the engine consumes 30–40% more fuel.

**The technique:** Accelerate gently and build speed gradually. Aim to reach your cruising speed over 5–8 seconds rather than 2–3 seconds. On Mumbai's start-stop roads, this habit alone can improve efficiency by 15–20%.

## 2. Maintain Optimal Tyre Pressure

The Wagon R's recommended tyre pressure is 33 PSI (front and rear). Under-inflated tyres increase rolling resistance, which forces the engine to work harder and consume more fuel.

**Simple rule:** Check tyre pressure every two weeks. A monthly check at a petrol station takes 5 minutes and saves hundreds of rupees in fuel monthly.

## 3. Use Air Conditioning Wisely

Mumbai's heat makes AC non-negotiable for passenger comfort — and your ratings. But AC increases fuel consumption by approximately 10–15%.

**Smart AC habits:**
- Use ventilation mode for the first few minutes to expel hot air before switching to cooling
- Set temperature to 22–24°C instead of maximum cooling
- Turn off AC 2–3 minutes before reaching destination
- Park in shaded areas to reduce the initial cooling load

## 4. Master Google Maps for Route Planning

Mumbai's traffic is unpredictable. The difference between a clear route and a congested one can mean 20–30 minutes and 15–20% extra fuel.

Use Google Maps navigation always — not just to direct passengers, but to avoid traffic proactively. Enable "Avoid tolls" when appropriate. A slightly longer route that's traffic-free often burns less fuel than a shorter jammed one.

## 5. Engine Idling is Wasted Fuel

If you're waiting for a passenger for more than 60 seconds, switch off the engine. Idling consumes approximately 0.5 litres per hour — which adds up significantly across a full driving day.

**Exception:** Keep the engine running in heavy traffic to avoid excessive starts.

## 6. The Zero-Maintenance Advantage

The most important fuel efficiency factor is a well-maintained vehicle. Dirty air filters, old engine oil, and worn spark plugs all reduce efficiency significantly.

This is where **National Mobility's zero-maintenance model** becomes your financial advantage. All scheduled servicing, oil changes, filter replacements, and tune-ups are handled entirely by our team — at no cost to you.

A properly maintained Wagon R achieves its rated 20+ km/litre fuel economy. Let us maintain it perfectly while you focus on driving and earning.

Apply today and start driving a National Mobility Wagon R — fully maintained, fully insured, and ready for Mumbai's roads.
    `,
  },
};

export default function BlogPostPage() {
  const { slug } = useParams({ from: "/blog/$slug" });
  const post = blogContent[slug];
  const postMeta = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" />;
  }

  const paragraphs = post.content.trim().split("\n\n");

  function renderBold(text: string): React.ReactNode[] {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: static text splitting, order never changes
          <strong key={i} className="text-navy font-bold">
            {part}
          </strong>
        );
      }
      return part;
    });
  }

  function renderParagraph(para: string, idx: number) {
    if (para.startsWith("## ")) {
      return (
        <h2
          key={`h2-${idx}`}
          className="font-display text-2xl font-extrabold text-navy mt-10 mb-4"
        >
          {para.replace("## ", "")}
        </h2>
      );
    }
    if (para.startsWith("### ")) {
      return (
        <h3
          key={`h3-${idx}`}
          className="font-display text-xl font-bold text-navy mt-8 mb-3"
        >
          {para.replace("### ", "")}
        </h3>
      );
    }
    if (para.startsWith("**") && para.endsWith("**")) {
      return (
        <p
          key={`bold-para-${idx}`}
          className="font-bold text-navy font-body text-base"
        >
          {para.replace(/\*\*/g, "")}
        </p>
      );
    }
    if (para.startsWith("- ") || para.includes("\n- ")) {
      const items = para.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul key={`ul-${idx}`} className="space-y-2 my-4">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-muted-foreground font-body"
            >
              <div className="w-1.5 h-1.5 bg-teal rounded-full mt-2.5 flex-shrink-0" />
              <span>{renderBold(item.replace(/^- /, ""))}</span>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p
        key={`p-${idx}`}
        className="text-muted-foreground font-body leading-relaxed mb-4"
      >
        {renderBold(para)}
      </p>
    );
  }

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="section-gradient py-14">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-body transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 flex-wrap">
              <span className="inline-flex items-center gap-1.5 bg-teal/20 text-teal-light text-xs font-semibold px-3 py-1.5 rounded-full font-body">
                <Tag size={10} />
                {post.category}
              </span>
              <span className="text-white/50 text-xs font-body flex items-center gap-1">
                <Clock size={12} />
                {post.readTime}
              </span>
              <span className="text-white/50 text-xs font-body">
                {post.date}
              </span>
            </div>

            <h1 className="font-display text-2xl md:text-4xl font-extrabold text-white leading-tight">
              {post.title}
            </h1>

            {postMeta && (
              <p className="text-white/70 font-body text-base leading-relaxed">
                {postMeta.excerpt}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-14 bg-background">
        <div className="container mx-auto max-w-3xl">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="prose prose-lg max-w-none"
          >
            {paragraphs.map((para, idx) => renderParagraph(para, idx))}
          </motion.article>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 bg-navy rounded-2xl p-8 text-center space-y-4"
          >
            <h3 className="font-display text-2xl font-extrabold text-white">
              Start Your Journey — Apply Now
            </h3>
            <p className="text-white/70 font-body">
              Partner with National Mobility and put these strategies into
              action with a fully maintained Maruti Wagon R.
            </p>
            <Link
              to="/partner"
              className="btn-teal inline-flex items-center gap-2 shadow-teal"
            >
              Apply Now
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
