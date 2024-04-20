<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PersonalInfoController;
use App\Http\Controllers\EducationInfoController;
use App\Http\Controllers\ParentsInfoController;
use App\Http\Controllers\OtherInfoController;
use App\Http\Middleware\CorsMiddleware;

/*
|--------------------------------------------------------------------------
| API Routes by @bhijeet
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::fallback(function () {
    return response()->json([
        'status' => false,
        'message' => 'Invalid Route !!',
    ], 200);
});

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('validateuser', 'validateUser');
    
    Route::post('login_api', 'login_api');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::get('refresh', 'refresh');
    Route::post('update_password', 'UpdatePassword');
    Route::post('un-block-user', 'unBlockUser');
    Route::get('TokenError', 'TokenError')->name('TokenError');
    Route::get('get-unread-notification', 'getUnReadNotification');
    Route::get('get-read-notification', 'getReadNotification');
    Route::post('mark-read-notification', 'markReadNotification');
    Route::post('GetBiometicAttendance', 'GetBiometicAttendance');
});

// here add routes Module wise
Route::middleware([CorsMiddleware::class])->group(function () {
    // All routes here will have CORS middleware applied
    Route::get('/PersonalInfo/{registrationNo}', [PersonalInfoController::class, 'index']);
    Route::post('/postPersonalInfo', [PersonalInfoController::class, 'storeFromJson']);

    Route::get('/EducationInfo/{registrationNo}', [EducationInfoController::class, 'index']);
    Route::get('/PrevEducationInfo/{registrationNo}', [EducationInfoController::class, 'index2']);
    Route::post('/postEducationInfo', [EducationInfoController::class, 'storeFromJson']);

    Route::get('/ParentsInfo/{registrationNo}', [ParentsInfoController::class, 'index']);
    Route::post('/postParentsInfo', [ParentsInfoController::class, 'storeFromJson']);

    Route::get('/HostelInfo/{registrationNo}', [OtherInfoController::class, 'index']);
    Route::get('/StudentAccountInfo/{registrationNo}', [OtherInfoController::class, 'index2']);
    // Route::get('/EmailInfo/{registrationNo}', [OtherInfoController::class, 'index3']);
    Route::post('/postOtherInfo', [OtherInfoController::class, 'storeFromJson']);
    
    // Route::post('/PersonalInfo',[PersonalInfoController::class, 'store']);
    // Other routes...
});



include('adminRoutes.php');
include('userRoutes.php');
