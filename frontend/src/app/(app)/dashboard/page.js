'use client'
import React, { useEffect, useState } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@nextui-org/react';
import { useProduct } from '../../../hooks/product';

const Dashboard = () => {
    const { product, error } = useProduct()
    console.log(product)
  if (error) {
    return <div>Error loading products</div>;
  }

  return (
    <>
      <Table aria-label="Product List">
        <TableHeader>
          <TableColumn className="text">STT</TableColumn>
          <TableColumn className="text">Tiêu đề</TableColumn>
          <TableColumn className="text">Địa chỉ</TableColumn>
          <TableColumn className="text">Chi phí</TableColumn>
        </TableHeader>
        <TableBody>
          {product?.map((product, index) => (
            <TableRow key={product.id}>
              <TableCell className="text">{index + 1}</TableCell>
              <TableCell className="text">{product.title}</TableCell>
              <TableCell className="text">{product.location}</TableCell>
              <TableCell className="text">{product.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
export default Dashboard;