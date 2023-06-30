export async function getAllProduct(){
    return fetch("https://api.escuelajs.co/api/v1/products")
}

export async function getAllCategories(){
    return fetch("https://api.escuelajs.co/api/v1/categories")
}

// export async function getProductById(id:Number){
//     return fetch(`https://api.escuelajs.co/api/v1/products/$[id]`)
// }

export async function updateProduct(title:string, price:string, description:string, id:string){
    return fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
}

export async function getProductById(id:string) {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    // if (!response.ok) {
    //   throw new Error("Failed to fetch product by ID");
    // }
    // const product = await response.json();
    // return product;
  }