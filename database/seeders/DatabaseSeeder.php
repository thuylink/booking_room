<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Category;
use Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */

    //run() dùng để thêm dữ liệu mẫu vào cơ sở dữ liệu
    public function run(): void
    {

        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);



        $userRole = DB::table('role')->where('id', 2)->first();
        if (!$userRole) {
            DB::table('role')->insert([
                'id' => 2,
                'name_role' => 'user',
            ]);
        }

        $adminRole = DB::table('role')->where('id', 1)->first();
        if (!$adminRole) {
            DB::table('role')->insert([
                'id' => 1,
                'name_role' => 'admin',
            ]);
        }

        $categoryName = [
            'Thật ấn tượng!',
            'Đảo',
            'Được ưa chuộng',
            'Hang động',
            'Vui chơi',
            'Nhà trên cây',
            'Nhà không sử dụng điện lưới',
            'Khung cảnh tuyệt vời',
            'Bãi biển',
            'Cabin',
            'Xe cắm trại',
            'Công viên quốc gia',
            'Hồ bơi tuyệt vời',
            'Bắc Cực',
            'Thiết kế',
            'Ven hồ',
            'Lướt sóng',
            'Nhà nhỏ',
            'Khu cắm trại',
            'Nhà khung chữ A',
            'Mới',
            'Chơi golf',
            'Nhiệt đới',
            'Phòng',
            'Các thành phố nổi tiếng',
            'Phục vụ bữa sáng',
            'Biệt thự',
            'Hồ',
            'Nông thôn',
            'Nhà dưới lòng đất',
            'Nông trại',
            'Nhà mang tính lịch sử',
            'Lâu đài',
            'Vườn nho',
            'Hanok',
            'Luxe',
            'Trượt tuyết',
            'Nhà phong cách Cycladic',
            'Nhà trên núi',
            'Bếp của bếp trưởng',
            'Thuyền',
            'Lều mục đồng',
            'Cối xay gió',
            'Minsu',
            'Hướng biển',
            'Ryokan',
            'Nhà thuyền',
            'Casa Paticular',
            'Lều yurt',
            'Sa mạc',
            'Nhà nông trại',
            'Nhà mái vòm',
            'Tháp',
            'Hỗ trợ người dùng xe lăn',
            'Đường trượt tuyết thẳng tới chỗ ở',
            'Container',
            'Không gian sáng tạo',
            'Grand Piano',
            'Dammuso',
            'Nhà chỏm nón',
            'Raid'
        ];

        foreach ($categoryName as $item) {
            try {
                dump($item);
                Category::create([
                    'id_category' => $item,
                    'name' => $item,
                    'description' => $item,
                    'created_at' => Carbon::now()

                ]);
            } catch (\Exception $exception) {

            }

        }
    }
}
