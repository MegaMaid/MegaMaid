<?php

namespace App\Http\Controllers\Api;

use App\Lib\Api\TMDB;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\SearchRequest;

class SearchController extends Controller
{
    /**
     * Run a search of all media types for the query parameter
     *
     * @param  \App\Http\Requests\Api\SearchQueryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SearchRequest $request)
    {
        $tmdb = new TMDB;
        $searchType = 'search' . ucfirst(camel_case($request->input('type', 'all')));
        $results = $tmdb->{$searchType}($request->input('query'), $request->input('page', 1));
        foreach($results as &$result)
        {
            if(gettype($result) === 'array') $result['search_type'] = $request->input('type');
        }
        $results['search_type'] = $request->input('type');
        return response()->json($results);
    }
}
