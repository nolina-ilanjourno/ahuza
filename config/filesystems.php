<?php

return [

    'default' => env('FILESYSTEM_DISK', 'gcs'),

    'disks' => [

        'gcs' => [
            'driver' => 'gcs',
            'key_file_path' => env('GOOGLE_APPLICATION_CREDENTIALS', null),
            'visibility' => 'public',
            'metadata' => ['cacheControl' => 'public,max-age=86400'], // optional: default metadata
        ],

    ],

    'links' => [
        public_path('storage') => storage_path('app/public'),
    ],

];
