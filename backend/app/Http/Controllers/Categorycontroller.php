<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class Categorycontroller extends Controller
{
    public function store(Request $req){
        $data = new Category;
        $data->name = $req->input('name');
        $data->user_id = $req->input('user_id');
        $data->save();
        return 'Category Added Sucessfully...';
        
    }
    public function destroy($id){
        $data = Category::find($id);
        $data->delete();
        return "Deleted Category successfully...";

    }
    public function update(Request $req , $id)
    {
        $data = Category::find($id);
        $data->name	= $req->input('name');
        $data->update();
        return "Updated Category Successfully ...";
    }


    public function view(){
        $data = Category::all();
        return $data;
    }
}
