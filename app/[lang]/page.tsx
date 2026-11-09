import { Baker } from "@/components/sections/baker";
import { Flavors } from "@/components/sections/flavors";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { Order } from "@/components/sections/order";
import { Story } from "@/components/sections/story";

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Hero />
      <Flavors />
      <Gallery />
      <Story />
      <Baker />
      <Order />
    </main>
  );
}
