<?php

namespace App\Http\Repositories;

use App\Models\Profile;

class CustomerRepository
{
    protected $profile;

    public function __construct(Profile $profile) {
        $this->profile=$profile;
     }
    public function createProfile($data)
    {
        $profile = $this->profile->create([
            'id_user' => $data['id_user'],
            'name' => $data['name'],
            'gender' => $data['gender'],
            'birthday' => $data['birthday'],
            'phone' => $data['phone'],
            'address' => $data['address'],
            'image' => $data['image'],
        ]);
        return $profile;
        // return Profile::create($data);
    }
    public function findProfileByUserId($userId)
    {
        return $this->profile->where('id_user', $userId)->first();
    }

    public function updateProfile($customer, $data)
    {
        return $customer->update($data);
    }
}
