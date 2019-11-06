class Product {
  constructor(jsonObject) {
    this.id = jsonObject.id;
    this.createdAt = jsonObject.createdAt;
    this.name = jsonObject.name;
    this.avatar = jsonObject.avatar;
    this.imageUrl = jsonObject.imageUrl;
  }
}
export default Product;
