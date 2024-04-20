<?php

namespace App\Http\Controllers;


use App\Models\ParentsInfo;
use App\Models\ParentsInfoLog;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;


class ParentsInfoController extends Controller
{
    // public function store(Request $request)
    // {
    //     $request->validate([
    //         'title' => 'required|string',
    //         'description' => 'required|string',
    //     ]);

    //     $product = new Product();
    //     $product->title = $request->title;
    //     $product->description = $request->description;
    //     $product->save();

    //     return response()->json(['message' => 'Product created successfully'], 201);
    // }

    // public function index()
    // {
    //     $products = Product::all();

    //     return response()->json($products, 200);
    // }

    public function index($registration_no)
    {
        $ParentsInfo = ParentsInfo::find($registration_no);
        return response()->json($ParentsInfo);
    }

    public function storeFromJson(Request $request)
    {
        // $data = $request->input('data');
        // $ParentsInfo = ParentsInfo::create($data);
        // return response()->json($ParentsInfo, 201);

        $data = $request->input('data');
        $registrationNumber = $data['registration_no'];

        // Check if a record with the same registration number already exists
        $existingRecord = ParentsInfo::where('registration_no', $registrationNumber)->first();

        if ($existingRecord) {
            $recordLog = new ParentsInfoLog();
            foreach ($existingRecord->getAttributes() as $column => $value) {
                // Assign each column to the corresponding column in Table2
                if($column != 'id'){
                    $recordLog->{$column} = $value;
                }
            }
            // Save the row to Table2
            $recordLog->save();

            // Update the existing record
            $existingRecord->update($data);
            return response()->json($existingRecord, 200); // 200 for OK, since we're updating
        } else {
            // Create a new record
            $personalInfo = ParentsInfo::create($data);
            return response()->json($personalInfo, 201); // 201 for Created, since we're creating a new record
        }
    }

    public function update(Request $request)
    {
        $data = $request->json()->all();

        $ParentsInfos = collect($data)->map(function ($item) {
            $row = ParentsInfo::findOrFail($item['ParentsInfoId']);
            $row->update($item);
            return $row;
        });

        return response()->json($ParentsInfos, 201);
    }

    public function delete($id)
    {
        $ParentsInfo = ParentsInfo::find($id);
        if(!is_null($ParentsInfo))
        {
            try{
                $ParentsInfo->delete();
                return response()->json(['msg'=>'deleted'], 200);
            }
            catch(Exception $e)
            {
                return response()->json(['msg'=>$e], 404);
            }
        }
        return response()->json(['msg'=>'ParentsInfo Not Found'], 404);
    }


    public function test(Request $request){
        return response()->json(['name'=>'hi'], 200);
    }
}