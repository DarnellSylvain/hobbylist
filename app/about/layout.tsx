import MainNav from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full  bg-background/95 backdrop-blur">
        <div className="flex h-16 items-center justify-between py-6">
          <MainNav />
        </div>
      </header>
      {children}
      <SiteFooter />
    </div>
  );
}
