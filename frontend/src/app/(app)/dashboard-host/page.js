import Link from 'next/link'
import Button from '@/components/Button'

export const metadata = {
    title: 'Laravel - Dashboard',
}

const Dashboard = () => {
    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        Đã đăng nhập vào trang dành cho chủ nhà!
                    </div>
                    <div className="flex">
                        <Link
                            href="/add-category"
                            className="underline text-sm text-gray-600 hover:text-gray-900">
                            <Button className="ml-4">Thêm mới danh mục</Button>
                        </Link>
                    </div>

                    <div>
                        <Link
                            href="/all-category"
                            className="underline text-sm text-gray-600 hover:text-gray-900">
                            <Button className="ml-4">
                                Xem tất cả danh mục được thêm
                            </Button>
                        </Link>
                    </div>

                    <div>
                        <Link
                            href="/add-product"
                            className="underline text-sm text-gray-600 hover:text-gray-900">
                            <Button className="ml-4">Thêm mới nhà</Button>
                        </Link>
                    </div>

                    <div>
                        <Link
                            href="/all-product"
                            className="underline text-sm text-gray-600 hover:text-gray-900">
                            <Button className="ml-4">
                                Xem tất cả nhà được thêm
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
