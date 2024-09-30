<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class KeywordGroupStoreOrUpdateRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'label' => ['required', 'max:255'],
            'keyword_ids' => ['nullable', 'exists:keywords,id'],
        ];
    }
}
