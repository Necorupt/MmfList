<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
      @vite(['resources/ts/index.tsx', 'resources/css/app.css'])
    </head>
    <body class="bg-slate-100 dark:bg-slate-800">
        <div id="app">

        </div>
    </body>
</html>
