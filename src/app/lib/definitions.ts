export type Product = {
  id: number;
  pname: string;
  price: number;
  category_id: number;
  artisan_id: number;
  artisanfname?: string;
  artisanlname?: string;
  categoryname?: string;
};


export type Category = {
  id: number;
  categoryname: string;
  category_url: string;
};

export type CategoryCrafts = {
  id: number;
  craftname: string;
  ccdescription: string;
  ccprice: number;
  ccurl: string;
  category_id: number;
}

export type Artisan = {
  id: number;
  artisanfname: string;
  artisanlname: string;
  artisanemail: string;
  artisanphone: string;
  artisaninfo: string;
}