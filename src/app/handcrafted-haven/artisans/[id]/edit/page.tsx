import Breadcrumbs from '@/app/ui/artisan/Breadcrumbs';
import { fetchArtisanById } from '@/app/lib/data';
import NotFound from '@/app/not-found';
import UpdateBioForm from '@/app/ui/artisan/UpdateBio';

export default async function Page({ params }: { params: { id: number } }) {
  const id = params.id;
  const artisan = await fetchArtisanById(id)
  // const [artisan] = await Promise.all([
    //   fetchArtisanById(id),
    
    // ]);

    if (!artisan) {
      NotFound();
    }
return (
 <main>
    <Breadcrumbs
      breadcrumbs={[
        { label: 'Artisan', href: '/handcrafted-haven/artisans' },
        {
          label: 'Update ',
          href: `/handcrafted-haven/artisans/${id}/edit`,
          active: true,
        },
      ]}
    />

      <div className='max-w-5xl m-auto md:shadow-2xl md:p-5'>
        <UpdateBioForm artisans={artisan[0]}/>
      </div>
    

    
  </main>
);
}