<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});


Broadcast::channel('mmf-connection.*', function () {
    return true;
});

Broadcast::channel('frontend', function ($data) {
    return true;
});