(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [' ', Hi!, Custom
        ]
    };

    // Register the extension
    ScratchExtensions.register('Scratch 3.0 Blocks', descriptor, ext);
})({});
