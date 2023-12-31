<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
//  use Illuminate\Http\Controllers\MemberController;
 use App\Http\Controllers\MemberController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('memberlist', [MemberController::class,'index']); 
Route::get('members/{id}', [MemberController::class, 'show']); 
// Route::post('members', '\App\Http\Controllers\MemberController@store'); 
Route::put('memberedit/{id}/', [MemberController::class, 'edit']);
Route::put('membersupdate/{id}', '\App\Http\Controllers\MemberController@update');
Route::delete('memberdelete/{id}', '\App\Http\Controllers\MemberController@destroy');
Route::post('create', [MemberController::class,'create']);