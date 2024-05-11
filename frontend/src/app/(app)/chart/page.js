'use client'
import React, { useState, useEffect, useRef } from 'react';
import { useProduct } from '../../../hooks/product';
import Chart from 'chart.js/auto';
import './chart.css';

const BarChart = () => {
    const { product } = useProduct();
    const [topProducts, setTopProducts] = useState([]);
    const [topCategories, setTopCategories] = useState([]);

    const productChartRef = useRef(null);
    const productChartInstance = useRef(null);
    const categoryChartRef = useRef(null);
    const categoryChartInstance = useRef(null);

    useEffect(() => {
        if (product) {
            const sortedProducts = product.sort((a, b) => b.view_count - a.view_count);
            const top10Products = sortedProducts.slice(0, 10);
            setTopProducts(top10Products);

            drawProductBarChart(top10Products);
        }
    }, [product]);

    useEffect(() => {
        if (product && product.length > 0) {
            const categoryMap = new Map();
            product.forEach(item => {
                if (item.categories && item.categories.length > 0) {
                    item.categories.forEach(category => {
                        categoryMap.set(category, (categoryMap.get(category) || 0) + 1);
                    });
                }
            });

            const sortedCategories = [...categoryMap.entries()].sort((a, b) => b[1] - a[1]);
            const top10Categories = sortedCategories.slice(0, 10).map(category => category[0]);
            setTopCategories(top10Categories);

            drawCategoryBarChart(top10Categories, categoryMap);
        }
    }, [product]);

    const drawProductBarChart = (data) => {
        if (productChartInstance.current) {
            productChartInstance.current.destroy();
        }
        if (productChartRef.current) {
            productChartInstance.current = new Chart(productChartRef.current, {
                type: 'bar',
                data: {
                    labels: data.map(product => product.title),
                    datasets: [{
                        label: 'Lượt xem',
                        data: data.map(product => product.view_count),
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    };

    const drawCategoryBarChart = (categories, categoryMap) => {
        if (categoryChartInstance.current) {
            categoryChartInstance.current.destroy();
        }
        if (categoryChartRef.current) {
            categoryChartInstance.current = new Chart(categoryChartRef.current, {
                type: 'bar',
                data: {
                    labels: categories,
                    datasets: [{
                        label: 'Số lượng sản phẩm',
                        data: categories.map(category => categoryMap.get(category) || 0),
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    };

    return (
        <div>
            <h1 className="view">Các sản phẩm được xem nhiều nhất</h1>
            <canvas ref={productChartRef}></canvas>

            <h1 className="view">Các danh mục có nhiều sản phẩm nhất</h1>
            <canvas ref={categoryChartRef}></canvas>
        </div>
    );
};

export default BarChart;
