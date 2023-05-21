import { Category } from "./Category";

export class News{
  id:number = 0;
  img_url: string = "";
  title: string = "";
  short_desc: string="";
  long_desc: string="";
  category: Category =new Category();
  created_at: string="";
  author: string = "";
}

export class NewsRequest{
  img: File | null = null;
  title: string = "";
  short_desc: string="";
  long_desc: string="";
  category: Category =new Category();
  author: string = "";
}
