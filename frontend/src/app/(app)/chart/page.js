'use client'
import React, { useState, useEffect, useRef } from 'react';
import { useProduct } from '../../../hooks/product';
import Chart from 'chart.js/auto';
import './chart.css';
import { useCategory } from '../../../hooks/category'

const BarChart = () => {
    const { product } = useProduct();
    const [topProducts, setTopProducts] = useState([]);
    const [topCategories, setTopCategories] = useState([]);
    const { category } = useCategory()

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
            calculateCategoryCounts(product);
        }
    }, [product]);

    const calculateCategoryCounts = (products) => {
        const categoryCountMap = new Map();

        products.forEach(item => {
            if (item.id_category) {
                categoryCountMap.set(item.id_category, (categoryCountMap.get(item.id_category) || 0) + 1);
            }
        });

        const sortedCategoryCounts = [...categoryCountMap.entries()].sort((a, b) => b[1] - a[1]);
        const top10Categories = sortedCategoryCounts.slice(0, 10);
        setTopCategories(top10Categories);

        drawCategoryPieChart(top10Categories);
    };

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
                        data: data.map(product => product.view_count/2),
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
                    },
                    maintainAspectRatio: false, // Allow custom width and height
                }
            });
        }
    };

    const drawCategoryPieChart = (data) => {
        if (categoryChartInstance.current) {
            categoryChartInstance.current.destroy();
        }
        if (categoryChartRef.current) {
            // Extracting category names from the data array
            const categoryNames = data.map(item => item[0]);
    
            categoryChartInstance.current = new Chart(categoryChartRef.current, {
                type: 'pie',
                data: {
                    labels: categoryNames, // Using category names as labels
                    datasets: [{
                        label: 'Số lượng sản phẩm',
                        data: data.map(item => item[1]),
                        backgroundColor: data.map((_, i) => `hsl(${i * 36}, 70%, 50%)`),
                        borderColor: '#ffffff',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        tooltip: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    return `${tooltipItem.label} : ${tooltipItem.raw}`;
                                }
                            }
                        }
                    }
                }
            });
        }
    };

    // Step 1: Ensure each product has its name_category
if (product && product.length > 0) {
    const updatedProducts = product.map(test => {
        if (category && category.length > 0) {
            const foundCategory = category[0].find(item => item.id === test.id_category);
            if (foundCategory) {
                test.name_category = foundCategory.name_category;
            }
        }
        return test;
    });

    // Step 2: Aggregate products by name_category
    const categoryCount = updatedProducts.reduce((acc, curr) => {
        const categoryName = curr.name_category || 'Unknown Category';
        if (!acc[categoryName]) {
            acc[categoryName] = 0;
        }
        acc[categoryName]++;
        return acc;
    }, {});

 const sortedCategoryCount = Object.entries(categoryCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);
    // Step 3: Pass aggregated data to drawCategoryPieChart function
    drawCategoryPieChart(sortedCategoryCount);
}
    
    

    return (
        <div className="chart-container">
            <h1 className="view">Các sản phẩm được xem nhiều nhất</h1>
            <div className="chart-wrapper">
                <canvas ref={productChartRef}></canvas>
            </div>

            <h1 className="view">Top 10 danh mục có nhiều sản phẩm nhất</h1>
            <div className="piechart-wrapper">
                <canvas ref={categoryChartRef}></canvas>
            </div>
        </div>
    );
};

export default BarChart;
