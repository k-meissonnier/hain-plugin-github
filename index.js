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
            payload: 'repository',
            title: 'Search repositories',
            icon: "#fa fa-bookmark",
            desc: 'Search on github - Repositories'
        });

        res.add({
            id: query_trim,
            payload: 'code',
            title: 'Search code',
            icon: "#fa fa-code",
            desc: 'Search on github - Code'
        });

        res.add({
            id: query_trim,
            payload: 'issue',
            title: 'Search issues',
            icon: "#fa fa-exclamation",
            desc: 'Search on github - Issues'
        });

         res.add({
            id: query_trim,
            payload: 'user',
            title: 'Search users',
            icon: "#fa fa-user",
            desc: 'Search on github - Users'
        });
    }

    function execute(id, payload) {
        if (payload == 'repository') {
            shell.openExternal(`https://github.com/search?utf8=✓&q=${id}`);
            return;
        }
         if (payload == 'code') {
            shell.openExternal(`https://github.com/search?q=${id}&type=Code&utf8=✓`);
            return;
        }
         if (payload == 'issue') {
            shell.openExternal(`https://github.com/search?q=${id}&type=Issues&utf8=✓`);
            return;
        }
         if (payload == 'user') {
            shell.openExternal(`https://github.com/search?q=${id}&type=Users&utf8=%E2%9C%93`);
            return;
        }

    }

    return {search, execute};
};