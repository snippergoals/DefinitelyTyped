/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('tasks', 'v1', () => {
        /** now we can use gapi.client.tasks */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** Manage your tasks */
            'https://www.googleapis.com/auth/tasks',
            /** View your tasks */
            'https://www.googleapis.com/auth/tasks.readonly',
        ];
        const immediate = true;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle succesfull authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
        run();
    });

    async function run() {
        /** Deletes the authenticated user's specified task list. */
        await gapi.client.tasklists.delete({
            tasklist: "tasklist",
        });
        /** Returns the authenticated user's specified task list. */
        await gapi.client.tasklists.get({
            tasklist: "tasklist",
        });
        /** Creates a new task list and adds it to the authenticated user's task lists. */
        await gapi.client.tasklists.insert({
        });
        /** Returns all the authenticated user's task lists. */
        await gapi.client.tasklists.list({
            maxResults: "maxResults",
            pageToken: "pageToken",
        });
        /** Updates the authenticated user's specified task list. This method supports patch semantics. */
        await gapi.client.tasklists.patch({
            tasklist: "tasklist",
        });
        /** Updates the authenticated user's specified task list. */
        await gapi.client.tasklists.update({
            tasklist: "tasklist",
        });
        /**
         * Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when
         * retrieving all tasks for a task list.
         */
        await gapi.client.tasks.clear({
            tasklist: "tasklist",
        });
        /** Deletes the specified task from the task list. */
        await gapi.client.tasks.delete({
            task: "task",
            tasklist: "tasklist",
        });
        /** Returns the specified task. */
        await gapi.client.tasks.get({
            task: "task",
            tasklist: "tasklist",
        });
        /** Creates a new task on the specified task list. */
        await gapi.client.tasks.insert({
            parent: "parent",
            previous: "previous",
            tasklist: "tasklist",
        });
        /** Returns all tasks in the specified task list. */
        await gapi.client.tasks.list({
            completedMax: "completedMax",
            completedMin: "completedMin",
            dueMax: "dueMax",
            dueMin: "dueMin",
            maxResults: "maxResults",
            pageToken: "pageToken",
            showCompleted: true,
            showDeleted: true,
            showHidden: true,
            tasklist: "tasklist",
            updatedMin: "updatedMin",
        });
        /**
         * Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a
         * different position among its sibling tasks.
         */
        await gapi.client.tasks.move({
            parent: "parent",
            previous: "previous",
            task: "task",
            tasklist: "tasklist",
        });
        /** Updates the specified task. This method supports patch semantics. */
        await gapi.client.tasks.patch({
            task: "task",
            tasklist: "tasklist",
        });
        /** Updates the specified task. */
        await gapi.client.tasks.update({
            task: "task",
            tasklist: "tasklist",
        });
    }
});
