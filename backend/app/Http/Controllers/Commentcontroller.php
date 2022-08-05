<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;

class Commentcontroller extends Controller
{
    public function store(Request $req){
        $data = new Comment;
        if ($req->hasFile('image')) {
            $file = $req->file('image');
            $extensions = $file->getClientOriginalExtension();
            $fileName = time() . '.' . $extensions;
            $file->move('uploads/comment', $fileName);
            $filePath = 'uploads/comment/' . $fileName;
            $data->img_text=$filePath;
           
     }
     else{
        $data->img_text = $req->input('comment');
        
     }
     $data->user_id = $req->input('user');
     $data->post_id = $req->input('post');
     $data->save();

        return "Commented Successfully ...";
    }
    
    public function destroy($id){
        $data = Comment::find($id);
        $data->delete();
        return "Deleted Comment Successfully ...";
    }


    public function update(Request $req , $id)
    {
        $data = Comment::find($id);
    
    $data->img_text = $req->input('comment');
    
        $data->update();
        return "Updated Comment Successfully ...";

    }
}
