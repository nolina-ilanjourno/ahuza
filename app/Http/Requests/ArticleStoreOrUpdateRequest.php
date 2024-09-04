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
            'category_ids' => ['required', 'exists:categories,id'],
            'internal_category_ids' => ['nullable', 'exists:internal_categories,id'],
            'keyword_ids' => ['nullable', 'exists:keywords,id'],
            'slug' => ['required', 'unique:articles,slug,' . ($this->article ? $this->article->id : 'NULL')],
            'published_at' => ['nullable', 'date'],
            'traductions' => ['required', 'array'],
            'traductions.*.traduction.article' => ['required'],
            'traductions.*.traduction.title' => ['required', 'max:255'],
            'traductions.*.traduction.description' => ['nullable'],
            'traductions.*.traduction.illustration_id' => ['nullable', 'exists:files,id'],
            'traductions.*.langue' => ['required', 'max:255'],
        ];
    }
}
