<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class MovieApiController extends Controller
{
    public function index()
    {
        return response()->json(
            DB::table('movies')->get()
        );
    }
}