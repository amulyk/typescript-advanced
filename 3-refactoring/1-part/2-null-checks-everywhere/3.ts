class Product {
  public id: number;
  public title: string;
  public description: string;
}

const chocolate: Product = new Product();
chocolate.id = null;
chocolate.description = null;

// "strictNullChecks": true
{
  let title: string;
  title = chocolate.title;
}
