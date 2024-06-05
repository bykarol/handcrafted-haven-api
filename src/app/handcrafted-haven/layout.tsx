import Nav from '@/app/ui/nav/nav';
import Footer from '@/app/ui/footer/footer';
import { Providers } from '@/app/handcrafted-haven/providers';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Providers>
        <div>
          <Nav />
        </div>
        <div>{children}</div>
        <div>
          <Footer />
        </div>
      </Providers>
    </div>
  );
}
