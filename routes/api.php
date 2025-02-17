<?php

use App\Http\Controllers\Mmf\MmfConnectionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::prefix('/mmf')->group(function () {
    Route::post('/connect', [MmfConnectionController::class, 'connect']);
});
