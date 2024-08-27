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
            'illustration_id' => ['nullable', 'exists:files,id'],
            'title' => ['required', 'max:255'],
            'category_ids' => ['required', 'exists:categories,id'],
            'internal_category_ids' => ['nullable', 'exists:internal_categories,id'],
            'slug' => ['required', 'unique:articles,slug,' . ($this->article ? $this->article->id : 'NULL')],
            'published_at' => ['nullable', 'date'],
            'traductions' => ['required', 'array'],
            'traductions.*.traduction' => ['required'],
            'traductions.*.langue' => ['required', 'max:255'],
        ];
    }
}
