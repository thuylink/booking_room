<?php

namespace App\Services;

use App\Http\Repositories\BookingRepository;

class BookingService {
    protected $bookingRepository;

    public function __construct(BookingRepository $bookingRepository) {
        $this->bookingRepository = $bookingRepository;
    }

    public function createBooking($request) {
        $booking = $this->bookingRepository->createBooking([
            'id_user' => $request->id_user,
            'id_product' => $request->id_product,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'price' => $request->price,
            'guestNumber' => $request->guestNumber,
            'guestName' => $request->guestName,
            'phone' => $request->phone,
            'email' => $request->email,
            'message' => $request->message,
        ]);
        return $booking;
    }
}
