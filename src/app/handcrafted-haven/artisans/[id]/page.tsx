import ArtisanByIdList from "@/app/ui/artisan/ArtisanByIdList";

export default function Page({params}:{params:{id:number}}) {


 return (
    <main className='mx-20'>

      <h2 className="text-xl py-5 font-bold">Meet the Artisan!</h2>

      <div>
        <ArtisanByIdList artisanId={params.id}/>  
      </div>
    </main>
 )
}