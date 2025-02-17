<?php

namespace App\Console\Commands;

use App\Events\MmfConnected;
use Illuminate\Console\Command;

class ConnectMmf extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'mmf:connect';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        event(new MmfConnected());
    }
}
