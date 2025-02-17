<?php

namespace App\Http\Controllers\Mmf;

use App\Events\MmfConnected;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MmfConnectionController extends Controller
{
    /**
     * connect
     *
     * @param  mixed $request
     * @return void
     */
    public function connect(Request $request): JsonResponse
    {
        event(MmfConnected::class);
        return response()->json([
            'message' => 'Connected to MMF list server'
        ], 200);
    }
}
