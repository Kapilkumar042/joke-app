export async function getAllProduct(){
    return fetch("https://api.escuelajs.co/api/v1/products")
}

export async function getAllCategories(){
    return fetch("https://api.escuelajs.co/api/v1/categories")
}

export async function getProductById(){
    return fetch(`https://api.escuelajs.co/api/v1/products/$[id]`)
}