'use strict';

module.exports = (pluginContext) => {
    const shell = pluginContext.shell;

    function search(query, res) {
        const query_trim = query.trim();
        if (query_trim.length == 0) {
            return;
        }
        res.add({
            id: query_trim,
            payload: 'open',
            title: 'Search ' + query_trim,
            desc: 'Search in github'
        });
    }

    function execute(id, payload) {
        if (payload !== 'open') {
            return;
        }
        shell.openExternal(`https://github.com/search?utf8=✓&q=${id}`);
    }

    return {search, execute};
};