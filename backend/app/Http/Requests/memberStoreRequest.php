<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class memberStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        //return false;
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        if(request()->isMethod('post')) {
            return [
                'name' => 'required|string|max:258',
                'age' => 'required|max:2048',
                'adress' => 'required|string'
            ];
        } else {
            return [
                'name' => 'required|string|max:258',
                'age' => 'nullable|max:2048',
                'address' => 'required|string'
            ];
        }
    }
  
    public function messages()
    {
        if(request()->isMethod('post')) {
            return [
                'name.required' => 'Name is required!',
                'age.required' => 'age is required!',
                'adress.required' => 'adress is required!'
            ];
        } else {
            return [
                'name.required' => 'Name is required!',
                'age.required' => 'Age is required!',
                'address.required' => 'address is required!'
            ];   
        }
    }
    
}
