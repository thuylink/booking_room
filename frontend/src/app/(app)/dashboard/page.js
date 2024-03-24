'use client'
import React from 'react'
import { useState } from 'react'

import { useProduct } from '../../../hooks/product'
import { useCategory } from '../../../hooks/category'

import { Pannellum } from 'pannellum-react'
import Image from 'next/image'
// import Link from 'next/link'

// import { Button } from '@nextui-org/button'
import { Card, CardBody } from '@nextui-org/card'
import './style_dashboard.scss'
import { Navbar, NavbarContent, Link, Button } from '@nextui-org/react'

const Dashboard = () => {
    const { product, error } = useProduct()
    const { category, error2 } = useCategory()
    const [searchValue, setSearchValue] = useState('')
    // const [filteredProducts, setFilteredProducts] = useState([]);

    const filteredProducts = product?.filter((product) =>
    product.location.toLowerCase().includes(searchValue.toLowerCase())
  )

    console.log('category đây', category)


    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const filtered = product?.filter((product) =>
          product.location.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredProducts(filtered);
      };


    if (error) {
        return <div>Error loading products</div>
    }

    if (error2) {
        return <div>Error2 loading categories</div>
    }

    return (
        <div>
        <form className="mt-4" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Tìm kiếm..."
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
        >
          Tìm kiếm
        </button>
      </form>
            <Navbar isBordered>
                <NavbarContent className="nav sm:flex gap-4" justify="center">
                    {category && category.length > 0 ? (
                        category.map(item => (
                            <div key={item.id} className="flex flex-col gap-6">
                                <h2 className="text-lg font-bold uppercase">
                                    {item.name_category}
                                </h2>
                            </div>
                        ))
                    ) : (
                        <p>No categories found.</p>
                    )}
                </NavbarContent>
            </Navbar>

            <div className="grid grid-cols-4 gap-4">
            {filteredProducts?.map((product) => (
                <section key={product.id} className="py-36">
      <div className="container flex items-center justify-center">
        <Card className="py-4 lg:w-3/4 xl:w-1/2">
          <CardBody className="overflow-visible py-2">
            <div className="flex flex-col-reverse gap-6">
              <div className="right">
                <h2 className="text-lg font-bold uppercase">
                  {product.location}
                </h2>

                <div className="mb-6 mt-2 flex gap-3">
                  <span className="font-bold">Gía tiền: {product.price}</span>
                </div>

                <div className="mt-6 flex gap-6">
                  <Link
                    href={`/show-product/${product.id}`}
                    className="underline-none text-sm hover:text-gray-900"
                  >
                    <Button className="ml-4 bg-pink-500">
                      <span className="text-lg text-white cursor-pointer active:opacity-50">
                        Xem Chi Tiết
                      </span>
                    </Button>
                  </Link>

                  <Button
                    color="primary"
                    variant="bordered"
                    radius="full"
                  >
                    Yêu thích
                  </Button>
                </div>
              </div>
              {product.image &&
                Array.isArray(JSON.parse(product.image)) && (
                  <>
                    {JSON.parse(product.image).slice(0, 1).map((image, index) => {
                      const cleanedImagePath = image.replace(/[\[\]"]/g, '');
                      const imagePath = `http://127.0.0.1:8000/uploads/product/${cleanedImagePath}`;

                      return (
                        <img
                          key={index}
                          src={imagePath}
                          alt="Image"
                          width="270px"
                          height="200px"
                        />
                      );
                    })}
                  </>
                )}
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  ))}
</div>
        </div>
    )
}
export default Dashboard
