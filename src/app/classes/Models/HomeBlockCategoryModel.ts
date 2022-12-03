export class HomeBlockCategoryModel{
    category_name :string = '';
    img:string = '';

    constructor(category_name:string, img:string){
        this.category_name = category_name;
        this.img = img;
    }
}