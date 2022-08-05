<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    protected $table = 'comments';
    protected $fillable = [
        'img_text',
        'user_id',
        'post_id'  
    ];

    public function user(){
        return $this->belongsTo('App\Models\User','user_id','user_id');
    }
    public function post(){
        return $this->belongsTo('App\Models\Post','post_id','post_id');
    }
}
