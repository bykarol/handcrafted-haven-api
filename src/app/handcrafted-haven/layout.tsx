import Nav from '@/app/ui/nav/nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <Nav />
      </div>
      {children}
    </div>
  );
}
