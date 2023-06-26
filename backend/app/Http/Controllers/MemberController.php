<?php

namespace App\Http\Controllers;

use App\Models\member;
use Illuminate\Http\Request;
use App\Http\Requests\memberStoreRequest;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //this method fetch all item in database
       $memberList= member::all();
       return response()->json(['members' => $memberList],200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $req)
    {
        //
        $member= new member();
        $member->name=$req->input('name');
        $member->age=$req->input('age');
        $member->address=$req->input('address');

            $member->save();
            return response()->json($member);
    }

    /**
     * Store a newly created resource in storage.
     */
    /* i dont use store and update function but if uyou want you can do on these store 
    validate and insert into database and use put method for updTE*/
    public function store(memberStoreRequest $request)
    {
        //validate our form element value
        try {
            // Create member
          $mem=  member::create([
                'name' => $request->name,
                'age' =>$request->age,
                'address' => $request->address
            ]);
      $mem->save();
            // Return Json Response
            return response()->json($mem,200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!"
            ],500);
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(member $id)
    {
        //
        $memberList = member::find($id);
        if(!$memberList){
          return response()->json([
             'message'=>'member Not Found.'
          ],404);
        }
       
        // Return Json Response
        return response()->json([
           'member' => $memberList
        ],200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit( Request $request, $id)
    {
        //
        $member=member::find($id);
        $member->name=$request->input('name');
        $member->age=$request->input('age');
        $member->address=$request->input('address');
        $member->save();
        return response()->json($member);
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(memberStoreRequest $request, $id)
    {
        //
        try {
            // Find member
            $member = member::find($id);
            if(!$member){
              return response()->json([
                'message'=>'member Not Found.'
              ],404);
            }
      
            //echo "request : $request->image";
            $member->name = $request->name;
            $member->age = $request->age;
            $member->address = $request->adress;
      
         
      
               
      
            // Update member
            $member->save();
      
            // Return Json Response
            return response()->json([
                'message' => "member successfully updated."
            ],200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!"
            ],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $member = member::find($id);
        if(!$member){
          return response()->json([
             'message'=>'member Not Found.'
          ],404);
        }
      
       
      
        
      
        // Delete member
        $member->delete();
      
        // Return Json Response
        return response()->json([
            'message' => "member successfully deleted."
        ],200);
    
    }
}
