'use client'

import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { productId } = useParams();

  // Sử dụng productId để lấy thông tin chi tiết của sản phẩm từ API hoặc nguồn dữ liệu 

  return (
    <div>
      <h2>Chi tiết sản phẩm {productId}</h2>
    </div>
  );
};

export default ProductDetailPage;