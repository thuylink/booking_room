<?php

namespace App\Http\Repositories;

use App\Models\Booking;

class BookingRepository {
    protected $booking;

    public function __construct(Booking $booking) {
        $this->booking = $booking;
    }

    public function createBooking($data) {
        $booking = $this->booking->create([
            'id_user' => $data['id_user'],
            'id_product' => $data['id_product'],
            'start_date' => $data['start_date'],
            'end_date' => $data['end_date'],
            'price' => $data['price'],
            'guestNumber' => $data['guestNumber'],
            'guestName' => $data['guestName'],
            'phone' => $data['phone'],
            'email' => $data['email'],
            'message' => $data['message'],

        ]);

        return $booking;
    }
}
