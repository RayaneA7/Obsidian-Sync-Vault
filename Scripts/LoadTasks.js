async function main(dv) {
    const fileContent = await dv.io.load(dv.current().file.path);

    // Extract tags from the "Tags:" section
  //  const tagMatch = fileContent.match(/\*\*Tags:\*\*\s*(.*)/);
//    const extractedTags = tagMatch ? tagMatch[1].match(/#\S+/g) : [];
   const extractedTags = dv.current().tags;


    if (!extractedTags || extractedTags.length === 0) {
        dv.paragraph("⚠️ No tags found in this file.");
        return;
    }

    //const firstFileTag = extractedTags[0]; // Get first tag
    const firstFileTag = extractedTags[0]


    // Collect all tasks from "Daily" notes
    const tasks = dv.pages('"Daily"')
        .file.tasks
        .filter(t => t.text.includes(firstFileTag)); // Check if the tag is present in the task text

    if (!tasks || tasks.length === 0) {
        dv.paragraph("✅ No matching tasks found.");
    } else {
        dv.taskList(tasks);
    }
}

main(dv);

