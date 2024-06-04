import Nav from '@/app/ui/nav/nav';
import { Providers } from '@/app/handcrafted-haven/providers';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Providers>
        <div>
          <Nav />
        </div>
        <div>{children}</div>
      </Providers>
    </div>
  );
}
