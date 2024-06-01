
export type Product = {
  id: number;
  pname: string;
  price: number;
  category_id: number;
  artisan_id: number;
  quantity: number;
  product_description: string;
  artisanfname?: string;
  artisanlname?: string;
  categoryname?: string;
};


export type Category = {
  id: number;
  categoryname: string;
};


export type Artisan = {
  id: number;
  artisanfname: string;
  artisanlname: string;
  artisanemail: string;
  artisanphone: string;
  artisaninfo: string;
}

export type Customers = {
  id: number;
  customerfname: string;
  customerlname: string;
  customeremail: string;
  customeraddress: string;
  customercity: string;
  customerstate: string;
  customerzip: string;
}

export type Reviews = {
  id: number;
  reviewdescription: string;
  reviewrating: string;
  reviewdate: string;
  customerid?: number;
  customerfname?: string;
  customerlname?: string;
}