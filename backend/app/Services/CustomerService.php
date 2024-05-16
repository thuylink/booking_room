<?php

namespace App\Services;

use App\Http\Repositories\CustomerRepository;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;

class CustomerService
{
    protected $customerRepository;

    public function __construct(CustomerRepository $customerRepository)
    {
        $this->customerRepository = $customerRepository;
    }

    public function createProfile($request)
    {
        $imageName = null;

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $extension = $image->getClientOriginalExtension();
            $imageName = time() . '_' . uniqid() . '.' . $extension;
            $image->move('uploads/avt', $imageName);
        }

        $profile = $this->customerRepository->createProfile([
            'id_user' => $request->input('id_user'),
            'image' => $imageName,
            'name' => $request->input('name'),
            'gender' => $request->input('gender'),
            'birthday' => $request->input('birthday'),
            'phone' => $request->input('phone'),
            'address' => $request->input('address'),
        ]);

        return $profile;
    }

    public function updateProfile($request)
    {
        $userId = auth()->id();
        $customer = $this->customerRepository->findProfileByUserId($userId);

        if ($request->hasFile('image')) {
            $oldImage = 'uploads/avt/' . $customer->image;
            if (File::exists($oldImage)) {
                File::delete($oldImage);
            }
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move('uploads/avt', $filename);
            $request->merge(['image' => $filename]);
        } else {
            $filename = $customer->image;
        }

        $profileData = [
            'name' => $request->name,
            'gender' => $request->gender,
            'birthday' => $request->birthday,
            'phone' => $request->phone,
            'address' => $request->address,
            'image' => $filename,
        ];

        return $this->customerRepository->updateProfile($customer, $profileData);
    }
}
