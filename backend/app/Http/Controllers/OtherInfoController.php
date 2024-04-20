<?php

namespace App\Http\Controllers;


use App\Models\HostelInfo;
use App\Models\HostelInfoLog;
use App\Models\OtherInfo;
use App\Models\StudentAccountInfo;
use App\Models\StudentAccountInfoLog;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use PHPUnit\Framework\MockObject\Builder\Stub;

class OtherInfoController extends Controller
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
        $HostelInfo = HostelInfo::find($registration_no);
        return response()->json($HostelInfo);
    }
    public function index2($registration_no)
    {
        $StudentAccountInfo = StudentAccountInfo::find($registration_no);
        return response()->json($StudentAccountInfo);
    }
    // public function index3($registration_no)
    // {
    //     $EmailInfo = OtherInfo::find($registration_no);
    //     return response()->json($EmailInfo);
    // }

    public function storeFromJson(Request $request)
    {
        $data = $request->input('data');
        $registrationNumber = $data['hostel_details']['registration_no'];
        // $registrationNumber2 = $data['student_account_details']['registration_no'];

        $existingRecord2 = StudentAccountInfo::where('registration_no', $registrationNumber)->first();
        
        if($existingRecord2) {
            // $recordLog2 = new StudentAccountInfoLog();
            // foreach ($existingRecord2->getAttributes() as $column => $value) {
            //     // Assign each column to the corresponding column in Table2
            //     if($column != 'id'){
            //         $recordLog2->{$column} = $value;
            //     }
            // }
            // // Save the row to Table2
            // $recordLog2->save();

            $existingRecord2->update($data['student_account_details']);
        } else {
            // Create a new record
            StudentAccountInfo::create($data['student_account_details']);
        }

        // $existingRecord3 = OtherInfo::where('registration_no', $registrationNumber)->first();
        
        // if($existingRecord3) {
        //     // $recordLog2 = new StudentAccountInfoLog();
        //     // foreach ($existingRecord2->getAttributes() as $column => $value) {
        //     //     // Assign each column to the corresponding column in Table2
        //     //     if($column != 'id'){
        //     //         $recordLog2->{$column} = $value;
        //     //     }
        //     // }
        //     // // Save the row to Table2 
        //     // $recordLog2->save();

        //     $existingRecord3->update($data['email_details']);
        // } else {
        //     // Create a new record
        //     OtherInfo::create($data['email_details']);
        // }

        // Check if a record with the same registration number already exists
        $existingRecord = HostelInfo::where('registration_no', $registrationNumber)->first();

        if ($existingRecord) {
            $recordLog = new HostelInfoLog();
            foreach ($existingRecord->getAttributes() as $column => $value) {
                // Assign each column to the corresponding column in Table2
                if($column != 'id'){
                    $recordLog->{$column} = $value;
                }
            }
            // Save the row to Table2
            $recordLog->save();

            // Update the existing record
            $existingRecord->update($data['hostel_details']);
            return response()->json($existingRecord, 200); // 200 for OK, since we're updating
        } else {
            // Create a new record
            $personalInfo = HostelInfo::create($data['hostel_details']);
            return response()->json($personalInfo, 201); // 201 for Created, since we're creating a new record
        }
    }

    public function update(Request $request)
    {
        $data = $request->json()->all();

        $OtherInfos = collect($data)->map(function ($item) {
            $row = HostelInfo::findOrFail($item['OtherInfoId']);
            $row->update($item);
            return $row;
        });

        return response()->json($OtherInfos, 201);
    }

    public function delete($id)
    {
        $HostelInfo = HostelInfo::find($id);
        if(!is_null($HostelInfo))
        {
            try{
                $HostelInfo->delete();
                return response()->json(['msg'=>'deleted'], 200);
            }
            catch(Exception $e)
            {
                return response()->json(['msg'=>$e], 404);
            }
        }
        return response()->json(['msg'=>'HostelInfo Not Found'], 404);
    }


    public function test(Request $request){
        return response()->json(['name'=>'hi'], 200);
    }
}