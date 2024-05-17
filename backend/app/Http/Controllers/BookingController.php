<?php

namespace App\Http\Controllers;
use App\Http\Requests\BookingRequest;
use App\Services\BookingService;
use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    protected $bookingService;

    public function showBookingForm() {
        return view('booking.create');
    }


    public function __construct(BookingService $bookingService) {
        $this->bookingService = $bookingService;
    }

    public function store(Request $request) {


        $request->validate([
            'start_date' => 'required|string',
            'end_date' => 'required|string',
            // 'price' => 'required|numeric',
            'guestNumber' => 'required|integer|min:1',
            'guestName' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'email' => 'required|email|max:255',
            'message' => 'nullable|string|max:1000',
            'id_user' => 'required|integer',
            'id_product' => 'required|integer',
        ]);

        // Lưu thông tin đặt phòng vào cơ sở dữ liệu
        $booking = new Booking();
        $booking->id_user = $request->input('id_user');
        $booking->id_product = $request->input('id_product');
        $booking->start_date = $request->input('start_date');
        $booking->end_date = $request->input('end_date');
        $booking->price = $request->input('price');
        $booking->guestNumber = $request->input('guestNumber');
        $booking->guestName = $request->input('guestName');
        $booking->phone = $request->input('phone');
        $booking->email = $request->input('email');
        $booking->message = $request->input('message');
        $booking->save();
        return response()->json($booking, 201);

    }


    public function index() {
        $bookings = Booking::all();
        return response()->json($bookings);
    }
}





