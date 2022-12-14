<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/posts', [App\Http\Controllers\PostController::class, 'index'])->name('posts');

//Route::get("posts", "PostController@index")->middleware('auth');

//Route::resource('posts', "PostController")->middleware('auth');

Route::get('/postslistagem', [App\Http\Controllers\PostController::class, 'listagemPosts'])->name('posts.list');
Route::post('/storepost', [App\Http\Controllers\PostController::class, 'storePost'])->name('posts.store');
Route::post('/updatepost/{id?}', [App\Http\Controllers\PostController::class, 'updatePost'])->name('posts.update');
Route::post('/editpost/{id?}', [App\Http\Controllers\PostController::class, 'editPost'])->name('posts.edit');
Route::post('/deletepost/{id?}', [App\Http\Controllers\PostController::class, 'destroy'])->name('posts.destroy');
Route::post('/buscarpost', [App\Http\Controllers\PostController::class, 'buscar'])->name('posts.buscar');

