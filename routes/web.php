<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/admin', 'AdminCtr@index');
// Route::get('/admin/home', 'AdminCtr@index');
Route::get('/admin/{vue_capture?}', 'AdminCtr@index')->where('vue_capture', '[\/\w\.-]*');