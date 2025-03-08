class TasksQuery {
    /**
     * Fetches tasks from daily notes matching project tags dynamically.
     * @param {Object} dv - Dataview object from Obsidian.
     */
    getTasks(dv) {
        let projectTags = dv.current().file.etags.filter(t => t.startsWith("#project/"));

        let tasks = dv.pages('"Daily"')
            .where(p => p.text && projectTags.some(tag => p.text.includes(tag)))
            .sort(p => p.file.day, 'desc');

        dv.taskList(tasks);
    }
}

//module.exports = new TasksQuery();

