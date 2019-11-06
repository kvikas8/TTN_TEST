import Product from '../models/product';
const productJson = [
  {
    id: 'PRODUCT_ID_1',
    createdAt: '2019-11-03T18:43:50.444Z',
    name: 'Product1',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/marklamb/128.jpg',
    imageUrl:
      'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 'PRODUCT_ID_2',
    createdAt: '2019-11-03T11:40:56.177Z',
    name: 'Product1',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/madebybrenton/128.jpg',
    imageUrl:
      'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 'PRODUCT_ID_3',
    createdAt: '2019-11-04T02:25:01.174Z',
    name: 'Product1',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/stefvdham/128.jpg',
    imageUrl:
      'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 'PRODUCT_ID_4',
    createdAt: '2019-11-04T00:13:12.123Z',
    name: 'Product1',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/popey/128.jpg',
    imageUrl:
      'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 'PRODUCT_ID_5',
    createdAt: '2019-11-03T18:21:31.395Z',
    name: 'Product1',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/the_purplebunny/128.jpg',
    imageUrl:
      'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 'PRODUCT_ID_6',
    createdAt: '2019-11-04T00:40:01.340Z',
    name: 'Product1',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/amandabuzard/128.jpg',
    imageUrl:
      'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 'PRODUCT_ID_7',
    createdAt: '2019-11-03T16:42:40.190Z',
    name: 'Product1',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/boxmodel/128.jpg',
    imageUrl:
      'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 'PRODUCT_ID_8',
    createdAt: '2019-11-04T05:53:09.013Z',
    name: 'Product1',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/emsgulam/128.jpg',
    imageUrl:
      'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 'PRODUCT_ID_9',
    createdAt: '2019-11-03T18:41:42.757Z',
    name: 'Product1',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/VinThomas/128.jpg',
    imageUrl:
      'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 'PRODUCT_ID_10',
    createdAt: '2019-11-03T20:23:32.596Z',
    name: 'Product1',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/jay_wilburn/128.jpg',
    imageUrl:
      'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
];
const PRODUCTS = productJson.map(jsonObj => new Product(jsonObj));

export default PRODUCTS;
