'use client'

import React, { useEffect, useState } from 'react';
import { useCategory } from '../../../hooks/category';

const AllCategoryPage = () => {
    const { categories, error } = useCategory();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (categories) {
            setLoading(false);
        }
    }, [categories]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Đã xảy ra lỗi khi tải danh sách category.</p>;
    }

    return (
        <div>
            <h1>Danh sách tất cả các danh mục</h1>
            {categories.length > 0 ? (
                <ul>
                    {categories.map((category) => (
                        <li key={category.id}>{category.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Không có danh mục nào được tạo.</p>
            )}
        </div>
    );
};

export default AllCategoryPage;