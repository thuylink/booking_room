<?php

namespace App\Http\Controllers;

use App\Models\Chatting;
use Illuminate\Http\Request;

class ChattingController extends Controller
{
    public function index () {
        $chattings = Chatting::all();
        return response()->json($chattings);
    }

    public function store(Request $request) {
        $request->validate([
            'sender_id' => 'required|integer',
            'receiver_id' => 'required|integer',
            'content' => 'required|string'
        ]);

        $chatting = new Chatting();
        $chatting->sender_id =  $request->sender_id;
        $chatting->receiver_id = $request->receiver_id;
        $chatting->content = $request->content;
        $chatting->save();

        return response()->json(['message' => 'Tin nhắn được gửi thành công']);
    }


    //xem tin nhắn theo người nhận
    public function viewChattingsByReceiver($receiver_id) {
        $chattings = Chatting::where('receiver_id', $receiver_id)->get();
        return response()->json($chattings);
    }

    //xem tin nhắn theo người gửi
    public function viewChattingsBySender($sender_id) {
        $chattings = Chatting::where('sender_id', $sender_id)->get();
        return response()->json($chattings);
    }
}
