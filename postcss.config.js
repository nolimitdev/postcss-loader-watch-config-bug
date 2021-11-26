var Path = require('path');
var File = Path.resolve(__dirname, 'resources/vars-a.css'); // e.g. when changed to vars-b.css webpack does not recompile due to bug https://github.com/webpack-contrib/postcss-loader/issues/551

module.exports = (api) => {
    return {
        plugins : [
            ['postcss-custom-properties', { preserve : false, importFrom : File }],

            // Due to this bug https://github.com/webpack-contrib/postcss-loader/issues/551 also other usefull reasons I have created plugin postcss-add-dependencies where I can define dendencies...
            /*
            ['postcss-add-dependencies', { dependencies : [
                {type : "dependency", file : Path.resolve(__dirname, 'postcss.config.js')}, // to fix bug: https://github.com/webpack-contrib/postcss-loader/issues/551
                {type : "dependency", file : File} // to watch changes in CSS vars and recompile
            ]}],
            */
        ],
    }
};
