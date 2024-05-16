type Size = ''|'S'|'M'|'L'|'XL'
class Product{
    constructor(
        public name: string,
        public price: number = 0,
        public size: Size = '', 
        //public inStock: boolean = false,
    
    ){}

    isProductReady(): boolean{
        
        //no DRY
        /* if(this.name.length <=0)
        if(this.price <=0)throw Error('This is FREE');
        if(this.name.length <=0)throw Error('Size is empty'); */
        
        //DRY
        for(const key in this){
            switch(typeof this[key]){
                case 'string':
                    if ((<string><unknown>this[key]).length <= 0)throw Error('Name is empty');
                break;
                case 'number':
                    if ((<number><unknown>this[key])<= 0)throw Error('This is FREE');
                break;
                default:
                    throw Error(`${typeof this[key]} is not valid`)
            }
        }
        return true;
    }

    toString(){
        

        
        if(!this.isProductReady) return;
        return `${this.name} (${this.price}), ${this.size}`
    }
}
(()=>{

    const bluePants = new Product('Blue Large Pants',10,'L');
    console.log(bluePants.toString());

})();