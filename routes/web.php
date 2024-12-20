<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});
Route::get('/profile', function () {
    return Inertia::render('Profile');
});
Route::get('/customer', function () {
    return Inertia::render('Customer');
});


require __DIR__.'/auth.php';
