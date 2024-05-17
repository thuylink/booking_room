<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'id_category' => 'required|integer',
            'privacy_type' => 'required|string',
            'location' => 'required|string',
            'capacity' => 'required|string',
            'amenities' => 'required|string',
            'image' => 'nullable|array',
            'image.*' => 'nullable|image',
            'image360' => 'nullable|array',
            'image360.*' => 'nullable|image',
            'title' => 'required|string',
            'description' => 'required|string',
            'price' => 'required|string',
            'id_owner'=>'required|integer'
        ];
    }
}
