<?php

namespace App\Providers;

use App\Events\MmfConnected;
use Illuminate\Support\ServiceProvider;
use Laravel\Reverb\Events\MessageReceived;
use App\Listeners\MffConnectedListner;
use Illuminate\Support\Facades\Event;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Event::listen(function(\Laravel\Reverb\Events\MessageReceived $event){
            \Log::debug("EBANII LARAVEL, data:" . $event->message);
            
        });
    }
}
