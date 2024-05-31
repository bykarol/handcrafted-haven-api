
export function CategorySkeleton() {
  return (
    <div className='flex flex-col items-center gap-2'>
        <div className='flex flex-col justify-center rounded-full bg-gray w-64 h-64'></div>
        <div className='h-7 w-40 rounded-md bg-gray' />
    </div>
  );
}


export function CategoriesSkeleton() {
    return (
        <div className='animate-pulse flex flex-row flex-wrap justify-evenly gap-28'>
            <CategorySkeleton/>
            <CategorySkeleton/>
            <CategorySkeleton/>
            <CategorySkeleton/>
            <CategorySkeleton/>
            <CategorySkeleton/>
        </div>
    );
}


export function ProductDetailsSkeleton() {
    return (
        <div className="flex justify-center m-9">
            <div className='md:w-1/3 animate-pulse p-4 text-gray flex flex-row flex-wrap justify-center gap-8 md:gap-16'>
                <div className="w-80 h-10 text-center bg-gray p-2 rounded-md"> </div>

                <div className="flex flex-col md:flex-row m-auto justify-center gap-10">
                    <div className="flex flex-row md:flex-col"> 
                        <div className="w-12 h-16 md:w-20 md:h-20 m-3 bg-gray">   
                        </div>
                        <div className="w-12 h-16 md:w-20 md:h-20 m-3 bg-gray">   
                        </div>
                        <div className="w-12 h-16 md:w-20 md:h-20 m-3 bg-gray">   
                        </div>
                        <div className="w-12 h-16 md:w-20 md:h-20 m-3 bg-gray">   
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-5 items-center content-center">
                        <div className="w-40 h-52 md:w-full md:h-4/5 text-center rounded-lg bg-gray">
                        </div>
                        <div className="w-60 h-10 rounded-md bg-gray">
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}


export function ArtisanSkeleton() {
    return (
        <div className="flex flex-col gap-2">
            <div className="w-40 h-56 bg-gray"> </div>
            <div className="w-28 h-8 bg-gray m-auto"> </div>
        </div>
    )
}


export function ArtisansSkeleton() {
    return (
        <div className='animate-pulse flex flex-row flex-wrap justify-evenly gap-28'>
            <ArtisanSkeleton/>
            <ArtisanSkeleton/>
            <ArtisanSkeleton/>
            <ArtisanSkeleton/>
            <ArtisanSkeleton/>
        </div>
    );
}

export function ProductsSkeleton(){
    return(
        <div className='animate-pulse flex flex-row flex-wrap justify-evenly gap-28'>
            <ProductDetailsSkeleton />
            <ProductDetailsSkeleton />
            <ProductDetailsSkeleton />
            <ProductDetailsSkeleton />
            <ProductDetailsSkeleton />
        </div>

    );
}