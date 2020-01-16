class Product {
  public id: number;
  public title: string;
  public description: string;
}

const chocolate: Product = new Product();
chocolate.id = null;
chocolate.description = null;

let title: string;

if (chocolate.id !== null) {
  if(chocolate.title !== null) {
    title = chocolate.title;
  } else {
    title = 'N/A';
  }
} else {
  title = 'N/A';
}
