<?php

return [

    'default' => env('FILESYSTEM_DISK', 'gcs'),
    'disks' => [
        'gcs' => [
            'driver' => 'gcs',
            'key_file_path' => env('GOOGLE_APPLICATION_CREDENTIALS', null),
            'bucket' => env('GOOGLE_CLOUD_STORAGE_BUCKET', 'stamter'),
            'visibility' => 'public',
        ],

    ],

    'links' => [
        public_path('storage') => storage_path('app/public'),
    ],

];
