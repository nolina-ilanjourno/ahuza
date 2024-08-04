<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ArticleStoreOrUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'max:255'],
            'content' => ['required'],
            'category_ids' => ['required', 'exists:categories,id'],
            'slug' => ['required', 'unique:articles,slug,' . optional($this->article)->id],
        ];
    }
}
