<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BaseController extends Controller
{
    //
    public function sendResponse($result,$message){
        $response = [
            'success'=>true,
            'data' => $result,
            'message' => $message
        ];

        return response()->json($response,200);
    }

    public function sendErrorResponse($error,$errorMessage=[],$code=404){
        $response = [
            'success'=> false,
            'message'=>$errorMessage
        ];
        if(!empty($errorMessage)){
            $response['data'] = $errorMessage;
        }
        return response()->json($response,$code);
    }
}
