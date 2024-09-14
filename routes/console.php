<?php

use App\Console\Commands\GenerateSitemap;
use Illuminate\Support\Facades\Schedule;

Schedule::command(GenerateSitemap::class)->daily();
