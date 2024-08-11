<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FAQStoreOrUpdateRequest extends FormRequest
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
            'traductions' => ['required', 'array'],
            'traductions.*.traduction.question' => ['required', 'max:255'],
            'traductions.*.traduction.answer' => ['required'],
            'traductions.*.langue' => ['required', 'max:255'],
        ];
    }
}
