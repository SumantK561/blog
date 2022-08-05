<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Usercontroller;
use App\Http\Controllers\Categorycontroller;
use App\Http\Controllers\Postcontroller;
use App\Http\Controllers\Commentcontroller;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// user
Route::post("store",[Usercontroller::class,'store']);                                     //Tested --- Working 
Route::post("login",[Usercontroller::class,'loginUser']);                                 //Tested --- Working

Route::middleware('auth:api')->get("home",[Usercontroller::class,'home']);
Route::middleware('auth:api')->get("logoutUser",[Usercontroller::class,'logoutUser']);

Route::post("update/{id}",[Usercontroller::class,'update']);                              //Tested --- Working
// Route::get("userView/{id}",[Usercontroller::class,'list']);   
Route::middleware('auth:api')->get("userView/{id}",[Usercontroller::class,'list']);                            //Tested --- Working
Route::get("detail",[Usercontroller::class,'detail']);                                    //Tested --- Working



//category
Route::post("categoryStore/",[Categorycontroller::class,'store']);                          //Tested --- Working
Route::delete("categoryDelete/{id}",[Categorycontroller::class,'destroy']);                //Tested --- Working
Route::post("categoryUpdate/{id}",[Categorycontroller::class,'update']);                   //Tested --- Working
Route::get("categoryView",[Categorycontroller::class,'view']);                             //Tested --- Working



//Posts
Route::post("postStore",[Postcontroller::class,'store']);                                  //Tested --- Working
Route::delete("postDelete/{id}",[Postcontroller::class,'destroy']);                        //Tested --- Working
Route::post("postUpdate/{id}",[Postcontroller::class,'update']);                           //Tested --- Working
Route::get("postView",[Postcontroller::class,'view']);       
Route::get("userPost/{id}",[Postcontroller::class,'userPost']);                              //Tested --- Working
Route::get("postDetail/{id}",[Postcontroller::class,'postDetail']);                        //Tested --- Working



// comments
Route::post("commentStore",[Commentcontroller::class,'store']);                             //Tested --- Working
Route::delete("commentDelete/{id}",[Commentcontroller::class,'destroy']);                   //Tested --- Working
Route::post("commentUpdate/{id}",[Commentcontroller::class,'update']);                      //Tested --- Working

