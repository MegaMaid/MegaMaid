<?php

namespace App\Http\Controllers\Api;

use App\MediaRecord;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\AddMediaRequest;

class RequestMediaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(MediaRecord::where('source', 'megamaid')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AddMediaRequest $request)
    {
        $data = [
            'source' => 'megamaid',
            'type' => $request->input('type'),
            'fk' => 'tmdb-' . $request->input('id'),
            'json' => $request->all(),
            'tmdbId' => $request->input('id'),
            'status' => 'missing'
        ];

        return response()->json(MediaRecord::updateOrCreate(['source' => $data['source'], 'fk' => $data['fk']], $data));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(MediaRecord::where('source', 'megamaid')->where('fk', $id)->first());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(AddMediaRequest $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
