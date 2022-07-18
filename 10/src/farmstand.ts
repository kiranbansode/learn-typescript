interface Product {
	price: number;
	name: string;
	quantity: number;
}

const printProductSummery = (product: Product): void => {
	console.log(`${product.name} - $${product.price}`);
};
