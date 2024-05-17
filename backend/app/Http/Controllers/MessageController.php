<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function index () {
        $messages = Message::all();
        return response()->json($messages);
    }

    public function store(Request $request) {
        $request->validate([
            'sender_id' => 'required|integer',
            'receiver_id' => 'required|integer',
            'content' => 'required|string'
        ]);

        $message = new Message();
        $message->sender_id =  $request->sender_id;
        $message->receiver_id = $request->receiver_id;
        $message->content = $request->content;
        $message->save();

        return response()->json(['message' => 'Tin nhắn được gửi thành công']);
    }


    //xem tin nhắn theo người nhận
    public function viewMessagesByReceiver($receiver_id) {
        $messages = Message::where('receiver_id', $receiver_id)->get();
        return response()->json($messages);
    }

    //xem tin nhắn theo người gửi
    public function viewMessagesBySender($sender_id) {
        $messages = Message::where('sender_id', $sender_id)->get();
        return response()->json($messages);
    }
}
