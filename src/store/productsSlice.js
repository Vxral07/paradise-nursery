import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'Aloe Vera',    price: 299, category: 'Succulent', img: '/images/plant1.jpg' },
  { id: 2, name: 'Boston Fern',  price: 499, category: 'Fern',      img: '/images/plant2.jpg' },
  { id: 3, name: 'ZZ Plant',     price: 399, category: 'Tropical',  img: '/images/plant3.jpg' },
  { id: 4, name: 'Snake Plant',  price: 599, category: 'Succulent', img: '/images/plant4.jpg' },
  { id: 5, name: 'Cactus',       price: 199, category: 'Cactus',    img: '/images/plant5.jpg' },
  { id: 6, name: 'Peace Lily',   price: 549, category: 'Tropical',  img: '/images/plant6.jpg' }
];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}
});

export default productsSlice.reducer;
