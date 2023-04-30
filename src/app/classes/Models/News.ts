import { Category } from "./Category";

export class News{
  id:number = 0;
  img_url: string = "";
  title: string = "";
  short_desc: string="";
  long_desc: string="";
  category: Category | null = null;
  created_at: string="";
  author: string = "";
}
