<?php

namespace App\Http\Controllers;


use App\Models\EducationInfo;
use App\Models\EducationInfoLog;
use App\Models\PrevEducationInfo;
use App\Models\PrevEducationInfoLog;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;


class EducationInfoController extends Controller
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
        $EducationInfo = EducationInfo::find($registration_no);
        return response()->json($EducationInfo);
    }

    public function index2($registration_no)
    {
        $prevEducationInfos = PrevEducationInfo::where('registration_no', $registration_no)->get();
        return response()->json($prevEducationInfos->toArray());
    }

    public function storeFromJson(Request $request)
    {
        // $data = $request->input('data');
        // $EducationInfo = EducationInfo::create($data);
        // return response()->json($EducationInfo, 201);

        $data = $request->input('data');
        $registrationNumber = $data['education_details']['registration_no'];

        // Check if a record with the same registration number already exists
        $existingRecord = EducationInfo::where('registration_no', $registrationNumber)->first();

        $prevEduRecords = PrevEducationInfo::where('registration_no', $registrationNumber)->get();

        // // Loop through each row
        foreach ($prevEduRecords as $rec) {
            // Create a new instance of Table2 and assign the entire row object from Table1
            $recordPrevLog = new PrevEducationInfoLog();
            foreach ($rec->getAttributes() as $column => $value) {
            //     // Assign each column to the corresponding column in Table2
                if($column != 'id'){
                    $recordPrevLog->{$column} = $value;
                }
            }
            // // Save the row to Table2
            $recordPrevLog->save();

            // Delete the row from Table1
            $rec->delete();
        }

        $prevEdu = $data['prev_education'];

        $fields = collect($prevEdu)->map(function ($item) {
            return PrevEducationInfo::create($item);
        });

        if ($existingRecord) {
            $recordLog = new EducationInfoLog();
            foreach ($existingRecord->getAttributes() as $column => $value) {
                // Assign each column to the corresponding column in Table2
                if($column != 'id'){
                    $recordLog->{$column} = $value;
                }
            }
            // Save the row to Table2
            $recordLog->save();
            // Update the existing record
            $existingRecord->update($data['education_details']);
            return response()->json($existingRecord, 200); // 200 for OK, since we're updating
        } else {
            // Create a new record
            $personalInfo = EducationInfo::create($data['education_details']);
            return response()->json($personalInfo, 201); // 201 for Created, since we're creating a new record
        }
    }

    public function update(Request $request)
    {
        $data = $request->json()->all();

        $EducationInfos = collect($data)->map(function ($item) {
            $row = EducationInfo::findOrFail($item['EducationInfoId']);
            $row->update($item);
            return $row;
        });

        return response()->json($EducationInfos, 201);
    }

    public function delete($id)
    {
        $EducationInfo = EducationInfo::find($id);
        if(!is_null($EducationInfo))
        {
            try{
                $EducationInfo->delete();
                return response()->json(['msg'=>'deleted'], 200);
            }
            catch(Exception $e)
            {
                return response()->json(['msg'=>$e], 404);
            }
        }
        return response()->json(['msg'=>'EducationInfo Not Found'], 404);
    }


    public function test(Request $request){
        return response()->json(['name'=>'hi'], 200);
    }
}